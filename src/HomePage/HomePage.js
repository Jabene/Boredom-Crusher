import React from 'react'
import Button from '../Button/Button'
import './HomePage.css'

const HomePage = () => {
  return (
    <section className='home-page'>
      <section className='activity-buttons'>
        <h1>Bored? Choose an activity!</h1>
        <Button
          path='/newActivity'
          text='Random'
          className='bored-btn'
        />
        <Button
          path='/newActivity/education'
          text='Education'
          className='bored-btn'
        />
        <Button
          path='/newActivity/social'
          text='Social'
          className='bored-btn'
        />
        <Button
          path='/newActivity/diy'
          text='DIY'
          className='bored-btn'
        />
        <Button
          path='/newActivity/charity'
          text='Charity'
          className='bored-btn'
        />
        <Button
          path='/newActivity/cooking'
          text='Cooking'
          className='bored-btn'
        />
        <Button
          path='/newActivity/relaxation'
          text='Relaxation'
          className='bored-btn'
        />
        <Button
          path='/newActivity/music'
          text='Music'
          className='bored-btn'
        />
        <Button
          path='/newActivity/busywork'
          text='Busywork'
          className='bored-btn'
        />
      </section>
    </section>
  )
}

export default HomePage
