import React from 'react'

function minsOfBasketball(calories){
  return (calories / 7).toFixed(0)
}

export default function Basketball(props){
  return <section>

    <img className="donut" src={"/images/Basketball.png"} />
    <p>{minsOfBasketball(props.calories)} minutes of playing Basketball</p>

  </section>
}