import React from 'react'
import { useSelector } from 'react-redux'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styled'

import { ReactComponent as Logo } from '../../assets/icons/Group.svg'

const Header = (props) => {
  const { currentUser } = useSelector((state) => state.user)
  const { hidden } = useSelector((state) => state.cart)

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to={'/shop'}>SHOP</OptionLink>
        <OptionLink to={'/shop'}>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to={'/signin'}>SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  )
}

export default Header
