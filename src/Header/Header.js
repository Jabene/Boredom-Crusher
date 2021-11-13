import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({ user }) => {
  return (
    <header>
      <Link to='/'>
        <h1 className='site-title'>Boredom Crusher</h1>
      </Link>
      <div className='login-section'>
        { user.id ?
          <h2 className='welcome-message'>{`Welcome ${user.firstName}`}</h2> :
        <><Button path='/signUp' text='Sign Up' className='login-btns' />
        <Button path='/logIn' text='Log In' className='login-btns' /></>
        }
      </div>
    </header>
  )
}

export default Header
