import React from 'react'
import bg from "../../img/chooseUs/bg.png"
import main from "../../img/chooseUs/main.png"
import mark from "../../img/chooseUs/check-mark.png"

import "./choose.sass"



export default function Choose({setOpenForm}) {
    const chooseList = [
        {
            id: 1,
            title: "Кросс-кантри-драйв",
            descr: "Поднимите свои впечатления от вождения на новый уровень с нашими первоклассными автомобилями для приключений по пересеченной местности.",
        },
        {
            id: 2,
            title: "Все включено",
            descr: "Получите все, что вам нужно, по одной удобной и прозрачной цене с нашей комплексной ценовой политикой.",
        },
        {
            id: 3,
            title: "Никаких скрытых платежей",
            descr: "Наслаждайтесь спокойствием благодаря нашей политике отсутствия скрытых платежей. Мы верим в прозрачное и честное ценообразование.",
        }
    ]

  return (
    <section style={{ backgroundImage: `url(${bg})` }} className='choose-section'>
        <div className='container'>
            <div className='choose'>
                <img className='choose__img' src={main} alt='заставка'/>
                <div className='choose__text'>
                    <div className='choose__left'>
                        <h4>Почему надо выбрать именно нас?</h4>
                        <h2>Лучшие предложения, которые вы когда-либо найдете</h2>
                        <p>Откройте для себя лучшие предложения, которые вы когда-либо найдете, с нашими непревзойденными предложениями. Мы стремимся предоставить вам лучшее соотношение цены и качества, чтобы вы могли наслаждаться высококачественными услугами и продуктами, не тратя денег. Наши предложения созданы для того, чтобы предоставить вам незабываемые впечатления от аренды, поэтому не упустите шанс сэкономить.</p>
                        <button onClick={() => setOpenForm(true)}>Забронировать поездку &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chevron-right"><path d="M9 6l6 6l-6 6"></path></svg></button>
                    </div>
                    <div className='choose__right'>{
                        chooseList.map(e => (
                            <div key={e.id} className='choose__right__box'>
                                <img src={mark} alt='миниатюра'/>
                                <div className='choose__right__text'>
                                    <h4>{e.title}</h4>
                                    <p>{e.descr}</p>
                                </div>
                            </div>  
                        ))
                    }</div>
                </div>
            </div>
        </div>
    </section>
  )
}
