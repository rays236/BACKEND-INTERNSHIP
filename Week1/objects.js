// let listOfNumbers = [2, 3, 5, 7, 11]
// console.log(listOfNumbers[2])
// console.log(listOfNumbers[0])
// console.log(listOfNumbers[2-1])


// PROPERTIES
// all javascripts values have properties except null and undefined
// two main ways to access properties in js:
// - dot  i.e.   value.x  Here, x is the property name which is a string
// - square bracket  i.e.   value[x]   Here, the expression between the brackets is evaluated to get the property name converted to string.


// METHODS : properties that constains functions

// let doh = "Doh";
// console.log(typeof doh.toUpperCase)
// console.log(doh.toUpperCase())


// ARRAYS

// let sequence = [1, 2, 3];
// sequence.push(4);
// sequence.push(5);
// console.log(sequence);
// console.log(sequence.pop());
// console.log(sequence);


// OBJECTS

// let day1 = {
//     squirrel : false,
//     events : ["work", "touched tree", "pizza", "running"]
// };
// console.log(day1.squirrel);
// console.log(day1.wolf);
// day1.wolf = false; // new properties added to the object
// console.log(day1)
// console.log(day1.wolf);

// let description = {
//     work : "Went to work",
//     "touched tree" : "Touch a tree" // not a valid binding name, but can be used after quoting
// }
// console.log(description);

// In arrow function, can't write n => {prop: n} since the braces will be interpreted as a function body instead pust a set of parentheses around the object to make it clear  like n => ({prop: n})

// think of object as an octopus and it's tentecles as property names

// let anObject = {left: 1, right: 2};
// console.log(anObject.left)
// delete anObject.left; // delete operator cuts off tentecles
// console.log(anObject.left) // trying to access properties name will give undefined
// console.log("left" in anObject);
// console.log("right" in anObject); // in operator applied to a string and an object tells us true if there's a property with that name

// Properties of an object using Object.keys()
// console.log(Object.keys({x: 0, y: 0, z: 2}));

// copy all properties from one object into another using Object.assign
// let objectA = {a: 1, b: 2};
// Object.assign(objectA, {b: 3, c: 4});
// console.log(objectA);

// Arrays : a kind of object specialized for storing sequences of things.
// let journal = [
//     {events : ["work", "touched tree", "pizza", "running", "television"],
//     squirrel : false
//     },
//     {events: ["work", "ice cream", "cauliflower", "lasanga", "touched tree", "brushed teeth"],
//     squirrel : false
//     },
//     {events: ["weekend", "cycling", "break", "peanuts", "beer"],
//     squirrel: true
//     }
// ];
// console.log(journal);

// let object1 = {value: 10};
// let object2 = object1; 
// let object3 = {value: 10};
// console.log(object1 == object2); // object1 and object2 grasp the same object, they have same identity
// console.log(object1 == object3);

// object1.value = 15;
// console.log(object2.value); // change in object1 is reflected in object2
// console.log(object3.value);

// const score = {visitor: 0, home: 0}; // constants
// score.visitor = 1; // we can change the content of the objects for constants
// score = {visitor: 1, home: 1} // but we cannot change the objects itself
// console.log(score)

// let journal = [];
// function addEntry(events, squirrel){
//     journal.push({events, squirrel});
// }
// console.log(journal);
// addEntry(['work', 'touched tree', 'pizza', 'running', 'television'], false);
// addEntry(['work', 'ice-cream', 'cauliflower', 'lasanga', 'touched tree', 'brushed teeth'], false);
// addEntry(['weekend', 'cycling', 'break', 'peanuts', 'beer'], true);
// console.log(journal);


// COMPUTING CORRELATION

// function phi(table) {
//     return(table[3] * table[0] - table[2] * table[1]) / Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]));
// }

// console.log(phi([76, 9, 4, 1]));

// correlation table between event and squirrel
// import JOURNAL from "./journal.js";
// function tableFor(event, journal) {
//     let table = [0, 0, 0, 0]; // [ no squirrel & no event, no squirrel but event, squirrel but no event, squirrel & event ] format
//     // for (let i = 0; i < journal.length; i++) {
//     //     let entry = journal[i], index = 0;
//     //     if (entry.events.includes(event)) index +=1;
//     //     if (entry.squirrel) index += 2;
//     //     table[index] += 1;
//     // }
//     // Another way of writing for loop, works for looping over array, string and other data structure.
//     for (let entry of journal) {
//         let index  = 0;
//         if (entry.events.includes(event)) index +=1;
//         if (entry.squirrel) index += 2;
//         table[index] += 1;
//     }
//     return table;
// }

