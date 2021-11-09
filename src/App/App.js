import React from 'react'
import Header from '../Header/Header'
import HomePage from '../HomePage/HomePage'
import NewActivity from '../NewActivity/NewActivity'
import SavedActivities from '../SavedActivities/SavedActivities'
import { Route, Routes } from 'react-router-dom'
import './App.css';


class App extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/' element={ <HomePage /> } />
          <Route path='/newActivity' element={ <NewActivity />} />
          <Route path='/savedActivities' element={ <SavedActivities />} />
        </Routes>
      </div>
    );
  }
}

export default App;
