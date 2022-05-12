window.addEventListener('DOMContentLoaded', () => {
    
    const searchBar = document.querySelector('#searchbar')
    const searchBtn = document.querySelector('#search-btn')

    const showAllBtn = document.querySelector('#btn-showall')
    const randomBtn = document.querySelector('#btn-random')


    searchBtn.addEventListener('click', ()=>{
        let searchedValue = searchBar.value
        if(localStorage.getItem('pokemon')){
            localStorage.clear()
        }
        localStorage.setItem('pokemon', searchedValue)
        window.open('./pokemon.html')
    })

    searchBar.addEventListener('keydown', (e)=>{
        if(e.key === 'Enter'){
            e.preventDefault()
        }
    })

    showAllBtn.addEventListener('click', ()=>{
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
