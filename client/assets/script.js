window.addEventListener('DOMContentLoaded', () => {
    
    const searchBar = document.querySelector('#searchbar')
    const searchBtn = document.querySelector('#search-btn')

    const showAllBtn = document.querySelector('#btn-showall')
    const randomBtn = document.querySelector('#btn-random')


    console.log(searchBtn)

    searchBtn.addEventListener('click', ()=>{
        let searchedValue = searchBar.value
        console.log('searched value' +  searchedValue)
        localStorage.setItem('pokemon', searchedValue)
        window.open('http://127.0.0.1:5501/client/pokemon.html')
    })

    showAllBtn.addEventListener('click', ()=>{
        window.open('http://127.0.0.1:5501/client/results_page.html')
    })

    randomBtn.addEventListener('click', ()=>{
        localStorage.setItem('pokemon', 'random')
        window.open('http://127.0.0.1:5501/client/pokemon.html')
    })



})
