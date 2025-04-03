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
// let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));

// CASE II : function that can change other functions

