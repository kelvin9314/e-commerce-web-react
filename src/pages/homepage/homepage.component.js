import React from 'react'
import './homepage.scss'
import Directory from '../../components/directory/directory.component'

const HomePage = props => {
  console.log(props)
  console.log(process.env.REACT_APP_API_TOKEN)
  return (
    <div className="homepage">
      <Directory />
    </div>
  )
}

export default HomePage
