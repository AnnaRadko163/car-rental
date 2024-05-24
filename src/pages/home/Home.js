import React from 'react'
import HeaderHome from '../../components/headerHome/HeaderHome'
import PlanRental from '../../components/planRental/PlanRental'


import Pick from '../../components/pick/Pick'
import Banner from '../../components/banner/Banner'
import Choose from '../../components/choose/Choose'
import TestimonialsItem from '../../components/testimonialsItem/TestimonialsItem'
import Faq from '../../components/faq/Faq'

export default function Home({setOpenForm}) {

  return (
    <>
      <HeaderHome setOpenForm={setOpenForm} />
      <PlanRental/>
      <Pick setOpenForm={setOpenForm}/>
      <Banner/>
      <Choose setOpenForm={setOpenForm}/>
      <TestimonialsItem/>
      <Faq/>
      
    </>
    
  )
}
