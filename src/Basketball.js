import React from 'react'

function minsOfBasketball(calories){
  return (calories / 7).toFixed(0)
}

export default function Basketball(props){
  return <section>

    <img className="sport" src={"http://i349.photobucket.com/albums/q374/razbag18/basketball_zpsxvpe7e0u.png"} />
    <p>{minsOfBasketball(props.calories)} minutes of playing Basketball</p>

  </section>
}