import React from 'react'
import SavedCard from '../SavedCard/SavedCard'
import './SavedActivities.css'

export default class SavedActivities extends React.Component {
  state = {
    activities: [],
  }

  componentDidMount() {
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

  deleteActivity = async (id) => {
    await this.props.deleteActivity( id )
    const newCards = this.state.activities.filter(activity => +activity.key !== +id)
    this.setState({activities: newCards})
  }

  render() {
    return (
      <section className='saved-activities-page'>
        {this.state.activities}
      </section>
    )
  }
}
