import React from 'react'
import Button from '../Button/Button'
import './Nav.css'

const Nav = ({ user }) => {
  return (
    <nav className='nav'>
      <Button path='/' text='HOME' className='nav-btn' />
      <Button path={`/savedActivities`} text='SAVED' className='nav-btn' />
    </nav>
  )
}

export default Nav
