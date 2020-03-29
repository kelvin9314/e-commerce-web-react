import React from 'react';
import { Switch, Route, Link } from "react-router-dom";

import './App.css';

import HomePage from './pages/homepage/';

// const HomePage = props => {
//   console.log(props);
//   return (
//     <div>
//       {/* <Link to='/hats'>Hats</Link> */}  
//       <button onClick={() => props.history.push('/hats')}>Hats</button>
//       <h1> Home page</h1>
//     </div>
//   )
// }

const HatsPage = props => {
  console.log(props);
  return (
    <div > 
      <h1> Hats page </h1>
      <Link to={`${props.match.url}/13`}>To hats 13</Link>
      <Link to={`${props.match.url}/17`}>To hats 17</Link>
      <Link to={`${props.match.url}/21`}>To hats 21</Link>
    </div>
  );
}

const HatsDetail = props => {
  console.log(props);
  return (
    <div>
      <h2>Hats detail page : {props.match.params.hatsId} </h2>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route path='/hats/:hatsId' component={HatsDetail} />
      </Switch>
    </div>
  );
}

export default App; 
