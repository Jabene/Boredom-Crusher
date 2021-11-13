const fetchCalls = {
  getActivity() {
    return fetch('https://www.boredapi.com/api/activity/')
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
      .then(response => {
        if(response.ok) {
          return response.json()
        } else {
          throw new Error('Something went Wrong!')
        }
      })
      .catch(error => console.log(error))
  },

  saveActivity( userId, activity ){
    return fetch(`https://bored-crusher.herokuapp.com/activity/${ userId }`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(activity)
    })
      .then(response => {
        if(response.ok) {
          console.log(response.json())
        } else {
          throw new Error('Something went Wrong!')
        }
      })
      .catch(error => console.log(error))
  },

  getActivities( userId ) {
    return fetch(`https://bored-crusher.herokuapp.com/activities/${ userId }`)
      .then(response => {
        if(response.ok) {
          return response.json()
        } else {
          throw new Error('Something went Wrong!')
        }
      })
      .catch(error => console.log(error))
  },
}

export default fetchCalls
