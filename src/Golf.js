import React from 'react'

function minsOfGolf(calories){
  return (calories / 5).toFixed(0)
}

export default function Golf(props){
  return <section>

    <img className="sport" src={"images/golf.png"} />
    <p>{minsOfGolf(props.calories)} minutes of playing Golf</p>

  </section>
}