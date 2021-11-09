import React from 'react'
import Button from '../Button/Button'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
      <Button path='/' text='HOME' className='nav-btn-home' />
      <Button path='/savedActivities' text='SAVED' className='nav-btn-saved' />
    </nav>
  )
}

export default Nav
