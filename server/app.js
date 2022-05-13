const express = require('express')
const app = express()
const cors = require('cors')
const pokemon = require('./data')
const { type } = require('express/lib/response')

function getRandomPoke(){
    return pokemon[Math.round(Math.random() * pokemon.length)]
}

function getPokemon(addressName){
    return pokemon.find(element => element.address === addressName)
}


//-----

function findPokemonByType(typeName){
    let toReturn = []
    pokemon.forEach(element => {
        let types = element.type.toLowerCase().split(' ')
        types.forEach(type=>{
            if(type === typeName.toLowerCase()){
                toReturn.push(element)
            }
        })
    })
    return toReturn
}


//------



//Interact with external sources
app.use(cors())
//Interacting w forms 
app.use(express.json())

app.get('/', (req,res)=>{
    res.status(200).send('Hello from Layla and Gio')
})

app.get('/pokemon', (req,res)=>{
    console.log('Requested all pokemon')
    res.status(200).send(pokemon)
})

app.get('/pokemon/:address', (req, res)=>{
    try{
        const addressName = req.params.address

        if(!getPokemon(addressName)){
            console.log('Requested ' + addressName)
            throw new Error('This pokemon does not exist')
        }else{
            console.log('Requested ' + addressName)
            res.status(200).send(getPokemon(addressName))// Function to retrieve object based on address name
        }
    }catch(err){
        res.status(404).send({message: err.message})
    }
})


//-----

//get pokemon by type
app.get('/pokemon/type/:address', (req, res)=>{
    try{
        const pokeType = req.params.address
        console.log('Requested type ' + pokeType)
        if(findPokemonByType(pokeType) == false){
            throw new Error('We have no Pokemon with this type')
        }else{
            res.status(200).send(findPokemonByType(pokeType))
        }
    }catch(err){
        res.status(404).send({message: err.message})
    }
})

//----


app.get('/random', (req, res)=>{
    console.log('requested random page')
    res.status(200).send(getRandomPoke())
})

module.exports = app
