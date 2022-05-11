const express = require('express')
const app = express()
const cors = require('cors')
const pokemon = require('./data')

function getRandomPoke(){
    return pokemon[Math.round(Math.random() * pokemon.length)]
}

function getPokemon(addressName){
    return pokemon.find(element => element.address === addressName)
}


//Interact with external sources
app.use(cors())
//Interacting w forms 
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Hello from layla and gio')
})

app.get('/pokemon', (req,res)=>{
    res.send(pokemon)
})

app.get('/pokemon/:address', (req, res)=>{
    try{
        const addressName = req.params.address

        if(!getPokemon(addressName)){
            console.log(addressName)
            throw new Error('This pokemon does not exist')
        }else{
            console.log(addressName)
            res.send(getPokemon(addressName))// Function to retrieve object based on address name
        }
    }catch(err){
        res.status(404).send({message: err.message})
    }
})

app.get('/random', (req, res)=>{
    res.send(getRandomPoke())
})

module.exports = app
