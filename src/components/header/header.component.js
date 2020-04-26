import React from 'react'
import { Link } from 'react-router-dom'
import { withGithubPageRoute } from '../../lib/helpers'
import { useSelector, useDispatch } from 'react-redux'
import {} from '../../redux/user/userReducer'

import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/icons/Group.svg'
import './header.scss'

const Header = (props) => {
  const { currentUser } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  return (
    <div className="header">
      <Link className="logo-container" to={withGithubPageRoute('/')}>
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to={withGithubPageRoute('/shop')}>
          SHOP
        </Link>
        <Link className="option" to={withGithubPageRoute('/shop')}>
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to={withGithubPageRoute('/signin')}>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
