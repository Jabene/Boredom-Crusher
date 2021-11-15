import React from 'react'
import Button from '../Button/Button'
import './HomePage.css'

const HomePage = () => {
  return (
    <section className='home-page'>
      <section className='activity-buttons'>
        <h1>Bored? </h1>
        <Button
          path='/newActivity'
          text='Click Here!'
          className='bored-btn'
        />
      </section>
    </section>
  )
}

export default HomePage
