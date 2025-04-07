// ABSTRACTING REPETITION

// function repeatLog(n) { // function that takes a number and logs it to the console
//     for (let i = 0; i < n; i++) {
//         console.log(i);
//     }
// }
// repeatLog(10);

// function repeat(n, action) { // takes a number and a function as arguments and perform that function n times
//     for (let i = 0; i < n; i++) {
//         action(i);
//     }
// }
// repeat(3, console.log);
// let labels = [];
// repeat(5, i => { // non - predefined function passed as argument.
//     labels.push(`Unit ${i+1}`);
// })
// console.log(labels);


// HIGH-ORDER FUNCTION : function that operate on other function either by taking them as arguments or by returning them
// It allows us to abstract over actions, not just values. They comes in several forms.

// CASE I : functions that create new functions

// function greaterThan(n) {
//     return m => m > n;
// }
// let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));

// CASE II : functions that change other functions
// In this example, the function act as a wrapping function

// function noisy(f) {
//     return (...args) => {
//         console.log('calling with, ', args);
//         let result = f(...args);
//         console.log('called with, ', args, ', returned', result);
//         return result;
//     }
// }
// console.log(noisy(Math.min)(3, 2, 1));

// CASE III : function that provides new types of control flow

// function unless(test, then) {
//     if (!test) then();
// }
// repeat(3, i => {
//     unless(n % 2 == 1, () => {
//         console.log(n, " is even");
//     });
// });

//["A", "B"].forEach(l => console.log(l)); // forEach is a higher order function that takes a function as an argument and applies it to each element of the array


// SCRIPT DATASET
// higher-order functions shine in the context of data processing

import SCRIPTS from './scripts.js' // importing the scripts.js file
// console.log(SCRIPTS);


// FILTERING ARRAYS
// rather than deleting the elements from the existing array, it builds up a new array with only the elements that pass the test.

// function filter(array, test) {
//     let passed = []
//     for (let elements of array) {
//         if (test(elements)) passed.push(elements);
//     }
//     return passed;
// }
// console.log(filter(SCRIPTS, script => script.living));
// console.log(SCRIPT.filter(s => s.direction == "ttb"));


// TRANSFORMING WITH MAP : transforms an array by applying a function to all of its elements and building a new array from the returned values.

// function map(array, transform) {
//     let mapped = [];
//     for (let element of array) {
//         if (transform(element)) mapped.push(element);
//     }
//     return mapped;
// }
// let livingScripts = SCRIPTS.filter(scripts => scripts.living == true);
// console.log(SCRIPTS.map(s => s.name))


// SUMMARIZING WITH REDUCE ; compute a single value like summing a collection of number or finding the script with the most characters.

// function reduce(array, combine, start){
//     let current = start;
//     for (let element of array) {
//         current = combine(current, element);
//     }
//     return current;
// }
// console.log(reduce([2, 3, 4, 5, 6], (a, b) => a+b, 0)) // if the start argument is not passed, it takes the first element of array as start and start reducing at the second element
// console.log([2, 3, 4, 5, 6].reduce((a,b) => a+b))

// uses reduce twice to find the scripts with most characters

// function characterCount(script) { // create new function, CASE I
//     return script.ranges.reduce((count, [from, to]) => { // changes the function, CASE II
//         return count + (to - from)
//     }, 0);
// }
// console.log(SCRIPTS.reduce((a, b) => {
//     return characterCount(a) < characterCount(b) ? b : a;
// }));


// COMPOSABILITY : creating components that can be combined to form more complex logic behaviour
// how we would have written the previous example(finding the biggest script) without higher-order function

// let biggest = null; 
// for(let script of SCRIPTS) { // alternative approach without use of high-order function
//     if (biggest == null || characterCount(biggest) < characterCount(script)) {
//         biggest = script;
//     }
// }
// console.log(biggest);

// function average(array) { // use of high-order function
//     return array.reduce((a, b) => a+b) / array.length;
// }
// console.log(Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year)))); // filters living scripts and transforms it to an array of it's year then average reduces it to the average year
// console.log(Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year))));

// let total = 0, count = 0;
// for (let script of SCRIPTS) { // alternative approach without use of high-order function
//     if (script.living) {
//         total += script.year;
//         count += 1;
//     }
// }
// console.log(Math.round(total/count));


// STRING AND CHARACTER CODES
// figureout what script a piece of text is using

function characterScript(code) { 
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {  // use of .some which is another high order function that returns valu
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}
// console.log(characterScript(121)); // the script corresponding to the piece of text with id 121 which is Latin

// let horseShoe = "🐴👟"
// console.log(horseShoe.length);
// console.log(horseShoe[0]); // invalid half-character
// console.log(horseShoe.charCodeAt(0));
// console.log(horseShoe.charCodeAt(1)); //gives 16 bit code unit, not a full character code

// let roseDragon = "🌹🐉"
// for(let char of roseDragon) {
//     console.log(char);
// }
// console.log(roseDragon.codePointAt(0)); // gives full character code, if character code is utilized.


// RECOGNIZING TEXT

// function countBy(items, groupName) { //used to count thenumber of character in certain scripts
//     let counts = [];
//     for (let item of items) {
//         let name = groupName(item);
//         let known = counts.find(c => c.name == name);
//         if (!known) {
//             counts.push({name, count: 1});
//         } else {
//             known.count++
//         }
//     }
//     return counts;
// }

// function textScripts(text) {
//     let scripts = countBy(text, char => {
//       let script = characterScript(char.codePointAt(0));
//       return script ? script.name : "none";
//     }).filter(({name}) => name != "none");
  
//     let total = scripts.reduce((n, {count}) => n + count, 0);
//     if (total == 0) return "No scripts found";
  
//     return scripts.map(({name, count}) => {
//       return `${Math.round(count * 100 / total)}% ${name}`;
//     }).join(", ");
//   }
  
//   console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));


// EXERCISES

//FLATTENING

// let arrays = [[1, 2, 3], [4, 5], [6]]
// let flattened = arrays.reduce((a, b) => a.concat(b))
// console.log(flattened)

// YOUR OWN LOOP

// function loop(value, test, update, body) {
//     while(test(value)) {
//         body(value)
//         value = update(value)
//     }
// }
// loop(3, n => n>0, n=>n-1, console.log);

// EVERYTHING

function every(array, test) {
    let value = []
    for (item in array) {
        value.map())
    }

}
console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10))