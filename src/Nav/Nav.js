import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = ({ user }) => {
  return (
    <nav className='nav'>
      <Button path='/' text='HOME' className='nav-btn' />
      {user.id ?
        <>
          <Button
            path='/savedActivities'
            text='SAVED'
            className='nav-btn'
          />
          <Link to='/' >
            <button
              className='nav-btn btn'
              onClick={() => {
                  localStorage.clear()
                  window.location.reload()
                }
              }
            >
            LOG OUT
            </button>
          </Link>
        </> :
        ""
      }
    </nav>
  )
}

export default Nav
