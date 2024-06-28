const express = require('express')
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
db();
const Person = require('./models/person')
app.get('/',(req,res)=>{
    res.send("Welcome Home")
});
app.post('/person',async(req,res)=>{
   try {
     const data = req.body;
     const newPerson = new Person(data);
     const response = await newPerson.save();
     console.log(response);
     res.status(200).send(response);
   } catch (error) {
    console.log(error);
    res.status(500).send({error:'Internal Server Error'})
   }
})
app.listen(3000,()=>{
    console.log('Listening on Port 3000');
})