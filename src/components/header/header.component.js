import React, { } from 'react'
import { Link } from 'react-router-dom'
import { withGithubPageRoute } from '../../lib/url-helper'

import { ReactComponent as Logo } from '../../assets/icons/Group.svg'
import './header.scss'

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to={withGithubPageRoute('/')}>
      <Logo className='logo'/>
    </Link>
    <div className='options'>
      <Link className='option' to={withGithubPageRoute('/shop')}>
        SHOP
      </Link>
      <Link className='option' to={withGithubPageRoute('/shop')}>
        CONTACT
      </Link>
      <Link className='option' to={withGithubPageRoute('/signin')}>
        SIGN IN
      </Link>
    </div>
  </div>
)

export default Header
