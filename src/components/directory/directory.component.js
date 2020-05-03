import React from 'react'
import './directory.scss'

import { useSelector } from 'react-redux'
import MenuItem from '../menu-item/menu- item.component'

const Directory = () => {
  const sections = useSelector((state) => state.directory)
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  )
}

export default Directory
