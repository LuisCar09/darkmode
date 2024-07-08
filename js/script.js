const mainContaner = document.querySelector('.main-cointainer')
const navbarLogo = document.querySelector('.navbar-logo')
const parragraph = document.querySelectorAll('.parragraph')
const title = document.querySelector('.title')
const imgDarkMode = document.querySelector('.navbar-dark--imgMove')
const imgDarkModeContainer = document.querySelector('.navbar-dark--img-background')


imgDarkModeContainer.addEventListener('click', () => {
    

    // !imgDarkModeContainer.classList.contains('moveRight') ? imgDarkModeContainer.classList.add('moveRight') : imgDarkModeContainer.classList.remove('moveRight')

    if (!imgDarkModeContainer.classList.contains('moveRight')) {
        mainContaner.style.background ='black'
        navbarLogo.style.color = "yellow"
        title.style.color = "yellow"
        
        parragraph.forEach((parra,index) => {
            
            parra.style.color = 'white'
        })
        imgDarkModeContainer.classList.add('moveRight')
        imgDarkMode.src = '../assets/img/luna.png'
    }else{
        mainContaner.style.background ='white'
        navbarLogo.style.color = "black"
        title.style.color = "black"
        
        parragraph.forEach((parra,index) => {
            
            parra.style.color = 'black'
        })
        imgDarkMode.src = '../assets/img/sol.png'
        imgDarkModeContainer.classList.remove('moveRight')
    }
})