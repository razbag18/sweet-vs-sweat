import React from 'react'
import { Redirect } from 'react-router-dom'
import Golf from './Golf';


export default function Report({match, foodListArray}){
  // if(foodListArray.length === 0){
  //   <Redirect to="/"/>
  // } else{
  const result = foodListArray.find(result => result.food.label === match.params.label)
  return <div>
    
    <h3>{result.food.label}</h3>
    <p>{(result.food.nutrients.ENERC_KCAL).toFixed(2)} kCal</p>
    <div><Golf calories = {result.food.nutrients.ENERC_KCAL}/></div>

    </div>
  // }
}
