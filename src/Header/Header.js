import React from 'react'
import Nav from '../Nav/Nav'
import Button from '../Button/Button'
import './Header.css'

const Header = () => {
  return (
    <header>
      <h1>Boredom Crusher</h1>
      <Nav />
      <div className='login-section'>
        <Button path='/' text='Sign Up' className='login-btns' />
        <Button path='/' text='Log In' className='login-btns' />
      </div>
    </header>
  )
}

export default Header
