/**
 * Project: create an express api
 * users, products, order
 */
const express = require("express");
const bodyParser = require("body-parser");

// importing routes
const api = require('./routes/api');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// middleware
app.use((req,res,next)=>{
    const time = new Date();
    console.log(`${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`);
    if(Object.keys(req.body).length>0){
        console.log('Data:');
        console.log(`${JSON.stringify(req.body)}`);
    }
    next();
})

app.use('/api/',api)

app.get('/', (req,res)=>{
    res.send('i am alive!');
})
app.listen(port, () => console.log("server port: " + port));
