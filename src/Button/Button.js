import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const Button = ({path, className, text, onClick}) => {
  return (
    <Link to={path}>
      <button
        className={className}
        onClick={onClick}
      >
          {text}
      </button>
    </Link>
  )
}

export default Button