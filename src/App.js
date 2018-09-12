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
        <div className='parallax'>
          <div className="images">
            <img className="donut" src={"http://i349.photobucket.com/albums/q374/razbag18/donut_zpshxuymmo0.png"} />
            <img className="running" src={"http://i349.photobucket.com/albums/q374/razbag18/running_zpsjmfnqqzm.png"} />
          </div>
          <Link to ='/' style={{ textDecoration: 'none', zIndex: '1' }}>
            <h1 className="sweet-vs-sweat">SWEET VS SWEAT</h1>
          </Link>
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
        
        <div className="parallax2"></div>

        <footer>Please note results are only a guide, as the energy you actually burn may vary depending on other factors such as age, gender, and how you move.</footer>

       
        </div>
    );
  }
}

export default App;

