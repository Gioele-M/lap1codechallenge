window.addEventListener('DOMContentLoaded', () => {
    
    const searchBar = document.querySelector('#searchbar')
    const searchBtn = document.querySelector('#search-btn')

    const showAllBtn = document.querySelector('#btn-showall')
    const randomBtn = document.querySelector('#btn-random')


    searchBtn.addEventListener('click', ()=>{
        let searchedValue = searchBar.value
        localStorage.setItem('pokemon', searchedValue)
        window.open('./pokemon.html')
    })

    showAllBtn.addEventListener('click', ()=>{
        window.open('./results_page.html')
    })

    randomBtn.addEventListener('click', ()=>{
        localStorage.setItem('pokemon', 'random')
        window.open('./pokemon.html')
    })



})
