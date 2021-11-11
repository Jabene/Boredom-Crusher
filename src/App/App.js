import React from 'react'
import Header from '../Header/Header'
import Aside from '../Aside/Aside'
import HomePage from '../HomePage/HomePage'
import NewActivity from '../NewActivity/NewActivity'
import SavedActivities from '../SavedActivities/SavedActivities'
import SignUp from '../SignUp/SignUp'
import LogIn from '../LogIn/LogIn'
import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css';


class App extends React.Component {
  state = {
    activities: [],
    user: {}
  }

  saveActivity = activity => {
    const activities = this.state.activities
    this.setState({activities: [...activities, activity]})
  }

  setUser = user => {
    const { first_name, last_name, id } = user[0]
    this.setState({user: {
      firstName: first_name,
      lastName: last_name,
      id: id
    }});
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
              element={ <NewActivity save={ this.saveActivity } /> }
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
                <LogIn setUser={ this.setUser } /> }
            />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
