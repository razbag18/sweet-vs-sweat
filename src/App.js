import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import FoodSearch from './FoodSearch'
import Results from './Results'
import Report from './Report'
import './App.css'



import './App.css';

class App extends Component {

  constructor(props){
    super()
    this.state = {
      foodListArray: []
    }
  }

  setFoodList = (foodListArray) => {
    this.setState({
      foodListArray: foodListArray
    })
  }

  render() {
    const { foodListArray } = this.state
    return (
      <div className="App">
        <nav>
          <Link to="/">Search</Link>
        </nav>
        <div className='title'>
          <img className="donut" src={"/images/donut.png"} />
          <h1>SWEET VS SWEAT</h1>
          <img className="running" src={"/images/running.png"} />
        </div>
        <main>
          <Switch>
            <Route exact path="/" render={props => <FoodSearch {...props} setFoodList={this.setFoodList} />}/>
            <Route exact path="/results" render={() => <Results foodListArray={foodListArray} />}/>
            <Route 
              path="/report/:label" 
              render={(props)=> <Report {...props} foodListArray={foodListArray}/>} />
          </Switch>
        </main>
       
        <footer>Please note results are only a guide, as the energy you actually burn may vary depending on other factors such as age, gender, and how you move.</footer>
      </div>
    );
  }
}

export default App;

