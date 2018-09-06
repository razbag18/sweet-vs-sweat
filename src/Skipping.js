import React from 'react'

function minsOfSkipping(calories){
  return (calories / 14).toFixed(0)
}

export default function Skipping(props){
  return <section>

    <img className="sport" src={"images/skipping.png"} />
    <p>{minsOfSkipping(props.calories)} minutes of Skipping</p>

  </section>
}
