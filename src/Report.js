import React from 'react'
import { Redirect } from 'react-router-dom'
import Golf from './Golf';
import Skipping from './Skipping'
import Swimming from './Swimming'
import Jogging from './Jogging'
import Yoga from './Yoga'
import Basketball from './Basketball'
import Cycling from './Cycling'
import Pingpong from './Pingpong'
import Weights from './Weights'
import './Report.css'

//redirect if foodListArray.length === 0

export default function Report({match, foodListArray}){
  if(foodListArray.length === 0){
    return <Redirect to={{pathname: '/'}} />
  } else {
  const result = foodListArray.find(result => result.fields.item_name === match.params.label)
  return <div className="report" >
      <h3>{result.fields.item_name}</h3>
      <p className="calories">{result.fields.nf_calories} kCal</p>
      <div className="exercise">
        <div><Skipping calories= {result.fields.nf_calories} /></div>
        
        <div><Swimming calories= {result.fields.nf_calories} /></div>
        
        <div><Jogging calories = {result.fields.nf_calories}/></div>
        
        <div><Cycling calories = {result.fields.nf_calories}/></div>
        
        <div><Basketball calories = {result.fields.nf_calories}/></div>
        
        <div><Weights calories = {result.fields.nf_calories}/></div>
        
        <div><Golf calories = {result.fields.nf_calories}/></div>
        
        <div><Pingpong calories = {result.fields.nf_calories}/></div> 
        
        <div><Yoga calories = {result.fields.nf_calories}/></div>
      </div>
      <footer>Please note results are only a guide, as the energy you actually burn may vary depending on other factors such as age, gender, and how you move.</footer>
      

    </div>
  }
}
