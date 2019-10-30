function API() {
  if (!localStorage.getItem('token') && window.location.pathname !== '/login.html') { 
    window.location.assign('login.html')
  }

  this.api_base = axios.create({
    baseURL: "http://localhost:2222/api/",
    timeout: 1000
  });

  this.login = function (userLogin) {
    this.api_base
      .post("auth/login", userLogin)
      .then(response => {
        if (response.data.error) {
          alert('YOS TODO JAKER INTENTANDO ENTRAR')
        } else {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("name", response.data.username);
          localStorage.setItem("email", response.data.email);
          window.location.assign('index.html')
        }
      })
      .catch(function (error) {
        console.log(error.response);
      });
  };

  this.signup = function (newUser) {
    this.api_base
      .post("auth/signup", newUser)
      .then(function (response) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.username);
        localStorage.setItem("email", response.data.email);
        window.location.assign('index.html')
      })
      .catch(function (error) {
        alert('Email already in use. Please Login instead');
      });
  }
}
const api = new API();

