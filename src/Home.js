import React from 'react'
import FoodSearch from './FoodSearch';
import Swimming from './Swimming'
import Skipping from './Skipping'
import Jogging from './Jogging'
import Yoga from './Yoga'
import './Home.css'
import Basketball from './Basketball';
import Golf from './Golf';


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
    <div><Swimming /></div>
    <div><Skipping /></div>
    <div><Jogging /></div>
    <div><Basketball /></div>
    <div><Golf /></div>
    <div><Yoga /></div>
    
    <footer>Calories displayed are per 100 grams, unless stated. Please note results are only a guide, as the energy you actually burn may vary depending on other factors such as age, gender, and how you move.</footer>
  </section>
}
