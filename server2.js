import bodyParser from 'body-parser';
import express from 'express'
import { Person } from './models/person2.js';
import { db2 } from './db2.js';

const app = express();
app.use(express.json());
app.use(bodyParser.json());
db2();
app.post('/test',async(req,res)=>{
    try {
        const data = req.body;
        const response = await Person(data).save();
        console.log('Finally its done');
        res.status(200).send(response);
        console.log(error);
        res.status(500).send({ error: "Internal Server Error" });
    } catch (error) {
        
    }

})

app.listen(3000,()=>{
    console.log('App is Listening at port 3000');
})