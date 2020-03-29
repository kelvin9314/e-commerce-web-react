import React, { useState, useEffect, cleanUp } from 'react'
import { Switch, Route } from 'react-router-dom'
import { withGithubPageRoute } from './lib/url-helper'

import './App.css'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth } from './firebase/firebase.utils'

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [unsubscribeFromAuth, setUnsubscribeFromAuth] = useState(null)

  useEffect(() => {
    setUnsubscribeFromAuth(() => auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      console.log(user)
    }))
    return function cleanUp () {
      unsubscribeFromAuth()
    }
  }, [])

  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path={withGithubPageRoute('/')} component={HomePage} />
        <Route path={withGithubPageRoute('/shop')} component={ShopPage} />
        <Route path={withGithubPageRoute('/signin')} component={SignInAndSignUp} />
      </Switch>
    </div>
  )
}

export default App
