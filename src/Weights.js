import React from 'react'

function minsOfWeights(calories){
  return (calories / 7).toFixed(0)
}

export default function Weights(props){
  return <section>

    <img className="sport" src={"http://i349.photobucket.com/albums/q374/razbag18/weights_zpstpsgtgv2.png"} />
    <p>{minsOfWeights(props.calories)} minutes of Resistance (weight) Training, Power Lifting or Body Building, vigorous effort</p>

  </section>
}