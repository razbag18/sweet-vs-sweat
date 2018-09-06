import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import './Results.css'


//find unique items again
export default function Results(props){
  if(props.foodListArray.length === 0){
    return <Redirect to={{pathname: '/'}} />
  } else {
    return <div className="results-div">
      <h1 className="result-h1">Did you mean...</h1>
      {Array.from(new Set(props.foodListArray
        .map(result => result.fields.item_name))).map((item, index) => (
          <ul>
            <li key={index}>
              <Link to={`/report/${item}`}>{item}</Link>
            </li>
          </ul>
        ))
      }
    </div>
  }
}


