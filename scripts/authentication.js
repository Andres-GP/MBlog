//Register Event
const registerForm = document.querySelector('#registerForm');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //Email
    const registerEmail = document.querySelector('#registerEmail').value;
    const registerPassword = document.querySelector('#registerPassword').value;

    
    auth
      .createUserWithEmailAndPassword(registerEmail, registerPassword)
      .then(userCredential => {
        //Clear form
        registerForm.reset();
        //Modal Close
        registerModalContainer.classList.remove('registerModalContainer-active');
        
          console.log("registered")
      }) 
})

//Login Event
const loginForm = document.querySelector('#loginForm')

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const loginEmail = document.querySelector('#loginEmail').value;
  const loginPassword = document.querySelector('#loginPassword').value;

  auth
      .signInWithEmailAndPassword(loginEmail, loginPassword)
      .then(userCredential => {
        //Clear form
        loginForm.reset();
        //Modal Close
        registerModalContainer.classList.remove('registerModalContainer-active');
        loginModalContainer.classList.remove('loginModalContainer-active');
        //Add logged in modal
        loggedInModal.classList.add('loggedInModal-active');
        console.log("Logged in")
      }) 

})

//Logout Event
const logout = document.querySelector('#logoutButton')

logout.addEventListener('click', e => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log("logged out")
    loggedInModal.classList.remove('loggedInModal-active');
  })
})

//Google login
const googleLoginButton = document.querySelector('#googleLogin')
googleLoginButton.addEventListener('click', e => {
  e.preventDefault();
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
  .then(result => {
    console.log("google sign in succesful")
    //Clear form
    loginForm.reset();
    
    loginModalContainer.classList.remove('loginModalContainer-active')
    //Add logged in modal
    loggedInModal.classList.add('loggedInModal-active');
    console.log("Logged in")
  })
})

//Facebook Login
const facebookLoginButton = document.querySelector('#facebookLogin')
facebookLoginButton.addEventListener('click', e => {
  e.preventDefault();
  const provider = new firebase.auth.FacebookAuthProvider();
  auth.signInWithPopup(provider)
  .then(result => {
    console.log("result")
    console.log("facebook sign in succesful")
  })
  //Modal Close
  loginModalContainer.classList.remove('loginModalContainer-active')
  //Add logged in modal
  loggedInModal.classList.add('loggedInModal-active');
})
