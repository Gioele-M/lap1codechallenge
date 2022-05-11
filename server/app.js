const express = require('express')
const app = express()
const cors = require('cors')

//Interact with external sources
app.use(cors())
//Interacting w forms 
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Hello from layla and gio')
})


module.exports = app
