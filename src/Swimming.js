import React from 'react'



export default function Swimming(props){
  const calories = { calories: props.calories }

  function minsOfSwim(calories){
    return (calories / 11).toFixed(0)
  }

  return <section>

  <img className="donut" src={"/images/swimming.png"} />
  <p>{minsOfSwim(calories)} minutes of Freestyle at a fast and vigorous effort</p>

  </section>
}

