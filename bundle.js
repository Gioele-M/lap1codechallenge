(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// //Target elements in pokemon.html
// const pokeName = document.querySelector('h1')
// const pokeName2 = document.querySelector('.pokeName')
// const pokeNum = document.querySelector('.pokeNum')

// const pokeImage = document.querySelector('img') //Change this!!

// const pokeType = document.querySelector('.typeInput')
// const pokeAbility = document.querySelector('.abilityInput')
// const pokeEvolution = document.querySelector('.evolutionInput')

// const previewInfo = document.querySelector('.previewInfo')
// const bioInfo = document.querySelector('.bioInfo')



// async function getPokemon(pokemonName){
//     try{
//         const response = await fetch(`http://localhost:3000/pokemon/${pokemonName}`)
//         const data = await response.json()

//         if(data.message === 'This pokemon does not exist'){
//             throw new Error('This pokemon does not exist')
//         }
        
//         pokeName.textContent = data.pokename
//         pokeName2.textContent = data.pokename
//         pokeNum.textContent = data.pokedexnumber

//         pokeImage.src = data.img_url
//         pokeImage.alt = data.pokename + ' image'
        
//         pokeType.textContent = data.type
//         pokeAbility.textContent = data.abilities
//         pokeEvolution.textContent = data.evolution
        
//         previewInfo.textContent = data.preview
//         bioInfo.textContent = data.biology

//     }catch(err){
//         console.log('The pokemon you searched for does not exist '+ err.message)
//         pokeName.textContent = 'Try searching another starter'
//     }
// }



const getPokemon = require('./script_pokemon')

const searchBar = document.querySelector('#searchbar')
const searchBtn = document.querySelector('#search-btn')

const showAllBtn = document.querySelector('#btn-showall')
const randomBtn = document.querySelector('#btn-random')



console.log(searchBtn)

searchBtn.addEventListener('click', (e)=>{
    let searchedValue = searchBar.value
    console.log(searchedValue)
    getPokemon(searchedValue)
})


},{"./script_pokemon":2}],2:[function(require,module,exports){
//Target elements in pokemon.html
const pokeName = document.querySelector('h1')
const pokeName2 = document.querySelector('.pokeName')
const pokeNum = document.querySelector('.pokeNum')

const pokeImage = document.querySelector('img') //Change this!!

const pokeType = document.querySelector('.typeInput')
const pokeAbility = document.querySelector('.abilityInput')
const pokeEvolution = document.querySelector('.evolutionInput')

const previewInfo = document.querySelector('.previewInfo')
const bioInfo = document.querySelector('.bioInfo')



async function getPokemon(pokemonName){
    try{
        const response = await fetch(`http://localhost:3000/pokemon/${pokemonName}`)
        const data = await response.json()
        console.log(data)

        if(data.message === 'This pokemon does not exist'){
            throw new Error('This pokemon does not exist')
        }
        
        pokeName.textContent = data.pokename
        pokeName2.textContent = data.pokename
        pokeNum.textContent = data.pokedexnumber

        pokeImage.src = data.img_url
        pokeImage.alt = data.pokename + ' image'
        
        pokeType.textContent = data.type
        pokeAbility.textContent = data.abilities
        pokeEvolution.textContent = data.evolution
        
        previewInfo.textContent = data.preview
        bioInfo.textContent = data.biology

    }catch(err){
        console.log('The pokemon you searched for does not exist '+ err.message)
        pokeName.textContent = 'Try searching another starter'
    }
}



module.exports = getPokemon

},{}]},{},[1]);
