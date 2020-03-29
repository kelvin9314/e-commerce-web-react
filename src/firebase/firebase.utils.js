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
  appId: '1:1083037953998:web:89aa0555616b014dda459f'
}

firebase.initializeApp(CONFIG)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
