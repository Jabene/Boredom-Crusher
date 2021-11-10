import React from 'react'
import Header from '../Header/Header'
import Aside from '../Aside/Aside'
import HomePage from '../HomePage/HomePage'
import NewActivity from '../NewActivity/NewActivity'
import SavedActivities from '../SavedActivities/SavedActivities'
import { Route, Routes } from 'react-router-dom'
import './App.css';


class App extends React.Component {
  state = {
    activities: [],
  }

  saveActivity = (activity) => {
    const activities = this.state.activities
    this.setState({activities: [...activities, activity]})
  }

  render() {
    const { activities } = this.state
    return (
      <div className="App">
        <Header />
        <main className='main-section'>
          <Aside />
          <Routes>
            <Route exact path='/' element={ <HomePage /> } />
            <Route path='/newActivity' element={ <NewActivity save={ this.saveActivity }/>} />
            <Route path='/savedActivities' element={ <SavedActivities activities={ activities }/>} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
