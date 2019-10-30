document.getElementById('btn-login').addEventListener('click', (event) => {
  api.login({
    user_email:    document.getElementById("login_email").value,
    user_password: document.getElementById("login_password").value
  })
})

document.getElementById('btn-signup').addEventListener('click', (event) => {
  api.signup({
    user_name:     document.getElementById("signup_user_name").value,
    user_email:    document.getElementById("signup_user_email").value,
    user_password: document.getElementById("signup_user_password").value
  });
})