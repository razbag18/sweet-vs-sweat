import React from 'react'

function minsOfSwim(calories){
  return (calories / 11).toFixed(0)
}

export default function Swimming(){
  return <section>

  <img className="donut" src={"/images/swimming.png"} />
  <p>{minsOfSwim(400)} minutes of Freestyle at a fast and vigorous effort</p>

  </section>
}

