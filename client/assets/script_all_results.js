const mainContainer = document.querySelector('.flex-container')

function createSection(data){
    //make div, ul and img
    const div = document.createElement('div')
    div.className = 'resultInfo'
    
    const image = document.createElement('img')
    const linkToImage = data.img_url
    image.setAttribute('src', linkToImage)
    image.setAttribute('alt', data.pokename)
    
    const ul = document.createElement('ul')

    //Make ul elements and append them
    const firstLi = document.createElement('li')

    const link = document.createElement('a')
    link.className = 'pokeResultName'
    link.textContent = data.pokename
    link.setAttribute('href', '#')

    firstLi.appendChild(link)

    const secondLi = document.createElement('li')
    secondLi.className = 'pokeResultPreview'
    secondLi.textContent = data.preview

    //Append elements to ul
    ul.appendChild(firstLi)
    ul.appendChild(secondLi)

    //Append element to main div
    div.appendChild(ul)
    div.appendChild(image)

    mainContainer.appendChild(div)

    //Add event listener to anchor
    link.addEventListener('click', ()=>{
        let searchedValue = link.textContent.toLowerCase()
        if(localStorage.getItem('pokemon')){
            localStorage.clear()
        }
        localStorage.setItem('pokemon', searchedValue)
        window.open('./pokemon.html')
    })

}

async function getAllPokemon(){
    try{
        const response = await fetch('http://localhost:3000/pokemon/')
        const data = await response.json()
        data.forEach(e => createSection(e))
        
    }catch(err){
        console.log('Something went wrong '+ err.message)
    }
}

async function getByType(type){
    try{
        const response = await fetch(`http://localhost:3000/pokemon/type/${type}`)
        const data = await response.json()

        //If it does not return a message means data is there and can append to result page, otherwise make a card stating that this type does not exist
        if(data.message == undefined){
            data.forEach(e=> createSection(e))
        }else{
            createSection({preview : `No pokemon of type ${type} in the database`, img_url: '#', pokename: ''})
        }

    }catch(err){
        console.log('Something went wrong ' + err.message)
    }

}

let searchItem = localStorage.getItem('pokemon')

if(searchItem === 'all'){
    getAllPokemon()
}else{
    getByType(searchItem)
}


