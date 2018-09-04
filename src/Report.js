import React from 'react'
import { Redirect } from 'react-router-dom'
import Golf from './Golf';
import Skipping from './Skipping'
import Swimming from './Swimming'
import Jogging from './Jogging'
import Yoga from './Yoga'
import Basketball from './Basketball'


export default function Report({match, foodListArray}){
  // if(foodListArray.length === 0){
  //   <Redirect to="/"/>
  // } else{
  const result = foodListArray.find(result => result.food.label === match.params.label)
  return <div>
    
    <h3>{result.food.label}</h3>
    <p>{(result.food.nutrients.ENERC_KCAL).toFixed(2)} kCal per 100g*</p>
    <div><Skipping calories= {result.food.nutrients.ENERC_KCAL} /></div>
    <div>OR</div>
    <div><Swimming calories= {result.food.nutrients.ENERC_KCAL} /></div>
    <div>OR</div>
    <div><Jogging calories = {result.food.nutrients.ENERC_KCAL}/></div>
    <div>OR</div>
    <div><Basketball calories = {result.food.nutrients.ENERC_KCAL}/></div>
    <div>OR</div>
    <div><Golf calories = {result.food.nutrients.ENERC_KCAL}/></div>
    <div>OR</div>
    <div><Yoga calories = {result.food.nutrients.ENERC_KCAL}/></div>

    </div>
  // }
}
