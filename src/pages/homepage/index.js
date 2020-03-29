import React from 'react'
import './homepage.scss'
import Directory from '../../components/directory'

const HomePage = props => {
  console.log(props)
  return (
    <div className="homepage">
      <Directory />
    </div>
  )
}

export default HomePage
