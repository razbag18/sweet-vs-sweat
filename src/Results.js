import React from 'react'
import { Link } from 'react-router-dom'

export default function Results(props){
  return <div>
    {props.foodListArray
      .filter(result =>(
          result.food.nutrients.ENERC_KCAL)
      ).map(result => 
      <p key={result.food.id}>
        <Link to={`/report/${result.food.label}`}>{result.food.label}</Link>
      </p>)}
    </div>
}


