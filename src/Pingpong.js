import React from 'react'

function minsOfPingPong(calories){
  return (calories / 4).toFixed(0)
}

export default function pingPong(props){
  return <section>

    <img className="sport" src={"images/tennis.png"} />
    <p>{minsOfPingPong(props.calories)} minutes of Ping Pong</p>

  </section>
}
