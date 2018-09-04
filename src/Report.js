import React from 'react'
import { Redirect } from 'react-router-dom'
import Golf from './Golf';
import Skipping from './Skipping'
import Swimming from './Swimming'
import Jogging from './Jogging'
import Yoga from './Yoga'
import Basketball from './Basketball'


export default function Report({match, foodListArray}){
  console.log(foodListArray)
  // if(foodListArray.length === 0){
  //   <Redirect to="/"/>
  // } else{
  const result = foodListArray.find(result => result.fields.item_name === match.params.label)
  return <div>
      <h3>{result.fields.item_name}</h3>
      <p>{result.fields.nf_calories} kCal</p>
      <div><Skipping calories= {result.fields.nf_calories} /></div>
      <div>OR</div>
      <div><Swimming calories= {result.fields.nf_calories} /></div>
      <div>OR</div>
      <div><Jogging calories = {result.fields.nf_calories}/></div>
      <div>OR</div>
      <div><Basketball calories = {result.fields.nf_calories}/></div>
      <div>OR</div>
      <div><Golf calories = {result.fields.nf_calories}/></div>
      <div>OR</div>
      <div><Yoga calories = {result.fields.nf_calories}/></div> 

    </div>
  // }
}
