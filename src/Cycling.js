import React from 'react'

function minsOfCycling(calories){
  return (calories / 8).toFixed(0)
}

export default function Cycling(props){
  return <section>

    <img className="sport" src={"/images/cycling.png"} />
    <p>{minsOfCycling(props.calories)} minutes of general Cycling</p>

  </section>
}