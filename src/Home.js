import React from 'react'
import FoodSearch from './FoodSearch';
import './Home.css'


export default function Home(){
  return <section>
    <div className='title'>
      <img className="donut" src={"/images/donut.png"} />
      <h1>SWEET VS SWEAT</h1>
      <img className="running" src={"/images/running.png"} />
    </div>
    <h3>Just one more doughnut? Find out how much those calories are adding up!</h3>
    <p>Enter a guilty treat to see how much exercise you'll need in order to burn it off. You might start to question if you really can afford those empty calories...</p>
    <div><FoodSearch /></div>
    

  </section>
}
