import React from 'react'
import { Redirect, Link } from 'react-router-dom'
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
      
      <p className="calories">{result.fields.item_name} has {result.fields.nf_calories} kCal. If you want to eat that you can burn it off with one of the following exercises...</p>
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
      <div className="report-btn-div">
        <button className="report-btn"> 
          <Link to ='/' style={{ textDecoration: 'none', color: 'white'}}>
            <h1 className="search-again-btn">SEARCH AGAIN</h1>
          </Link>
        </button>
      </div>
      
      

    </div>
  }
}
