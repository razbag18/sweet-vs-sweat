import React from 'react'

function minsOfJogging(calories){
  return (calories / 8).toFixed(0)
}

export default function Jogging(){
  return <section>

  <img className="donut" src={"/images/running.png"} />
  <p>{minsOfJogging(400)} minutes of Jogging</p>

  </section>
}
