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
        registerForm.reset();
        //Modal Close
        registerModalContainer.classList.remove('registerModalContainer-active');
        loginModalContainer.classList.remove('loginModalContainer-active');
        //Add logged in modal
        loggedInModal.classList.add('loggedInModal-active');
        console.log("Loged in")
      }) 

})

//Logout Event
const logout = document.querySelector('#logoutButton')

logout.addEventListener('click', e => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log("loged out")
    loggedInModal.classList.remove('loggedInModal-active');
  })
})
