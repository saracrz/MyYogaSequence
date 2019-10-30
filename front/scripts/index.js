document.getElementById('btn-login').addEventListener('click', (event) => {
  api.login({
    user_email:    document.getElementById("login_email").value,
    user_password: document.getElementById("login_password").value
  })
})
