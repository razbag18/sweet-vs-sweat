import React from 'react'

function minsOfSwimming(calories){
  return (calories / 11).toFixed(0)
}

export default function Swimming(props){
  return <section>

    <img className="sport" src={"/images/swimming.png"} />
    <p>{minsOfSwimming(props.calories)} minutes of Freestyle at a fast and vigorous effort</p>

  </section>
}

