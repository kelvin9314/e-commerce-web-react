/**
 *
 * @param {Array} cartItems
 * @param {Object} cartItemToAdd
 * @returns {Array}
 */
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const isExist = cartItems.find((item) => item.id === cartItemToAdd.id)

  if (isExist) {
    return cartItems.map((item) => (item.id === cartItemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item))
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}
