import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import './checkout.scss'

const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cart)
  const total = useSelector((state) => state.cart.cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0))

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="checkout-block">
          <span>Product</span>
        </div>
        <div className="checkout-block">
          <span>Description</span>
        </div>
        <div className="checkout-block">
          <span>Quantity</span>
        </div>
        <div className="checkout-block">
          <span>Price</span>
        </div>
        <div className="checkout-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">Total: ${total}</div>
    </div>
  )
}
export default Checkout
