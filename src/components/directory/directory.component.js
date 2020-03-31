import React, { useState } from 'react'
import './directory.scss'

import MenuItem from '../menu-item/menu- item.component'
import directoryFaker from '../../fakers/directory-faker'

const Directory = () => {
  const [sections, setSections] = useState(directoryFaker)

  return (
    <div className="directory-menu">
      {
        sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))
      }
    </div>
  )
}

export default Directory
