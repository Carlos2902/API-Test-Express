const express = require('express'); //to use express framework
const path = require('path') //import path framework, look for files in our directories
const app = express()//create the express application for us

// Middleware that allows us to parse json data  in express
app.use(express.json());

const HTTP_PORT = process.env.HTTP_PORT || 8080;

// Routes
app.get('/', (req,res)=>
res.sendFile(path.join(__dirname, "/views/home.html")))
// Get Request
app.get('/api/users',(req,res)=>{
    res.send({message: 'fetch all users'})
})

// Get request with Colon : => on Route means to access to the request parameters
app.get('/api/users/:userId', (req, res)=>{
    res.send({userId: `${req.params.userId}`})
})

// Post request
// The bloc of data is the body from makeAJAXRequest
app.post('/api/users', (req,res)=>{
    res.send({message: `add the user: ${req.body.fName} ${req.body.lName}`})
})


// Put method
app.put('/api/users/:userId', (req, res)=>{
    res.send({message: `update user with Id: ${req.params.userId} to ${req.body.fName} ${req.body.lName}`})
})


// Delete method
app.delete('/api/users/:userId', (req,res)=>{
    res.send({message: `Delete user with Id: ${req.params.userId}`})
})






app.listen(HTTP_PORT, ()=>{console.log(`server listening on: ${HTTP_PORT}`)})
