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
        let api_url = 'http://localhost:3000/'
        if(pokemonName === 'random'){
            api_url += 'random'
        }else{
            api_url += 'pokemon/' + pokemonName
        }

        const response = await fetch(api_url)
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
        console.log('Something went wrong '+ err.message)
    }
}


let searchItem = localStorage.getItem('pokemon')
localStorage.clear()

console.log(searchItem)


getPokemon(searchItem)

