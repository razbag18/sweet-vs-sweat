import React from 'react'

function minsOfPingPong(calories){
  return (calories / 4).toFixed(0)
}

export default function pingPong(props){
  return <section>

    <img className="sport" src={"http://i349.photobucket.com/albums/q374/razbag18/tennis_zpsp5tej8ry.png"} />
    <p>{minsOfPingPong(props.calories)} minutes of Ping Pong</p>

  </section>
}
