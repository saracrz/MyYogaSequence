function API () {
  if (!window.window.localStorage.getItem('token') && window.location.pathname !== '/login.html') {
    window.location.assign('login.html')
  }

  this.api_base = axios.create({
    baseURL: 'http://localhost:2222/api/',
    timeout: 1000
  })

  this.login = function (userLogin) {
    this.api_base
      .post('auth/login', userLogin)
      .then(response => {
        if (response.data.error) {
          alert('YOS TODO JAKER INTENTANDO ENTRAR')
        } else {
          window.localStorage.setItem('token', response.data.token)
          window.localStorage.setItem('name', response.data.username)
          window.localStorage.setItem('email', response.data.email)
          window.location.assign('index.html')
        }
      })
      .catch(function (error) {
        console.log(error.response)
      })
  }

  this.signup = function (newUser) {
    this.api_base
      .post('auth/signup', newUser)
      .then(response => {
        window.localStorage.setItem('token', response.data.token)
        window.localStorage.setItem('name', response.data.username)
        window.localStorage.setItem('email', response.data.email)
        window.location.assign('index.html')
      })
      .catch(function (error) {
        alert('Email already in use. Please Login instead')
      })
  }

  this.asanas = function () {
    return this.api_base
      .get('asanas', {
        headers: {
          access_token: window.localStorage.getItem('token')
        }
      })
      .then(response => {
        return response.data
      })
  }

  this.sequences = function () {
    return this.api_base
      .get('sequences', {
        headers: {
          access_token: window.localStorage.getItem('token')
        }
      })
      .then(response => {
        return response.data
      })
  }

  this.getSeq = function (ID) {
    return this.api_base
      .get(`sequences/${ID}`, {
        headers: {
          access_token: window.localStorage.getItem('token')
        }
      })
      .then(response => {
        return response.data
      })
  }

  this.createNewSequence = function (newSequence) {
    return this.api_base
      .post('sequences', newSequence, {
        headers: {
          access_token: window.localStorage.getItem('token')
        }
      })
  }

  this.updateSequence = function (removeAsana) {
    return this.api_base
      .put('sequences', removeAsana, {
        headers: {
          access_token: window.localStorage.getItem('token')
        }
      })
      .then(response => {
        return response.data
      })
  }
  this.removeAsanaInSequence = function (asanaID, sequenceID) {
    return this.api_base
      .delete(`sequences/${sequenceID}/asanas/${asanaID}` ,
       {
        headers: {
          access_token: window.localStorage.getItem('token')
        }
      })
      .then(response => {
        return response.data
      })
  }
}

const api = new API()
