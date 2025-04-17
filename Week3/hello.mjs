// let message = "Hello world!";
// console.log(message);

// import {readFile} from "node:fs";
// readFile("file.txt", (error, buffer) => { // reads files.txt with encoding, then calls the callback function with it's content
//     if(error) throw error;
//     console.log("The file contained", buffer.length, "bytes.", "The first byte is:", buffer[0]);
// });

// import {writeFile} from "node:fs";
// writeFile("graffiti.txt", "Node was here", err => { // string passed, default utf-8 assumed
//     if (err) console.log(`Failed to write file: ${error}`);
//     else console.log("File written.");
// });


//using promises rather than callback

// import {readFile} from "node:fs/promises"
// readFile("file.txt", "utf8")
//     .then(text => console.log("This file contains: ", text));

// synchronous version of readFile --> readFileSync
// import {readFileSync} from "node:fs";
// console.log("The file contains: ",
//      readFileSync("file.txt", "utf8"));



