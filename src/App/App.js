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
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main className='main-section'>
          <Aside />
          <Routes>
            <Route exact path='/' element={ <HomePage /> } />
            <Route path='/newActivity' element={ <NewActivity />} />
            <Route path='/savedActivities' element={ <SavedActivities />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
