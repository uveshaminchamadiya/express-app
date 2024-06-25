const express = require('express')
// app created
const app = express();

// routes setting 
app.get('/', (req,res) => {
    return res.status(200).send('<h1>Hello World! Welcome to ExpressJS App');
})

// listening server at port 8000 
app.listen(8000, (req,res) => {
    console.log("App is live on port 8000");
})
