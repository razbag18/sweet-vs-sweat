import React, { Component } from 'react'
import axios from 'axios'
export default class FoodSearch extends React.Component {

  state = {
    content: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    const url = `https://api.nutritionix.com/v1_1/search/${this.state.content}?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Citem_id%2Cnf_calories&appId=6abe098b&appKey=e3ae0e08ed6ba9086b5b6f283d7f53d7`
    // const params = { 
    //   results: `0%3A20`,
    //   cal_min: `0`,
    //   cal_max: `50000`,
    //   fields: `item_name%2Citem_id%2Cnf_calories`,
    //   appId: `6abe098b`,
    //   appKey: `e3ae0e08ed6ba9086b5b6f283d7f53d7`
    // }

    axios.get(url)
      .then(res => {

        this.props.setFoodList(res.data.hits)
        this.props.history.push('/results')

      })
  }

  
    
    //return an object with food.label and calories

    //{res.data.hints[0].food.label eg('tim tam'), res.data.hints[0].food.nutrients.ENERC_KCAL(433)}

  // renderResult = (food, index) => (
  //   <div key={index}>
  //     <a href={`/calorie_count?food=${food.name}`} onClick={this.selectedItem}>{food.name}</a>
  //     <p>{food.calories}kcal</p>
  //   </div>
  // )

  // //problems: some have calories, some dont. need an if statement, if results have food.nutrients.ENERC_KCAL then display, else no
  // filteredFood = () => Array.from(
  //   new Set(
  //     this.state.foodListArray
  //     .filter(result =>(
  //       result.food.nutrients.ENERC_KCAL)
  //     ).map(result => (
  //       { name: result.food.label.toLowerCase(), calories: Math.round(result.food.nutrients.ENERC_KCAL) }
  //     ))
  //   )
  // )

  render() {
    return (
      <div className="food-search">
        <h3>Just one more doughnut? Find out how much those calories are adding up!</h3>
        <p>Enter a guilty treat to see how much exercise you'll need in order to burn it off. You might start to question if you really can afford those empty calories...</p>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Type food here... " onChange={e=> {this.setState({ content: e.target.value })} }/>
          <button>Search</button>
        </form>
      </div>
    )

  }



}

