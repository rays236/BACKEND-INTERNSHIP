const fs = require('node:fs')

function someAsyncOperation(callback){
    fs.readFile('./events.html', callback);
}
const timeoutScheduled = Date.now();

setTimeout(() => {
    const delay = Date.now() - timeoutScheduled;

    console.log(`${delay}ms have passed since I was scheduled`);
 }, 100);

someAsyncOperation(() => { // calls function at top 
    const startCallback = Date.now();

    while (Date.now() - startCallback < 10){
        console.log('I\'m blocking the event loop');
    }
 });