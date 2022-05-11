const express = require('express')
const app = express()
const cors = require('cors')
const pokemon = require('./data')

//Interact with external sources
app.use(cors())
//Interacting w forms 
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Hello from layla and gio')
})


const bulbasaur = pokemon[0]

app.get('/bulbasaur', (req,res)=>{
    res.send(bulbasaur)
})




module.exports = app
