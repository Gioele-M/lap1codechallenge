window.addEventListener('DOMContentLoaded', () => {

    const allPokemonTypes = ["normal", "fire", "water", "grass", "electric", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dark", "dragon", "steel", "fairy"]
    
    const searchBar = document.querySelector('#searchbar')
    const searchBtn = document.querySelector('#search-btn')

    const showAllBtn = document.querySelector('#btn-showall')
    const randomBtn = document.querySelector('#btn-random')


    searchBar.addEventListener('keydown', (e)=>{
        if(e.key === 'Enter'){
            e.preventDefault()
            searchBtn.click()
        }
    })

    searchBtn.addEventListener('click', (e)=>{
        e.preventDefault()
        if(searchBar.value){
            let searchedValue = searchBar.value.toLowerCase()
            if(localStorage.getItem('pokemon')){
                localStorage.clear()
            }
            
            if(allPokemonTypes.includes(searchedValue)){
                localStorage.setItem('pokemon', searchedValue)
                window.open('./results_page.html')
            }else{
                localStorage.setItem('pokemon', searchedValue)
                window.open('./pokemon.html')
            }
        }else{

        }
    })


    showAllBtn.addEventListener('click', ()=>{
        if(localStorage.getItem('pokemon')){
            localStorage.clear()
        }
        localStorage.setItem('pokemon', 'all')
        window.open('./results_page.html')
    })

    randomBtn.addEventListener('click', ()=>{
        if(localStorage.getItem('pokemon')){
            localStorage.clear()
        }
        localStorage.setItem('pokemon', 'random')
        window.open('./pokemon.html')
    })
    


})
