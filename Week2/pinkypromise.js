// const promise = new Promise((resolve, reject) => { // 3 states of promises: pending, resolve and reject
//     const randomNumber = Math.floor(Math.random() * 10);

//     setTimeout(() => {
//         if(randomNumber < 4) {
//             resolve('Well Done! You Guessed Right! ')
//         } else {
//             reject('Oops! You Guessed Wrong! Unlucky.')
//         }
//     }, 2000) // pending state until 2000ms
// });
// promise.then((value) => { // capture resolve
//     console.log(value) // value contains the inside of resolve
// }).catch((error) => { // capture reject
//     console.log(error) // error contains the inside of reject
// });


// Multiple promises linked together

// const promise = new Promise((resolve, reject) => {
//     resolve('Well Done! Promise one is resolved')
// })

// const promiseTwo = new Promise((resolve, reject) => {
//     resolve('Well Done! Promise two is resolved')
// })

// const promiseThree = new Promise((resolve, reject) => {
//     reject('Sorry! Promise three is rejected')
// })

// promise
// .then((value) => {
//     console.log(value)
//     return promiseTwo
// })
// .then((value) => {
//     console.log(value)
//     return promiseThree
// })
// .catch((error) => {
//     console.log(error)
// })


// Promise .all() : if one of the promises is rejected all promises are rejected
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise one resolved. ')
    }, 2000)
})

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise two rejected. ")
    }, 1500)
})

Promise.all([promise, promiseTwo])
.then((data) => console.log(data[0], data[1]))
.catch((error) => console.log(error))

