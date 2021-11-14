import React from 'react'
import SavedCard from '../SavedCard/SavedCard'
import './SavedActivities.css'

export default class SavedActivities extends React.Component {
  state = {
    activities: [],
  }

  componentDidMount() {
    this.createActivityCards()
  }

  deleteActivity = async (id) => {
    await this.props.deleteActivity( id )
    this.createActivityCards()
  }

  createActivityCards() {
    const cards = this.props.activities.map(activity => {
      return(
        <SavedCard
          activity={activity}
          deleteActivity={ this.deleteActivity }
          key={activity.id}
        />
      )
    })
    this.setState({activities: cards})
  }

  render() {
    return (
      <section className='saved-activities-page'>
        {this.state.activities}
      </section>
    )
  }
}
