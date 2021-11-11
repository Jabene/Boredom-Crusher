import React from 'react'
import fetchCalls from '../fetchCalls'
import './SignUp.css'

class SignUp extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submit = async (e) => {
    e.preventDefault()
    await fetchCalls.createAccount(this.state)
    const user = await fetchCalls.logIn({
      email: this.state.email,
      password: this.state.password
    })
    this.props.setUser( user )
  }

  render() {
    return (
      <section className='sign-up'>
        <form
          className='sign-up-form'
          onSubmit={this.submit}>
          <h2 className='sign-up-heading'>Sign Up!</h2>
          <label for='first-name'>
            First Name:
            <input
              type='text'
              name='firstName'
              className='sign-up-input'
              onChange={this.handleChange}
            />
          </label>
          <label for='last-name'>
            Last Name:
            <input
              type='text'
              name='lastName'
              className='sign-up-input'
              onChange={this.handleChange}
            />
          </label>
          <label for='email'>
            Email:
            <input
              type='text'
              name='email'
              className='sign-up-input'
              onChange={this.handleChange}
            />
          </label>
          <label for='password'>
            Password:
            <input
              type='text'
              name='password'
              className='sign-up-input'
              onChange={this.handleChange}
            />
          </label>
          <button
            className='sign-up-submit btn'>
            Submit
          </button>
        </form>
      </section>
    )
  }
}

export default SignUp
