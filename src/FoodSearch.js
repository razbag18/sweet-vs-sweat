import React, { Component } from 'react'
import axios from 'axios'
import './FoodSearch.css'
export default class FoodSearch extends React.Component {

  state = {
    content: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    const url = `https://api.nutritionix.com/v1_1/search/${this.state.content}?results=0%3A20&cal_min=0&cal_max=50000&fields=item_name%2Citem_id%2Cnf_calories`
      const params = { 
        appId: `6abe098b`,
        appKey: `e3ae0e08ed6ba9086b5b6f283d7f53d7`
      }

      axios.get(url, {params} )
        .then(res => {

          this.props.setFoodList(res.data.hits)
          this.props.history.push('/results')

        })
  }

  render() {
    return (
      <div className="food-search">
        <h1>Just one more doughnut? Find out how much those calories are adding up!</h1>
        <p>Enter a guilty treat to see how much exercise you'll need in order to burn it off. You might start to question if you really can afford those empty calories...</p>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input placeholder="Type food here... " onChange={e=> {this.setState({ content: e.target.value })} }/>
          <button className="btn">SEARCH</button>
        </form>
        {/* <img className="mouth" src={"/images/mouth.png"} /> */}
        <img className="candy" src={"/images/candy.png"} />
      </div>
    )

  }



}

