import React, { useState } from 'react'

import FormInput from '../form-input'

import './sign-in.scss'

const SignIn = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    // do something here
    setEmail('')
    setPassword('')
  }

  const handleChange = event => {
    const { value, name } = event.target
    if (name === 'email') {
      setEmail(value)
    } else {
      setPassword(value)
    }
  }

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={ handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />

        <input type="submit" value="Submit Form" />
      </form>
    </div>
  )
}

export default SignIn
