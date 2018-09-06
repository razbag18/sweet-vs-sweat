import React from 'react'

function minsOfYoga(calories){
  return (calories / 2).toFixed(0)
  //\\ if (result > 60){
  //   return (result / 60).toFixed(2)
  // }
  
}

export default function Yoga(props){
  return <section>

    <img className="sport" src={"/images/yoga.png"} />
    <p>{minsOfYoga(props.calories)} minutes of Hatha Yoga</p>

  </section>
}
