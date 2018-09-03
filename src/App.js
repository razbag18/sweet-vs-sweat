import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import Home from './Home'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        {/* <nav>
        <Link to="/">Home</Link>
       </nav> */}
        <main>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
          </Switch>
        </main>
      
      </div>
    );
  }
}

export default App;
