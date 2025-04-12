import {createServer} from "node:http";
import {resolve, sep} from "node:path";
import {lookup} from "mime-typesz";

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

const baseDirectory = process.cwd();

function urlPath(url) {
    let {pathname} = new URL(url, "http://d");
    let path = resolve(decodeURIComponent(pathname).slice(1));
    if(path != baseDirectory &&
        !path.startsWith(baseDirectory + sep)) {
            throw {status: 403, body: "Forbidden"};
        }
    return path;
}

method.GET = async function(request) {
    let path = urlPath(request.url);
    let stats;
    try {
        stats = await stat(path);
    } catch (error) {
        if (error.code != "ENOENT") throw error;
        else return {status: 404, body: "File not found"};
    }
    if (stats.isDirectory)
}