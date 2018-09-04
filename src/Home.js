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
    {/* <div><FoodSearch /></div> */}
    <section className="exercises">
      
      <div>OR</div>
      <div><Skipping calories="1000" /></div>
      <div>OR</div>
      <div><Jogging /></div>
      <div>OR</div>
      <div><Basketball /></div>
      <div>OR</div>
      
      <div>OR</div>
      <div><Yoga /></div>
    </section>
    
  </section>
}
