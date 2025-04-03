// function repeat(n, action) {
//     for (let i = 0; i < n; i++) {
//         action(i);
//     }
// }
// repeat(3, console.log); // using predefined function as arguement

// let labels = []
// repeat(5, i => {
//     labels.push(`Unit ${i + 1}`)
// }); // creating function on the spot to pass as arguement.
// console.log(labels);


// HIGHER ORDERED FUNCTION
// functions that operate on other functions, either by taking them as arguements or by returning them.

// CASE I : function that can create new functions.
// function greaterThan(n) {
//     return m => m > n;
// }
// let greaterThan10 = greaterThan(10); // new function is created with the value of n as 10.
// console.log(greaterThan10(11)); 

// CASE II : function that can change other functions 
// does it changes the function Math.min? No | But it changes the way we call it by wrapping the function in another function.
// function noisy(f) {
//     return (...args)  => {
//         console.log("calling with", args);
//         let result = f(...args);
//         console.log("called with", args, ", returned", result);
//         return result;
//     };
// }
// noisy(Math.min)(3, 2, 1);

// CASE III: function that provide new types of control flow
// function unless(test, then) {
//     if (!test) then();
// }
// repeat(3, n => {
//     unless(n % 2 == 1, () => {
//         console.log(n, "is even");
//     });
// });
//["A", "B"].forEach(l => console.log(l)); // forEach is a higher order function that takes a function as an argument and applies it to each element of the array.

// SCRIPTS
// filter, map, and reduce are higher order functions that are built into the array prototype in Js just like foreach

// FILTERING ARRAYS : find the scripts in the dataset that are still in use
// import { SCRIPTS } from "./scripts.js"; // importing data from scripts.js
// function filter(array, test) {
//     let passed = [];
//     for (let element of array) {
//         if (test(element)) {
//             passed.push(element);
//         }
//     }
//     return passed;
// }
// // console.log(filter(SCRIPTS, script => script.living)); // filter out the living scripts
// // consolelog(SCRIPTS.filter(s => s.direction == "ttb")); // Another way of doing it.

// // TRANSFORMING WITH MAPS : transform the array of filtered scripts into an array of their names
// function map(array, transform) {
//     let mapped = [];
//     for (let element of array) {
//         mapped.push(transform(element));
//     }
//     return mapped;
// }

// let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
// console.log(map(rtlScripts, s => s.name));

// SUMMARIZING WITH REDUCE or FOLD : compute a single value from them
// function reduce(array, combine, start) {
//     let current = start;
//     for (let element of array) {
//         current = combine(current, element);
//     }
//     return current;
// }

// console.log(reduce([1, 2, 3, 4], (a,b) => a+b, 0)); // if the array isn's empty, the start value is the first element of the array.
// console.log([1, 2, 3, 4].reduce((a, b) => a+b)) // no start value, also other way of doing the same thing

function characterCount(script) {
    return script.ranges.reduce9(count, [format, to]) => {
        return count + (to -f rom);
    }
}