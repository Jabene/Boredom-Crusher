import React from 'react'
import './SavedCard.css'

const deleteCard = (activityId, deleteActivity ) => {
  deleteActivity(activityId)
}

const SavedCard = ({ activity, deleteActivity }) => {

  return (
    <article className='saved-card'>
      <h3>{activity.activity}</h3>
      <p>Type: {activity.type}</p>
      <button onClick={ () => deleteCard( activity.id, deleteActivity )}>
        Delete
      </button>
    </article>
  )
}

export default SavedCard
