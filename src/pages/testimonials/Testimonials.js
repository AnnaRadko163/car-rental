import React from 'react'
import HeaderPages from '../../components/headerPages/HeaderPages'

import img1 from '../../img/testimonials/1.svg'
import img2 from '../../img/testimonials/2.svg' 

import "./testimonials.sass"

export default function Testimonials(props) {
  return (
    <>
      <HeaderPages title={props.title}/>
      <section className='testimonials'>
        <div className="container">
          <div className='testimonials__wrapper'>
            <div className='testimonials__title'>
              <h2>Отзывы клиентов</h2>
              <p>Узнайте, какое положительное влияние мы оказали на наших клиентов, прочитав их отзывы. Наши клиенты уже оценили наши услуги и результаты и с радостью поделятся с вами своим положительным опытом.</p>
            </div>
            <div className='testimonials-all'>
              <div className='testimonials-all__box'>
                <span className='testimonials-all__icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-quote"><path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path><path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path></svg>
                </span>
                <p>«Мы арендовали автомобиль на этом сайте и получили потрясающие впечатления! Бронирование прошло легко, а ставки аренды были очень доступными».</p>
                <div className="testimonials-all__name">
                  <div className="testimonials-all__name__profile">
                    <img src={img1} alt='фото'/>
                    <span>
                      <h4>Мария Петрова</h4>
                      <p>Самара</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className='testimonials-all__box'>
                <span className='testimonials-all__icon'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-quote"><path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path><path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path></svg>
                </span>
                <p>«Машина была в отличном состоянии, что сделало нашу поездку еще лучше. Настоятельно рекомендую этот сайт по прокату автомобилей!»</p>
                <div className="testimonials-all__name">
                  <div className="testimonials-all__name__profile">
                    <img src={img2} alt='фото'/>
                    <span className='testimonials-all__icon'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-quote"><path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path><path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path></svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
