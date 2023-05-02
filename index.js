const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 5000;

const chefs = require('./data/italianChefs.json')

app.use(cors())

app.get('/', (req, res) =>{
     res.send(`food-idea is running ${port}`)
})

app.get('/chefs', (req, res)=>{
     res.send(chefs)
})

app.listen(port, ()=>{
     console.log('food app running')
})