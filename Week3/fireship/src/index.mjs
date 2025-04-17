import express from 'express';

const app = express();

app.use(express.json()) // middle ware for post request with body json

const PORT = process.env.PORT || 3000;
const mockUsers = [
    {id:1, username: 'anson', displayName: "Anson"},
    {id:2, username: 'rays', displayName: "Roshan"},
    {id:3, username: 'pratima', displayName: "Pratima"},
    {id:4, username: 'csan', displayName: "Shishan"},
    {id:5, username: 'asmi', displayName: "Asmita"},
    {id:6, username: 'mamta', displayName: "Mamata"}
]

app.listen(
    PORT, () => {
        console.log(`Running on Port ${PORT}`)
    }
);

app.get('/', (req, res) => {
    res.status(201).send({msg: "Hello"});
});

app.get('/api/users', (req, res) => {
    console.log(req.query) // .query param
    const { 
        query: { filter, value},
    } = req;

    if(!filter && !value) return res.send(mockUsers); // when filter and value are undefined

    if(filter && value) return res.send(
        mockUsers.filter((user) => user[filter].includes(value)) //.filter creates a shallow copy of given array that passes the test, .includes checks if a specifice element or substring is present in an array or a string
    )

});

app.get('/api/users/:id', (req, res) => { // ROUTE PARAMETERS /:id
    console.log(req.params);
    const parsedId = parseInt(req.params.id); // parse the id
    console.log(parsedId);
    if (isNaN(parsedId)) return res.status(400).send({msg: 'Bad Request, Invalid ID.'}); // check if the id is valid
    const findUser = mockUsers.find(user => user.id === parsedId); // .find returns the first element that passes the test
    if (!findUser) return res.sendStatus(404) //user not found
    return res.send(findUser) // returns user
});

app.get('/api/products', (req, res) => {
    res.send([{id:123, name: 'chicken breast', price: 12.99}])
});

//Query params ?key=value&key2=value
// - send data from one page to next
// - client to server side to add additional data

// POST REQUEST

app.post('/api/users', (req, res) => { // can reuse same path for different method
    const { body } = req;
    const newUser = {id: mockUsers[mockUsers.length-1].id + 1, ...body }
    mockUsers.push(newUser);
    return res.status(201).send(newUser);
});

// PUT REQUEST
app.put('/api/users/:id', (req, res) => { // updates every part of the elements, deletes if the part of elements is not present in req body
    const { 
        body,
        params: { id },
     } = req;
     const parsedId = parseInt(id);
     if(isNaN(parsedId)) return res.sendStatus(400); // invalid user id

     const findUserIndex = mockUsers.findIndex(
        (user) => user.id === parsedId
     )
     if(findUserIndex === -1) return res.sendStatus(404); // no such user
    mockUsers[findUserIndex] = { id: parsedId, ...body }; //updation
    return res.sendStatus(204);
});

// PATCH REQUEST
app.patch('/api/users/:id', (req, res) => { // .patch updates only part of the element
    const { 
        body,
        params: { id },
     } = req;
     const parsedId = parseInt(id);
     if(isNaN(parsedId)) return res.sendStatus(400); // invalid user id

     const findUserIndex = mockUsers.findIndex(
        (user) => user.id === parsedId
     )
     if(findUserIndex === -1) return res.sendStatus(404);
     mockUsers[findUserIndex] = { ...mockUsers[findUserIndex], ...body} //
});

