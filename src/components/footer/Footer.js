import React from 'react'
import "./footer.sass"
import bg from "../../img/banners/book-banner.png"

export default function Footer() {
  return (
    <>
      <div className='footer-tel'>
        <img src={bg} alt='заставка'/>
        <div className='footer-tel__overlay'></div>
        <div className='container'>
          <p> Забронируйте автомобиль, связавшись с нами<a href="tel:+71234567890">&#128222; 8 (123) 456-78-90</a></p>
        </div>
      </div>
      <footer className='footer'>
        <div className='footer__wrapper'>
          <div>
            <h4></h4>
          </div>
          <div>
            <h4></h4>
          </div>
          <div>
            <h4></h4>
          </div>
          <div>
            <h4></h4>
          </div>
        </div>
      </footer>
    </>
  )
}
