const fetchCalls = {
  getActivity() {
    return fetch('http://www.boredapi.com/api/activity/')
      .then(activity => activity.json())
  },

  createAccount(user) {
    return fetch('https://bored-crusher.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
  },

  logIn(credentials) {
    return fetch(`https://bored-crusher.herokuapp.com/log-in/${credentials.email}/${credentials.password}`)
      .then(response => response.json())
  },
}

export default fetchCalls
