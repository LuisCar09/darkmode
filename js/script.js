
const navbarLogo = document.querySelector('.navbar-logo')
const darkMode = document.querySelector('.darkMode')
const title = document.querySelector('.title')
const article = document.querySelector('.article')
const imgDarkMode = document.querySelector('.navbar-dark--imgMove')
const imgDarkModeContainer = document.querySelector('.navbar-dark--img-background')
const body = document.querySelector('.body')
console.log(body);

imgDarkModeContainer.addEventListener('click', () => {
    

    if (!imgDarkModeContainer.classList.contains('moveRight')) {
        
        body.classList.add('background')
        darkMode.classList.add('white')
        navbarLogo.classList.add('yellow')
        title.classList.add('yellow')
        article.classList.add('white')
        imgDarkMode.src = '../assets/img/luna.png'
        imgDarkModeContainer.classList.add('moveRight')
    }else{
        
        body.classList.remove('background')
        darkMode.classList.remove('white')
        navbarLogo.classList.remove('yellow')
        title.classList.remove('yellow')
        article.classList.remove('white')
        imgDarkMode.src = '../assets/img/sol.png'
        imgDarkModeContainer.classList.remove('moveRight')
    }
})