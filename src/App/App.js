import React from 'react'
import Header from '../Header/Header'
import Aside from '../Aside/Aside'
import HomePage from '../HomePage/HomePage'
import NewActivity from '../NewActivity/NewActivity'
import SavedActivities from '../SavedActivities/SavedActivities'
import SignUp from '../SignUp/SignUp'
import LogIn from '../LogIn/LogIn'
import { Route, Routes, Navigate } from 'react-router-dom'
import fetchCalls from '../fetchCalls'
import './App.css';


class App extends React.Component {
  state = {
    activities: [],
    user: {}
  }

  saveActivity = async activity => {
    const { user } = this.state
    await fetchCalls.saveActivity( user.id, activity )
    this.setActivities()
  }

  setActivities = async () => {
    const { user } = this.state
    const activities = await fetchCalls.getActivities( +user.id )
    this.setState({activities: [...activities]})
  }

  setUser = user => {
    const { first_name, last_name, id } = user[0]
    this.setState({user: {
      firstName: first_name,
      lastName: last_name,
      id: id
    }});
    this.setActivities()
    this.saveUserToLocalStorage()
  }

  saveUserToLocalStorage = () => {
    const user = JSON.stringify(this.state.user)
    localStorage.setItem('user', user)
  }

  componentDidMount = async () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if ( user ) {
      await this.setState({user: user})
      this.setActivities()
    }
  }

  render() {
    const { activities, user } = this.state
    return (
      <div className="App">
        <Header user={ user }/>
        <main className='main-section'>
          <Aside user={user}/>
          <Routes>
            <Route
              path='/'
              element={ <HomePage /> }
          />
            <Route
              path='/newActivity'
              element={ <NewActivity save={ this.saveActivity } user={ this.state.user } /> }
            />
            <Route
              path='/savedActivities'
              element={ user.id ?
                <SavedActivities activities={ activities } /> :
                <Navigate to='/logIn' /> }
            />
            <Route
              path='/signUp'
              element={ user.id ?
                <Navigate to='/' /> :
                <SignUp setUser={ this.setUser }/> }
            />
            <Route
              path='/logIn'
              element={ user.id ?
                <Navigate to='/' /> :
                <LogIn
                  setUser={ this.setUser } /> }
            />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
