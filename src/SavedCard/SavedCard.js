import React from 'react'
import './SavedCard.css'

const SavedCard = ({ activity }) => {
  return (
    <article className='saved-card'>
      <h3>{activity.activity}</h3>
      <p>Type: {activity.type}</p>
    </article>
  )
}

export default SavedCard
