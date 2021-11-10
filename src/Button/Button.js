import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const Button = ({path, className, text, onClick, argument }) => {
  const classNames = `${className} btn`
  return (
    <Link to={path}>
      <button
        className={classNames}
        onClick={ onClick }
      >
          {text}
      </button>
    </Link>
  )
}

export default Button
