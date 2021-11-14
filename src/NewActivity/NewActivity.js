import React from 'react'
import { useParams } from 'react-router-dom'
import fetchCalls from '../fetchCalls'
import './NewActivity.css'


export default class NewActivity extends React.Component {
  state = {
    wholeActivity: {},
    loading: true,
    saved: false
  }

  async componentDidMount() {
    const activity = await fetchCalls.getActivity()
    this.setState({wholeActivity: activity, loading: false})
  }

  render() {
    const { activity, link, type, participants, price } = this.state.wholeActivity
    const { loading, wholeActivity } = this.state
    const { save, user } = this.props

    return (
      <section className='new-activity-page'>
        { loading ?
          <h1 className='loading-message' >
            Finding the perfect activity...
          </h1> :
          <div className='new-activity-card'>
            <div className='new-activity-card-heading'>
              <div className='heading-and-btn'>
                <h2>{ type.charAt(0).toUpperCase() + type.slice(1)}</h2>
                {this.state.saved ?
                  <p className='saved-message'>This Activity has been saved</p>:
                  ( user.id ?
                    <button
                      onClick={ () => {
                        save(wholeActivity)
                        this.setState({saved: true})
                      }}
                      className='save-btn btn'>
                      Save
                    </button> :
                    ""
                  )
                }
              </div>
            </div>
            <div className='new-activity-card-body'>
              <h3>{ activity }</h3>
              { link ?
                <p className='learn-more'>Learn more <a href={link}>HERE</a></p> :
                ""
              }
            </div>
          </div>
        }
      </section>
    )
  }
}
