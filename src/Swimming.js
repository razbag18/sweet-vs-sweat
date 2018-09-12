import React from 'react'

function minsOfSwimming(calories){
  return (calories / 11).toFixed(0)
}

export default function Swimming(props){
  return <section>

    <img className="sport" src={"http://i349.photobucket.com/albums/q374/razbag18/swimming_zpsqjy9ssvp.png"} />
    <p>{minsOfSwimming(props.calories)} minutes of Freestyle at a fast and vigorous effort</p>

  </section>
}

