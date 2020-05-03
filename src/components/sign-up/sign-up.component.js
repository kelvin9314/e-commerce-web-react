import React, { useState } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

const SignUp = (props) => {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert("passwords don't match")
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName })

      resetAllState()
    } catch (err) {
      console.error(err)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    switch (name) {
      case 'displayName':
        setDisplayName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break
      case 'confirmPassword':
        setConfirmPassword(value)
        break
      default:
        break
    }
  }

  const resetAllState = () => {
    setDisplayName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span> Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput type="email" name="email" value={email} onChange={handleChange} label="email" required />
        <FormInput type="password" name="password" value={password} onChange={handleChange} label="Password" required />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  )
}

export default SignUp
