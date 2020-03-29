import React, { useState } from 'react';
import './directory.scss'

import MenuItem from '../menu-item/'
import fakeData from './fakeData.js'

const Directory = () => {

  const [sections, setSections] = useState(fakeData)

  return (
    <div className="directory-menu">
      {
        sections.map( ({id, ...otherSectionProps} ) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))
      }
    </div>
  )
}


export default Directory