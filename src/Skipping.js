import React from 'react'

function minsOfSkipping(calories){
  return (calories / 14).toFixed(0)
}

export default function Skipping(){
  return <section>

  <img className="donut" src={"/images/skipping.png"} />
  <p>{minsOfSkipping(400)} minutes of Skipping</p>

  </section>
}
