window.addEventListener('DOMContentLoaded', () => {
    
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

    searchBtn.addEventListener('click', ()=>{
        let searchedValue = searchBar.value.toLowerCase()
        if(localStorage.getItem('pokemon')){
            localStorage.clear()
        }
        localStorage.setItem('pokemon', searchedValue)
        window.open('./pokemon.html')
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
