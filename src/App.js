import React from 'react';
import { Switch, Route, Link } from "react-router-dom";

import './App.css';

import HomePage from './pages/homepage';
import ShopPage from './pages/shop';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App; 
