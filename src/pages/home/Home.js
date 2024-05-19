import React from 'react'
import HeaderHome from '../../components/headerHome/HeaderHome'
import PlanRental from '../../components/planRental/PlanRental'

import "./home.sass"
import Pick from '../../components/pick/Pick'

export default function Home() {
  return (
    <section className='home-section'>
      <HeaderHome/>
      <PlanRental/>
      <Pick/>
      
    </section>
    
  )
}
