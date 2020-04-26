import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { withGithubPageRoute, getEnv } from './lib/helpers'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'

import './App.css'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

const App = () => {
  const { currentUser } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [unsubscribeFromAuth, setUnsubscribeFromAuth] = useState(null)

  useEffect(() => {
    setUnsubscribeFromAuth(() =>
      auth.onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth)

          userRef.onSnapshot((snapShot) => {
            dispatch(
              setCurrentUser({
                id: snapShot.id,
                ...snapShot.data(),
              })
            )
          })
        }
        dispatch(setCurrentUser(userAuth))
      })
    )
    return function cleanUp() {
      unsubscribeFromAuth()
      dispatch(setCurrentUser(null))
    }
  }, [])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/e-commerce-web-react">
          {getEnv('NODE_ENV') !== 'production' ? <Redirect to="/" /> : <HomePage />}
        </Route>
        <Route exact path={withGithubPageRoute('/')} component={HomePage} />
        <Route exact path={withGithubPageRoute('/shop')} component={ShopPage} />
        <Route
          exact
          path={withGithubPageRoute('/signin')}
          render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUp />)}
        />
      </Switch>
    </div>
  )
}

export default App
