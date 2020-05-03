import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { ReactComponent as ShoppingIcon } from '../../assets/icons/shopping-bag.svg'
import './cart-icon.scss'

const CartIcon = () => {
  const itemCount = useSelector((state) => state.cart.cartItems.reduce((acc, curr) => acc + curr.quantity, 0))
  const dispatch = useDispatch()

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount} </span>
    </div>
  )
}

export default CartIcon
