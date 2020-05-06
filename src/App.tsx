import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Components/Home/Home';
import Yearly from './Components/Yearly/Yearly';

function App() {
  return (
    <div className='App'>
      <Router>

        <header>
          <Link to="/">Home</Link>
          <Link to="/yearly">Yearly</Link>
        </header>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/yearly">
            <Yearly />
          </Route>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
