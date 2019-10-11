// requirments 

const express = require('express');
const fs = require('fs');
const app = express();
const bodyPar = require('body-parser');
app.use(express.static('public'))
app.use(bodyPar.urlencoded({extended: true}));
app.use(bodyPar.json());


// port and listining 

let port = process.env.PORT||3000;
app.listen(port, ()=>{
    console.log('listening on port', port)
});