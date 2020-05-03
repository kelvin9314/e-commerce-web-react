import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const CONFIG = {
  apiKey: 'AIzaSyD2mhw-oE01M89j-U2hH3JrkGPmh8L2arY',
  authDomain: 'newagent-1-mnpitm.firebaseapp.com',
  databaseURL: 'https://newagent-1-mnpitm.firebaseio.com',
  projectId: 'newagent-1-mnpitm',
  storageBucket: 'newagent-1-mnpitm.appspot.com',
  messagingSenderId: '1083037953998',
  appId: '1:1083037953998:web:89aa0555616b014dda459f',
}

firebase.initializeApp(CONFIG)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (err) {
      console.log('error creating user', err.message)
    }
  }

  return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
