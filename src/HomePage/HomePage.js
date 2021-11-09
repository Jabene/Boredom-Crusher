import React from 'react'
import Button from '../Button/Button'
import './HomePage.css'

const HomePage = () => {
  return (
    <main className='home-page'>
      <h1>Bored?</h1>
      <Button path='/newActivity' text='Click Here' className='bored-btn' />
    </main>
  )
}

export default HomePage