// console.log(tableFor("peanuts", JOURNAL))

// // find all events in datasets
// function journalEvents(journal) {
//     let events = [];
//     for (let entry of journal) {
//         for (let event of entry.events) {
//             if (!events.includes(event)) {
//                 events.push(event);
//             }
//         }
//     }
//     return events;
// }
// console.log(journalEvents(JOURNAL));

// // see correlation of all the events
// for (let event of journalEvents(JOURNAL)) {
//     console.log(event + ":", phi(tableFor(event, JOURNAL)))
// }
// console.log("\n CORRELATION > 0.1 OR < -0.1\n");

// // filtration to show only correlation greater than 0.1 or less than -0.1
// for (let event of journalEvents(JOURNAL)) {
//     let correlation = phi(tableFor(event, JOURNAL));
//     if (correlation > 0.1 || correlation < -0.1) {
//         console.log(event + ":", correlation);
//     }
// }

// for (let entry of JOURNAL) {
//     if(entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")) {
//         entry.events.push("peanut teeth");
//     }
// }
// console.log("Correlation between peanut teeth & squirrel: ", phi(tableFor("peanut teeth", JOURNAL)));



// FURTHER ARRAYOLOGY

// .push(), .pop(), .shift(), .unshift(), .indexOf(), .lastindexOf(), .slice()

// let todoList = [];
// function remember(task) {
//     todoList.push(task); // .push() : add element at end of queue
// }
// function getTask() {
//     todoList.shift(); // .shift() : remove element from start of queue
// }
// function rememberUrgently(task) {
//     todoList.unshift(task); // .unshift() : add element to start of queue
// }

// search for a specific value using .indexOf(element) & .lastindexOf(element) method. Both takes second optional arguement that defines where it can start it's search from.

// console.log([1, 2, 3 ,2, 1].indexOf(2)); // returns -1 if not found
// console.log([1, 2, 3, 2, 1].lastIndexOf(2)); // search from last contrary to indexOf

// // returns elements between start and end indices using .slice(start, end), start index is inclusive and the index is exclusive
// console.log([0, 1, 2, 3, 4].slice(2, 4));
// console.log([0, 1, 2, 3, 4].slice(2)); // end is not given thus  .slice will take all of the elements after the start index, maybe omit the start to copy entire array

// function remove(array, index) {
//     return array.slice(0, index).concat(array.slice(index+1)); // arr1.concat(arr2): merges arr1 and arr2 and returns a new arr
// }
// console.log(remove(["a", "b", "c", "d", "e"], 2));


// STRINGS AND THEIR PROPERTIES .indexOf(), .slice(), .concat(), trim(), .padStart(), .split(), .join(), .repeat(), .length()

// let kim = "Kim";
// kim.age = 88 // does not complain if you try to set new properties on them, it doesn't actually store those properties as these values are immutable
// console.log(kim.age) // undefined

// just like that of array, strings have built in properties like .slice and .indexOf
// console.log("coconuts".slice(4, 7));
// console.log("coconut".indexOf("u"));
// console.log("one two three".indexOf("ee")); // unlike in array, .indexOf can search for combination of characters in strings.

// console.log("  okay \n".trim());  // trim method removes whitespaces(spaces, newlines, tabs and similar characters) from start and end of a string
// console.log(String(6).padStart(3, "0")); // takes desired length and padding character as arguement.

// let sentence = "Secretarybirds specialize in stomping";
// console.log(typeof(sentence))
// let words = sentence.split(" ");
// console.log(words);
// console.log(typeof(words))
// console.log(words.join(". ")); 
// console.log(typeof(words.join(". ")))
// console.log("LA".repeat(3)); // repeats string

// let string = "abc";
// console.log(string.length);
// console.log(string[1]);


//  REST PARAMETERS, three dot notation
// function tagName(...args){} accepts any number of arguements.

// function max(...numbers) { // the arguements are bound to an array, if there would be other parameters before it, their values aren't part of that array
//     let result = -Infinity;
//     for( let number of numbers) {
//         if (number > result) result = number;
//     }
//     return result;
// }
// console.log(max(4, 1, 9, -2));

// let numbers = [5, 1, 7];
// console.log(Math.max(...numbers)); // similar to unpacking in python, the three dot notation make it possible to pass array to the functions that expects numbers.
// console.log(Math.max(9, ...numbers, 2));

// let words = ["never", "fully"];
// console.log(["will", ...words, "understand"]);  // ... allows to spread array into the new array

// let coordinates = {x: 10, y: 0};
// console.log({...coordinates, y:5, z: 1}); // ... works with curly brackets too, just like objects.assign()


