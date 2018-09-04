import React from 'react'

function minsOfGolf(props){
  return (props.calories / 5).toFixed(0)
}

export default function Golf(props){
  return <section>

  <img className="donut" src={"/images/golf.png"} />
  <p>{minsOfGolf(props)} minutes of playing Golf</p>

  </section>
}