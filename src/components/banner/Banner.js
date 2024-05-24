import React from 'react'

import "./banner.sass"

export default function Banner() {
  return (
    <section className="banner-section">
        <div className='container'>
            <div className='banner'>
                <div className='banner__text'>
                    <h2>Сэкономьте с нашим дешевым прокатом автомобилей!</h2>
                    <p>Лучшие аэропорты. Местные поставщики. <span>Круглосуточная</span> поддержка.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
