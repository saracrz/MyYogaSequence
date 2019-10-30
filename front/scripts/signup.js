
//BUTTON SIGNUP
document.getElementById('btn-signup').addEventListener('click', (event) => {
  const newUser = {
    user_name:     document.getElementById("user_name").value,
    user_email:    document.getElementById("user_email").value,
    user_password: document.getElementById("user_password").value
  };

  api
    .post("auth/signup", newUser)
    .then(function (response) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name",  response.data.name);
      localStorage.setItem("email", response.data.email);
      console.log('yu79hubniu');
      
    })
    .catch(function (error) {
      console.log(error.response);
    });
})




//BUTTON TO LOG IN
document.getElementById('btn-to-login').addEventListener('click', (event) => {
  console.log('go to Log In!')

location.href = './login.html'


})


//BUTTON TO FUNCTIONS
// document.getElementById('btn-api').addEventListener('click', (event) => {
//   console.log('este token ', localStorage.getItem("token"));

//   api
//     .get("sequence"    , { headers: { access_token: localStorage.getItem("token") }})
//     .then(function (response) {
//       console.log(response.data)
//     })
//     .catch(function (error) {
//       console.log(error.response);
//     });
// })