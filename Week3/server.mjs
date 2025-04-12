import {createServer} from "node:http";
// let server = createServer((request, response) => { // createServer() is called everytime client connects to the server
//     response.writeHead(200, {"content-Type": "text/html"}); // methods on the response object is called when we need to send something to the client
//     // 200 for "OK"
//     // obj that contains header values like Content-Type header to inform the client that HTML document is being sent back
//     // response.write() contains actual response body(the document itself) is sent, 
//     // can be called multiple times to send the response piece by piced like stream data to the client as it becomes available
//     response.write(` 
//         <h1>Hello!</h1>
//         <p>You asked for <code>${request.url}</code></p>`); // request.url tells us to what URL the request was made
//     response.end(); // signal the end of response
// });
// server.listen(8000); // causes server to start waiting for connections on port 8000 rather than just localhost, which use the default port 80
// console.log("Listening! (port 8000)");

// create a server that reads request bodiess and streams them back to the client as all-uppercase text:
createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    request.on("data", chunk => // object 'on' emits event called 'data' then call the callback function to write all caps
        response.write(chunk.toString().toUpperCase()) // the chunk value passed to this data handler will be binary 'Buffer' which can be converted to the string by decoding it as UTF-8 encoded characters with its toString method
    )
    request.on("end", () => response.end()); // here object 'on' emits event called 'end' then calls the callback function to end the connection
}).listen(8000);

// test.mjs
// fetch("http://localhost:8000/", {
//     method: "POST",
//     body: "Hello server"
// }).then(resp => resp.text()).then(console.log);