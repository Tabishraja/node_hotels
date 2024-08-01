//creating server

const express = require('express');
const app = express();

const port = 4000;
const db = require('./db');

const person = require('./models/person');

const menuItem = require('./models/menuItem');

 const bodyParser = require('body-parser');

 app.use(bodyParser.json());// req.body




 app.get('/', function (req, res) {
     res.send('Hey man welcome to my hotel, how can i help you')
 })
 
 app.get('/chicken',(req,res)=>{
    res.send('sure sir, i would to serve chicken')
 })

 app.get('/idli' ,(req,res)=>{
  
    res.send('sure sir,idli is so testy of mu resturent')
   })






//import the router files
const personroutes = require('./routes/personroutes');

//use the routers
app.use('/person',personroutes);


const menuItemRoutes = require('./routes/menuItemRoutes');
app.use('/menuItem',menuItemRoutes);


app.listen(port ,()=>{
    console.log(`server is running in port ${port}`);
 });   






