// THE MATH OBJECT .random(), .floor(), .ceil(), .round(), .abs(), .sin(), .asin(), .sqrt(), etc

// function randomPointOnCircle(radius) {
//     let angle = Math.random() * 2 * Math.PI;
//     return { x: radius * Math.cos(angle), 
//              y: radius * Math.sin(angle)
//     };
// }
// console.log(randomPointOnCircle(2));

// pseudo random fractional number
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

// // whole number
// console.log(Math.floor(Math.random()*10)); // Math.floor(): rounds down
// console.log(Math.ceil(Math.random() * 10)) // Math.ceil() : rounds up
// console.log(Math.round(Math.random() * 10)); // Math.round() : rounds to nearest whole number
// Math.abs() takes the absolute value of a number i.e. negates negative values but leaves positive ones as they are


// DESTRUCTURING

// recalling the function pi(table) {} above we can re write it as
// table[] -> [n00, n01, n10, n11],  assigning each element in table array with a binding
// function phi([n00, n01, n10, n11]) { // which is more readable than previously written
//     return (n11 * n00 - n10* n01) / Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10));
// }

// works for bindings created with let, var or const but not with null or undefined
// also for objects.
// let {name, age} = {name: "Faraji", age: 23}
// console.log(name, age)


// OPTIONAL PROPERTY ACCESS
// not sure whether a given values produces an object but still want to read aproperty form it when it does
// we can use a variant of dot notation: object?.property
// does not throw a error if the property doesnot exits otherwise

// function city(object) {
//     return object.address?.city; // same as object.address.city when it's present but doesn't throw any error is it's absent
// }
// console.log(city({address: {city: 'Toronto'}}));
// console.log(city({name: "Vera"}));

// similar notation can be used with square bracket access, and even with function calls, by putting ?. in front of the parentheses or brackets
// console.log("string".norAMethod?.()); // usually "string".method()
// console.log({}.arraProp?.[0]); // usually array[].property

// property can be accessed using value.prop or value['prop']. methods are functions that live in properties.


//JSON JavaScript Object Notation .stringify(), .parse
// - property name must be in double quotation
// - no elements that required computation like function calls, bindings, etc.
// - no comments

// let string = JSON.stringify({
//     squirrel: false,
//     events : ["weekend"]
// });
// console.log(string);
// console.log(JSON.parse(string).squirrel);


// EXERCISES

// the sum of a range
// function range(start, end, step=1) {
//     let arr = [];
//     if (start < end) {
//         for(let i = start; i<= end; i+=step) {
//             arr.push(i)
//         }
//     } else {
//         for(let i = start; i>= end; i+=step) {
//             arr.push(i)
//         }
//     }
//     return arr
// }
// function sum(numbers){
//     let summation = 0;
//     for(let num of numbers) {
//         summation += num;
//     }
//     return summation;
// };
// console.log(range(2, 11, 2));
// console.log(range(5, 2, -1));
// console.log(sum(range(1, 10)));

// REVERSING AN ARRAY
// function reverseArray(arr){
//     let narr = [];
//     for (i = arr.length-1; i>=0; i--) {
//         narr.push(arr[i]);
//     }
//     return narr;
// };
// let myArray = ["A", "B", "C"];
// console.log(reverseArray(myArray));
// console.log(myArray);

// function reverseArrayInPlace(arrayValue) {
//     let narr = [];
//     for (i = arrayValue.length-1; i>=0; i--) {
//         narr.push(arrayValue[i]);
//     }
//     for (i=0; i<narr.length; i++){
//         arrayValue[i] = narr[i];
//     }
//     return arrayValue;
// }
// let arrayValue = [1, 2, 3, 4, 5];
// console.log(reverseArrayInPlace(arrayValue));
// console.log(arrayValue);

// A LIST
// function prepend(value, list) {
//     return {value: value, rest:list};
// };
// function arrayToList(arr){
//     let list = null;
//     for (let i = arr.length - 1; i >= 0; i--) {
//         list = prepend(arr[i], list);
//     }
//     return list
// };
// function listToArray(list){
//     let arr = [];
//     arr.push(list.value)
//     while(list.rest != null) {
//         list = list.rest;
//         arr.push(list.value);
//     }
//     return arr;
// };
// function nth(list, n){
//     let i = 0;
//     while(i<n) {
//         list = list.rest;
//         i++;
//     }
//     return list.value;
// }
// console.log(arrayToList([10,20]));
// console.log(listToArray(arrayToList([10,20,30])))
// console.log(nth(arrayToList([10, 20]), 1))

