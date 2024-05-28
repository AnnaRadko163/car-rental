import React from 'react'

import HeaderPages from '../../components/headerPages/HeaderPages'
import PlanRental from '../../components/planRental/PlanRental'
import imgAbout from "../../img/about/about-main.jpg"
import img1 from "../../img/about/icon1.png"
import img2 from "../../img/about/icon2.png"
import img3 from "../../img/about/icon3.png"

import "./about.sass"

export default function About(props) {
  return (
    <section className='about-section'>
      <HeaderPages title={props.title}/>
      <div className="container">
        <div className='about'>
          <img className='about__img' src={imgAbout} alt='баннер'/>
          <div className='about__text'>
            <h3>О компании</h3>
            <h2>Вы запускаете двигатель и ваше приключение начинается</h2>
            <p> Компания проката автомобилей - это организация, которая предоставляет клиентам возможность арендовать автомобили на определенный срок. Это может быть удобно для тех, кто не имеет собственного автомобиля, планирует поездку в другуой город или регион, или просто хочет испытать новые модели автомобилей.</p>
            <div className='about__icon__wrapper'>
              <div className='about__icon__box'>
                <img src={img1} alt='миниатюра'/>
                <span>
                  <h4>20</h4>
                  <p>Типов автомобилей</p>
                </span>
              </div>
              <div className='about__icon__box'>
                <img src={img2} alt='миниатюра'/>
                <span>
                  <h4>85</h4>
                  <p>Пунктов проката</p>
                </span>
              </div>
              <div className='about__icon__box'>
                <img src={img3} alt='миниатюра'/>
                <span>
                  <h4>75</h4>
                  <p>Ремонтных мастерских</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <PlanRental/>
      </div>
      
    </section>
    
  )
}
