import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100 // convert to cent
  const publishableKey = process.env.REACT_APP_PUBLISHABLE_KEY

  const onToken = (token) => {
    console.log(token)
    alert('Payment successful')
  }

  return (
    <StripeCheckout
      label="Pay Now"
      locale="en"
      name="Kelvin Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}
export default StripeCheckoutButton
