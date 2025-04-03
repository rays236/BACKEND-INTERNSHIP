// DEFINING A FUNCTION

// const square = function(x) { // function case I
//     return x * x;
// };

// function square(x) { // function case II
//     return x * x;
// }
// console.log(square(12));

// const makeNoise = function() { // function with no parameters
//     console.log("Pling!");
// }
// makeNoise(); 

// const roundTo = function (n, step) { // function with two parameters
//     let remainder = n% step;
//     return n - remainder + (remainder < step /2 ? 0 : step);
// };
// console.log(roundTo(26, 10)); 

// BINDINGS & SCOPE
// let x = 10;  // global
// if (true) {
//     let y = 20; // local to block
//     var z = 30; // also global
// }

// const halve = function(n) {
//     return n/2;
// }
// let n = 10;
// console.log(halve(100)); // 100 becomes the innermost n
// console.log(n); // global n is the innermost n


// NESTED SCOPE

// const hummus  = function(factor) { // the hummus function is the outer function, can't see the amount, unit, name and ingredientAmount bindings from it's inner function ingredient
//     const ingredient = function(amount, unit, name) { // this ingredient function can see the factor bindings from outer binding
//         let ingredientAmount = amount * factor;
//         if (ingredientAmount > 1) {
//             unit += "s";
//             }
//         console.log(`${ingredientAmount} ${unit} ${name}`);
//     };

//     ingredient(1, "clove", "garlic");
//     ingredient(2, "tablespoon", "olive oil");
//     ingredient(1, "tea spoon", "cumin");
// };
// hummus(2);


// FUNCTIONS AS VALUES

// let launchMissiles = function(){
//     missileSystem.launch("now");
// };
// let safeMode = false;
// if (safeMode) {
//     launchMissiles = function() { // reassigning the function to a new value
//         // do nothing
//     };
// }


// DECLARATION NOTATION

//  console.log("The future says:", future()); // it works even though the future() is defined below this line
//  function future() { // function declaration, not the part of regular top-to-bottom flow of control
//     return "You'll never have flying cars";
//  } // does not require semicolon


// ARROW FUNCTIONS
// read as this input(the parameters) produces this result (the body).

// const square1  =  (x) => { return x * x; }; //when it consist of single parameter, paranthesis around the parameter can be omitted, rewritten as below
// const square2 = x => x * x; 
// const horn = () => { console.log("Toot"); }; // for functions with either no parameters or multiple parameters, paranthesis are required
// console.log(square1(4));
// console.log(square2(4));
// horn();


// THE CALL STACK

// function greet(who) {
//     console.log("Hello " + who); // returns control to the caller
// }
// greet("Harry"); // passes controls to the greet function
// console.log("Bye");

// function chicken() {
//     return egg();
// }
// function egg() {
//     return chicken();
// }
// console.log(chicken() + "came first."); // RangeError: Maximum call stack size exceeded


// OPTIONAL ARGUMENTS

// function square(x){ return x*x;}
// console.log(square(4, true, "hedgehod")); // this code is allowed and executes without any problem, it just ignores the extra arguments

// function minus(a, b) {
//     if (b === undefined) return -a; // b is undefined when minus(10) is called, so it returns -a
//     else return a - b;
// }
// console.log(minus(10)); // the missing parameters are assigned the value undefined
// console.log(minus(10, 5));

// function roundTo(n, step = 1) { // step is optional, default value is 1;
//     let remainder = n % step;
//     return n - remainder + (remainder < step / 2 ? 0 : step);
// };
// console.log(roundTo(4.5));
// console.log(roundTo(4.5, 2));


// CLOUSRE : function that remembers the valriables from its outer function even after the outer function has finished execution
// ability to treat functions as values

// function wrapValue(n) {
//     let local = n;
//     return () => local;
// }
// let wrap1 = wrapValue(1); // wrap1 hold the returned function  i.e. () => local like a value, the variable (local) still remembers the value 1 assigned by it's outer function(original scope)
// let wrap2 = wrapValue(2); // same as above
// console.log(wrap1());

// function multiplier(factor) {
//     return number => number * factor;
// }
// let twice = multiplier(2); // the variable factor is replace by the number 2 and twice store the function with the value 2 in factor even though the muliplier function has finished execution
// console.log(twice(5))


// RECURSION
// about 3 times slower than using for loop in case of javascript.
// often used for it's elegance and readability.

// function power(base, exponent) { // close to way mathmatician define exponentiation and more clear explaination than looping;
//     if (exponent == 0) {
//         return 1;
//     } else {
//         return base * power(base, exponent -1);
//     }
// }
// console.log(power(2, 3));

// function findSolution(target) {
//     function find(current, history) {
//         if (current == target) {
//             return history;
//         } else if (current > target) {
//             return null;
//         } else {
//             return find(current + 5, `(${history} + 5)`)??
//             find(current*3,`(${history}*3)` )
//         }
//     }
//     return find(1, "1");
// }
// console.log(findSolution(24));


// GROWING FUNCTION
// introducing function is a program in 2 ways
// - repeated functionality
// - The second way is that you find you need some functionality that you haven’t written yet and that sounds like it deserves its own function.


// FUNCTION & IT'S SIDE EFFECT
// roughly divide into those that are called for 
// - their side effect
// - their return value

// EXERCISES

// MINIMUM
// const min = (a, b) => {return a < b ? a : b}
// console.log(min(0, 10));
// console.log(min(0, -10));

// RECURSION
// function isEven(n) {
//     if ( n == 0) return "even";
//     else if (n == 1) return "odd"
//     else return isEven(n - 2);
// }
// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-1)); // this code will run infinitely, because the function is not designed to handle negative numbers 

// BEAM COUNTING
// function countBs(string) {
//     let count = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === "B") {
//             count++;
//         }
//     }
//     return count;
// }
// function countChar(string, letter) {
//     let count = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countBs("BOB"));
// console.log(countChar("kakkerlak", "k"));