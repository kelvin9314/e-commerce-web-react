import directoryFaker from '../../fakers/directory-faker'

const INITIAL_STATE = directoryFaker

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer
