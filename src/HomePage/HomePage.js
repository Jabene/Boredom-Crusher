import React from 'react'
import Button from '../Button/Button'
import './HomePage.css'

const HomePage = () => {
  return (
    <section className='home-page'>
      <h1>Bored?</h1>
      <Button path='/newActivity' text='Click Here' className='bored-btn' />
    </section>
  )
}

export default HomePage
