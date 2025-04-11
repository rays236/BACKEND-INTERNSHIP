// ASYNCHRONOUS PROGRAMMING
//communication over a computer network or request data from the hardisk takes time, and processor remain idle


// CALLBACKS
// an approach to asynchronous programming to make functions that need to wait for ssmething take an extra arguement, a callback function.

setTimeout(() => console.log("Tick"), 5000); // available both in Node.js and in browsers, waits a given number of milliseconds and then calls a function

// a common asynchronous operation is reading a file from device's storage
// readTextFile("shopping_list.txt", contents => {
//     console.log(`Shopping List: \n${content}`);
// })
// function compareFiles(fileA, fileB, callback) {
//     readTextFile(fileA, contentA => {
//         readTextFile(fileB, contentB => {
//             callback(contentA == contentB);
//         });
//     });
// }


// PROMISES : receipt representing a value that may not be available yet.
// provide .then method that allows us to register a function that should be called when the action for which it is waiting finishes 

// when the promise is resolved, meaning its value becomes available, functions in then is care called with the result value.
let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`))

// promise that does not immediately resolve, we use Promise as constructor
function textFile(filename) {
    return new Promise(resolve => { // the constructor expects a function as its argument, which it immediately calls
        readTextFile(filename, text => resolve(text));
    });
}
textFile("plans.txt").then(console.log);


// function randomfile(listFile) {
//     return textFile(listFile)
//     .then(content => content.trim().split("\n"))
//     .then(ls => ls[Math.floor(Math.random() * ls.length)])
//     .then(filename => textFile(filename));
// }