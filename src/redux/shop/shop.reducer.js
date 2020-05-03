import collectionsFaker from '../../fakers/collections-faker'

const INITIAL_STATE = {
  collections: collectionsFaker,
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default shopReducer
