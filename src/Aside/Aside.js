import React from 'react'
import Nav from '../Nav/Nav'
import './Aside.css'

const Aside = ({ user }) => {
  return (
    <aside>
      <Nav user={ user }/>
    </aside>
  )
}

export default Aside
