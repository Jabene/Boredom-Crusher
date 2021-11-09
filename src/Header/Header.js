import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <h1 className='site-title'>Boredom Crusher</h1>
      </Link>
      <div className='login-section'>
        <Button path='/' text='Sign Up' className='login-btns' />
        <Button path='/' text='Log In' className='login-btns' />
      </div>
    </header>
  )
}

export default Header
