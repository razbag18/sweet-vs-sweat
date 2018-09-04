import React from 'react'

function minsOfGolf(calories){
  return (calories / 5).toFixed(0)
}

export default function Golf(){
  return <section>

  <img className="donut" src={"/images/golf.png"} />
  <p>{minsOfGolf(400)} minutes of playing Golf</p>

  </section>
}