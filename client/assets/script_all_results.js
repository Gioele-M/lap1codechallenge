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
        localStorage.setItem('pokemon', searchedValue)
        window.open('http://127.0.0.1:5501/client/pokemon.html')
    })

}

async function getAllPokemon(){
    try{
        const response = await fetch('http://localhost:3000/pokemon/')
        const data = await response.json()
        console.log(data)

        data.forEach(e => createSection(e))
        

    }catch(err){
        console.log('Something went wrong '+ err.message)
    }
}

getAllPokemon()



