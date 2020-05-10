// import collectionsFaker from '../../fakers/collections-faker'
import ShopActionTypes from './shop.types'

const INITIAL_STATE = {
  collections: {},
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLEECTIONS:
      return {
        ...state,
        collections: action.payload,
      }
    default:
      return state
  }
}

export default shopReducer
