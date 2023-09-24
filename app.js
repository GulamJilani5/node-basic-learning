///////////////////////////////////////////////////////////////////////
/////////////////////// EXPRESS - nodejs framework.
////////////


const express = require('express');

const app = express();

const port = 3000;

// ROUTING
app.get('/', (req, res)=>{
    // res.status(200).send('Hello form the server side')
    res.status(200).json(           // It will automatically set content-type as application/json and charset as utf-8
        {message : 'hello form the server side',
        app: 'learning basics of expressjs'
    })
})

app.post('/', (req, res)=>{
    res.send('You can post to this URL or endpoint')
})

// Listening to incoming request
app.listen(port, ()=>{
    console.log(`App running on port ${port}`)
})