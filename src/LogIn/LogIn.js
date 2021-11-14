import React from 'react'
import './LogIn.css'
import fetchCalls from '../fetchCalls'

class LogIn extends React.Component {
  state = {
    email: '',
    password: '',
    error: ''
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submit = async ( e ) => {
    e.preventDefault()
    const user = await fetchCalls.logIn({
      email: this.state.email,
      password: this.state.password
    })
    if ( !user.length ) {
      this.setState({error: `We couldn't find a user with those credentials`})
    } else {
      this.props.setUser( user )
    }
  }

  render() {
    return (
      <section className='log-in-page'>
        <form
          className='log-in-form'
          onSubmit={this.submit}
        >
          <h2 className='log-in-heading'>Log In</h2>
          <label>
            Email:
            <input
              type='text'
              name='email'
              className='log-in-input'
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type='text'
              name='password'
              className='log-in-input'
              onChange={this.handleChange}
            />
          </label>
          <button className='log-in-submit'>
            Submit
          </button>
          {this.state.error ? this.state.error : ''}
        </form>
      </section>
    )
  }
 }

export default LogIn
