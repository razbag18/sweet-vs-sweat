import React from 'react'

function minsOfJogging(calories){
  return (calories / 8).toFixed(0)
}

export default function Jogging(props){
  return <section>

    <img className="sport" src={"images/running.png"} />
    <p>{minsOfJogging(props.calories)} minutes of general Jogging</p>

  </section>
}
