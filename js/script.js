const mainContaner = document.querySelector('.main-cointainer')
const navbarLogo = document.querySelector('.navbar-logo')
const darkMode = document.querySelector('.darkMode')
const title = document.querySelector('.title')
const article = document.querySelector('.article')
const imgDarkMode = document.querySelector('.navbar-dark--imgMove')
const imgDarkModeContainer = document.querySelector('.navbar-dark--img-background')


imgDarkModeContainer.addEventListener('click', () => {
    

    if (!imgDarkModeContainer.classList.contains('moveRight')) {
        mainContaner.style.background ='black'
        navbarLogo.classList.add('yellow')
        title.classList.add('yellow')
        article.classList.add('white')
        darkMode.classList.add('white')
        
        imgDarkModeContainer.classList.add('moveRight')
        imgDarkMode.src = '../assets/img/luna.png'
    }else{
        mainContaner.style.background ='white'
        darkMode.classList.remove('white')
        navbarLogo.classList.remove('yellow')
        title.classList.remove('yellow')
        article.classList.remove('white')
        
        imgDarkMode.src = '../assets/img/sol.png'
        imgDarkModeContainer.classList.remove('moveRight')
    }
})