import React from 'react'

function minsOfSkipping(calories){
  return (calories / 14).toFixed(0)
}

export default function Skipping(props){
  return <section>

    <img className="sport" src={"http://i349.photobucket.com/albums/q374/razbag18/skipping_zpso8qk8ruc.png"} />
    <p>{minsOfSkipping(props.calories)} minutes of Skipping</p>

  </section>
}
