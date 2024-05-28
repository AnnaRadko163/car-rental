import { useState } from 'react'

import bg from "../../img/hero/hero-bg.png"
import car from "../../img/hero/main-car.png"

import "./headerHome.sass"

export default function HeaderHome({setOpenForm}) {
  const [scroll, setScroll] = useState(false)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", handleScroll)
  return (
    <>
      <section className='hero-section'>
        <img className="hero__bg" src={bg} alt='заставка'/>
        <div className='container'>
          <div className='hero-content'>
            <div className='hero-content__text'>
              <h4>Спланируйте поездку сейчас</h4>
              <h1> Экономьте с нашим прокатом <span>автомобилей</span></h1>
              <p>Арендуйте автомобиль своей мечты. Непревзойденные цены, неограниченное количество километров, гибкие возможности получения и многое другое.</p>
              <button onClick={() => setOpenForm(true)}>Забронировать поездку &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6"></path></svg></button>
            </div>
            <img src={car} alt='заставка'/>
          </div>
        </div>
      </section>
      {scroll ? <div onClick={scrollToTop} className="scroll-up show-scroll">^</div> : null}
      
    </>
  )
}
