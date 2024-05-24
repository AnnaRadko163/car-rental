import React from 'react'
import HeaderPages from '../../components/headerPages/HeaderPages'




import TestimonialsItem from '../../components/testimonialsItem/TestimonialsItem'

export default function Testimonials(props) {
  return (
    <section className='testimonials-section'>
      <HeaderPages title={props.title}/>
      <TestimonialsItem/>
    </section>
  )
}
