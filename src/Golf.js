import React from 'react'

function minsOfGolf(calories){
  return (calories / 5).toFixed(0)
}

export default function Golf(props){
  return <section>

    <img className="sport" src={"http://i349.photobucket.com/albums/q374/razbag18/golf_zpsvfln2p2k.png?t=1536631878"} />
    <p>{minsOfGolf(props.calories)} minutes of playing Golf</p>

  </section>
}