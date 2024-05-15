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
        <div className='container'>
          <div className='footer__wrapper'>
            <ul className='footer__wrapper__1'>
              <li>Прокат <span>автомобилей</span></li>
              <li>Мы предлагаем большой выбор транспортных средств для всех ваших потребностей вождения. У нас есть идеальный автомобиль, отвечающий вашим потребностям.</li>
              <li>
                <a href="tel:+71234567890">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-phone-call"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path><path d="M15 7a2 2 0 0 1 2 2"></path><path d="M15 3a6 6 0 0 1 6 6"></path></svg>
                  &nbsp; 8 (123) 456-78-90
                </a>
              </li>
              <li>
              <a href="mailto:car@carmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-mail"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path>
                </svg>
                &nbsp; car@carmail.com</a>
              </li>

            </ul>
            <ul className='footer__wrapper__2'>
              <li>Компания</li>
              <li><a href='#'>Карьера</a></li>
              <li><a href='#'>Блог</a></li>
              <li><a href='#'>Как мы работаем</a></li>
            </ul>
            <ul className='footer__wrapper__2'>
            <li>Рабочее время</li>
              <li>Пн-Пт: 9:00 - 21:00.</li>
              <li>Сб: 9:00 - 19:00.</li>
              <li>Вс: закрыто</li>
            </ul>
            <ul className='footer__wrapper__2'>
              <li>Подписка</li>
              <li>Подпишитесь на рассылку новостей,чтобы быть в курсе последних новостей и обновлений.</li>
              <li><input type="email" placeholder="Введите адрес электронной почты"/></li>
              <li><a href='#'><button className="submit-email">Подписаться на обновления</button></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
