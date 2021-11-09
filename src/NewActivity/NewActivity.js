import React from 'react'
import fetchCalls from '../fetchCalls'
import './NewActivity.css'

export default class NewActivity extends React.Component {
  state = {
    activity: {},
    loading: true,
  }

  async componentDidMount() {
    const activity = await fetchCalls.getActivity()
    this.setState({activity: activity, loading: false})
  }

  render() {
    const { activity, link, type, participants, price } = this.state.activity
    const { loading } = this.state

    return (
      <section className='new-activity-page'>
        { loading ?
          <h1 className='loading-message' >
            Finding the perfect activity...
          </h1> :
          <div className='new-activity-card'>
            <h2>New Activity</h2>
            <h3>{ activity }</h3>
            <p>{ type }</p>
          </div>
        }
      </section>
    )
  }
}
