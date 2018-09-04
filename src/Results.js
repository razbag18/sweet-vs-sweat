import React from 'react'
import { Link } from 'react-router-dom'


//find unique items again
export default function Results(props){
  return <div>
  {props.foodListArray
      .map(result => 
      <p key={result.fields.item_id}>
        <Link to={`/report/${result.fields.item_name}`}>{result.fields.item_name}</Link>
      </p>)}
    </div>
}


