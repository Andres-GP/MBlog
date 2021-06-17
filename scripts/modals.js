
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
