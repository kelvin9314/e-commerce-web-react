import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import Header from './components/header'
import HomePage from './pages/homepage'
import ShopPage from './pages/shop'
import SignInAndSignUp from './pages/sign-in-and-sign-up'

function App () {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  )
}

export default App
