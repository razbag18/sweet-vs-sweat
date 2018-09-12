import React from 'react'

function minsOfCycling(calories){
  return (calories / 8).toFixed(0)
}

export default function Cycling(props){
  return <section>

    <img className="sport" src={"http://i349.photobucket.com/albums/q374/razbag18/cycling_zpsnayvhm9i.png?t=1536631878"} />
    <p>{minsOfCycling(props.calories)} minutes of general Cycling</p>

  </section>
}