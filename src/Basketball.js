import React from 'react'

function minsOfBasketball(calories){
  return (calories / 7).toFixed(0)
}

export default function Basketball(){
  return <section>

  <img className="donut" src={"/images/basketball.png"} />
  <p>{minsOfBasketball(400)} minutes of playing Basketball</p>

  </section>
}