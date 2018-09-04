import React, { Component } from 'react'
import axios from 'axios'
import Swimming from './Swimming'
export default class FoodSearch extends React.Component {

  state = {
    content: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    const url = `https://api.edamam.com/api/food-database/parser?`
    const params = { 
      ingr: this.state.content, 
      app_id: '54528c89',
      app_key: '1a7b19a7854184244ac9ff0f34438d0c' 
    }
    axios.get(url, {params})
      .then(res => {

        this.props.setFoodList(res.data.hints)
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
          <button>Search</button>*
        </form>
      </div>
    )

  }



}

