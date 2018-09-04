import React from 'react'

function minsOfYoga(calories){
  return calories / 2
  //\\ if (result > 60){
  //   return (result / 60).toFixed(2)
  // }
  
}

export default function Yoga(){
  return <section>

  <img className="donut" src={"/images/yoga.png"} />
  <p>{minsOfYoga(400)} minutes of Hatha Yoga</p>

  </section>
}
