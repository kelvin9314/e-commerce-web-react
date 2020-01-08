import React, { useState } from 'react';
import './directory.scss'

import MenuItem from '../menu-item/'
import fakeData from './fakeData.js'

const Directory = () => {

  const [sections, setSections] = useState(fakeData)

  return (
    <div className="directory-menu">
      {
        sections.map( ({title, imageUrl, id, size} ) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))
      }
    </div>
  )
}


export default Directory