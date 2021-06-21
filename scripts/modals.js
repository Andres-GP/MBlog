
//Login
//Modal open 
var registerLoginButton = document.querySelector('.headerBlog__buttonContainer__button');
var loginModalContainer = document.querySelector('.loginModalContainer');
registerLoginButton.addEventListener('click', function(){
    loginModalContainer.classList.add('loginModalContainer-active');
});
//Modal close
var loginModalClose = document.querySelector('.loginModalContainer__modalClose');
loginModalClose.addEventListener('click', function(){
    loginModalContainer.classList.remove('loginModalContainer-active');
})


//Register
//Modal open 
var crateAnAccountButton = document.querySelector('.loginModalContainer__loginModal__container__createAnAccountButton');
var registerModalContainer = document.querySelector('.registerModalContainer');
crateAnAccountButton.addEventListener('click', function(){
    registerModalContainer.classList.add('registerModalContainer-active');
});
//Login & register modal close
var registerModalClose = document.querySelector('.registerModalContainer__modalClose');
registerModalClose.addEventListener('click', function(){
    registerModalContainer.classList.remove('registerModalContainer-active');
    loginModalContainer.classList.remove('loginModalContainer-active');
})


//Logged in (Functionality of this modal can be found in authenticatino.js)
var loggedInModal = document.querySelector('.loggedInModal')

//Post Generator
//Modal Open
var postGeneratorButton = document.querySelector('.loggedInModal__buttonContainer__generatorButton');
var postGenerator = document.querySelector('.blogMain__postBackground__postGenerator');
postGeneratorButton.addEventListener('click', function(){
    postGenerator.classList.add('blogMain__postBackground__postGenerator-active');
});
//Modal close
var postGeneratorCloseButton = document.querySelector('.blogMain__postBackground__postGenerator__closeButton');
postGeneratorCloseButton.addEventListener('click', function(){
    postGenerator.classList.remove('blogMain__postBackground__postGenerator-active');
})

