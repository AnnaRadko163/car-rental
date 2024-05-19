import React from 'react'
import { Link } from 'react-router-dom'

import bg from "../../img/hero/hero-bg.png"
import car from "../../img/hero/main-car.png"

import "./headerHome.sass"

export default function HeaderHome() {
  return (
    <div className='hero'>
      <img className="hero__bg" src={bg} alt='заставка'/>
      <div className='container'>
        <div className='hero-content'>
          <div className='hero-content__text'>
            <h4>Спланируйте поездку сейчас</h4>
            <h1> Экономьте с нашим прокатом <span>автомобиль</span></h1>
            <p>Арендуйте автомобиль своей мечты. Непревзойденные цены, неограниченное количество километров, гибкие возможности получения и многое другое.</p>
            <Link to="fot">Забронировать поездку &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6"></path></svg></Link>
          </div>
          <img src={car} alt='заставка'/>
        </div>
      </div>
    </div>
  )
}
