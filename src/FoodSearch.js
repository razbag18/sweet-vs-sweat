import React, { Component } from 'react'
import axios from 'axios'
export default class FoodSearch extends React.Component {

  state = {
    content: '',
    foodListArray: []
  }
  
  handleChange = e => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const endpoint = `https://api.edamam.com/api/food-database/parser?`
    const params = { 
      ingr: this.state.content, 
      app_id: '54528c89',
      app_key: '1a7b19a7854184244ac9ff0f34438d0c' 
    }
    
    //return an object with food.label and calories

    //{res.data.hints[0].food.label eg('tim tam'), res.data.hints[0].food.nutrients.ENERC_KCAL(433)}

    axios.get(endpoint, {params})
      .then(res => {
        this.setState({
          foodListArray: res.data.hints
        })
      })
  }

  selectedItem = (e) => {
    e.preventDefault();
  }

  renderResult = (food, index) => (
    <div key={index}>
      <a href={`/calorie_count?food=${food.name}`} onClick={this.selectedItem}>{food.name}</a>
      <p>{food.calories} kcal</p>
    </div>
  )

  //problems: some have calories, some dont. need an if statement, if results have food.nutrients.ENERC_KCAL then display, else no
  filteredFood = () => Array.from(
    new Set(
      this.state.foodListArray
      .filter(result =>(
        result.food.nutrients.ENERC_KCAL)
      ).map(result => (
        { name: result.food.label.toLowerCase(), calories: Math.round(result.food.nutrients.ENERC_KCAL) }
      ))
    )
  )

  render() {
    return (
      <div className="FoodSearch">
        <form onSubmit={this.handleSubmit} action="">
          <input placeholder="Type food here... " onChange={this.handleChange} type="text"/>
          <button>Search</button>
        </form>
        <div>
          {this.filteredFood().map(this.renderResult)}
        </div>
      </div>
    )

  }



}

