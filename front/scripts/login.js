document.getElementById('btn-login') &&
document.getElementById('btn-login').addEventListener('click', (event) => {
  api.login({
    user_email:    document.getElementById("login_email").value,
    user_password: document.getElementById("login_password").value
  })
})

document.getElementById('btn-to-signup') && 
document.getElementById('btn-to-signup').addEventListener('click', (event) => {
  location.href = './signup.html'
})


document.getElementById('btn-signup') && 
document.getElementById('btn-signup').addEventListener('click', (event) => {
  api.signup({
    user_name:     document.getElementById("signup_user_name").value,
    user_email:    document.getElementById("signup_user_email").value,
    user_password: document.getElementById("signup_user_password").value
  });
})



//BUTTON TO LOG IN
document.getElementById('btn-to-login') &&
document.getElementById('btn-to-login').addEventListener('click', (event) => {
  console.log('go to Log In!')

  location.href = './login.html'
})