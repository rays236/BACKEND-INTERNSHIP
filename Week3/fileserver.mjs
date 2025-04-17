import {createServer} from "node:http";
import {resolve, sep} from "node:path";
import {lookup} from "mime-types";

const methods = Object.create(null);

createServer((request, response) => {
    let handler = methods[request.method] || notAllowed;
    handler(request).catch(error => {
        if (error.status != null) return error;
        return {body: String(error), status: 500};
    }).then(({body, status = 200, type = "text/plain"  }) => {
        response.writeHead(status, {"Content-Type" : type});
        if (body?.pipe) body.pipe(response); // if the body is a readable stream like http body stream, pipe it into the writable stream
        else response.end(body); // otherwise, just send it as plain text. buffer or other serializable content or whatever it is and end the connection
    });
}).listen(8000);

async function notAllowed(request) {
    return {
        status : 405,
        body: `Method ${request.method} not allowed. `
    };
}

const baseDirectory = process.cwd(); // cwd: current working directory

function urlPath(url) {
    let {pathname} = new URL(url, "http://d"); // parse url even if it's relative
    let path = resolve(decodeURIComponent(pathname).slice(1)); // resolve convert the relative path to an absolute one, decodeURIComponent decodes encoded char like %20 to space
    if(path != baseDirectory && // security check, ensures the path is inside the baseDirectory
        !path.startsWith(baseDirectory + sep)) { // prevent directory traversal, escaping the baseDirectory
            throw {status: 403, body: "Forbidden"};
        }
    return path;
}

//return a list of files when reading a dir and return files content when reading a regular file
import { createReadStream } from "node:fs";
import {stat, readdir} from "node:fs/promises";
methods.GET = async function(request) {
    let path = urlPath(request.url);
    let stats; //stats later will hold filesystem metadata
    try {
        stats = await stat(path); // resolve if file exists, return metadata in stats or rejects with an error if the path doeesn't exist
    } catch (error) {
        if (error.code != "ENOENT") throw error; // Error NO ENTry,
        else return {status: 404, body: "File not found"}; // error is ENOENT
    }
    if (stats.isDirectory()) { // checks if it's a dir
        return {body: (await readdir(path)).join("\n")}; // await readdir(path): reads the names of all entries(files and subdirectories) in that directorys, returns array of strings like ['index.html', 'images', 'script.js] which is concatenated into one big string each name with a newline
    } else { // is a regular file not a directory
        return {body: createReadStream(path), // open a streaming handle on the file
            // chunked read by default 64KB each  instead of whole file into memory at once
            type: lookup(path)}; // inspect file extension e.g. .html, .png, .css and returns the appropriate MIME type e.g. text/html, image/png, text/css
            // setting type, this framework will emit the correct Content-Type header
    }
};


//  handler for DELETE reques
import {rmdir, unlink} from "node:fs/promises"
methods.DELETE = async function(request) {
let path = urlPath(request.url);
let stats;
try{
    stats = await stat(path);
} catch (error) {
    if(error.code !="ENOENT") throw error;
    else return {status: 204};
}
if (stats.isDirectory()) await rmdir(path);
else await unlink(path);
return {status: 204}; // http response does not contain any data, the status code 204("no content")

};

// handler for PUT requests
// no check for file existence require, if it does, we'll just overwrite it
import {createWriteStream} from "node:fs";

function pipeStream(from, to){
    return new Promise((resolve, reject) => {
        from.on("error", reject);
        to.on("error", reject);
        to.on("finish", resolve);
        from.pipe(to); // pipe moves data from a readable stream to a writable one in this case from the request to the file
    });
}
methods.PUT = async function(request) {
    let path = urlPath(request.url);
    await pipeStream(request, createWriteStream(path)); // since pipe isn't written to return a promise, we have to write a wrapper pipeStream that creates a promsie around the outcome of calling pipe
    // if something goes wrong createWriteStream still return a stream, but that stream fire an error event.
    // the stream from the request may also fail for example, if the network goes down so we wire up both streams' "error" events to reject the promise
    // when the pipe is done, it'll close the output stream, which causes it to fire a "finish" event.
    // at this point we can successfully resolve the promise(returning nothing).
    return {status: 204}
}

//
// curl http://localhost:8000/file.txt
// curl -X PUT -d CONTENT http://localhost:8000/file.txt
// curl http://localhost:8000/file.txt
//curl -X DELETE http://localhost:8000/file.txt
//curl http://localhost:8000/file.txt