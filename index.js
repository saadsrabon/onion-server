const express = require('express');
const cors = require ('cors');
const port =process.env.PORT || 5000; 

const app =express();
app.use(cors());
app.use(express.json())


app.get('/', (req,res)=>{
    res.send("Welcome from NEw server");
})

app.get('/name' ,(req,res)=>{
    res.send('user  are here')
})

app.listen(port ,console.log("We Are on"));
