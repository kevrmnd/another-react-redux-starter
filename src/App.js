import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeScreen from './containers/HomeScreen'
import TestScreen from './containers/TestScreen'

import './App.css'

class App extends Component {
  
  render() {

    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/test" component={TestScreen} />
        </div>
      </Router>
    );
  }
}

export default App
