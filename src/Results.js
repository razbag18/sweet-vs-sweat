import React from 'react'
import { Link } from 'react-router-dom'
import './Results.css'


//find unique items again
export default function Results(props){
  return <div className="results-div">
  <h1>Did you mean...</h1>
  {props.foodListArray
      .map(result => 
        <ul>
          <li key={result.fields.item_id}>
              <Link to={`/report/${result.fields.item_name}`}>{result.fields.item_name}</Link>
          </li>
        </ul>)}
    </div>
}


