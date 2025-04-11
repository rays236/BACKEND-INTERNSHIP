// fetch using promises

// fetch('https://dummyjson.com/products/1', {
//     method : 'DELETE', // DELETE PRODUCT 1
//     // headers: { // required for put and post request
//     //     'Content-type': 'application/json'
//     // },
//     // body: JSON.stringify({ // required for put and post request
//     //     title : 'Iphone 19',
//     //     description : 'Changed to Iphone 10',
//     //     price : '1000',
//     //     rating: '9/10'
//     // })
// })  // default is get request
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))


// fetchAPI using async await

const getAllProducts = async() => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const json = await response.json();
        console.log(json);
    } catch(error) {
        console.log(error);
    }
}

getAllProducts()