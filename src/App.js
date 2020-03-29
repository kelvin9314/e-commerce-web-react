import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { withGithubPageRoute } from './lib/url-helper'

import './App.css'

import Header from './components/header'
import HomePage from './pages/homepage'
import ShopPage from './pages/shop'
import SignInAndSignUp from './pages/sign-in-and-sign-up'

console.log(process.env.REACT_APP_API_TOKEN)

function App () {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={withGithubPageRoute('/')} component={HomePage} />
        <Route path={withGithubPageRoute('/shop')} component={ShopPage} />
        <Route path={withGithubPageRoute('/signin')} component={SignInAndSignUp} />
      </Switch>
    </div>
  )
}

export default App
