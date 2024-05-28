import { useState } from 'react'

import dataCar from '../../pages/models/allDataCar'

import "./pick.sass"

export default function Pick({setOpenForm}) {
  const [openCar, setOpenCar] = useState(dataCar)
  let openCharact = openCar.filter(e => e.open === true)[0]
  function changeDataCar(index) {
    const newDataCar = openCar.map((e) => {
      if(e.id === index) {
        e.open = true
        return e
      } else {
        e.open = false
        return e
      }
    })
    setOpenCar(newDataCar) 
  }

  return (
    <section className='pick'>
        <div className='container'>
            <div className='pick__title'>
                <h3>Модели автомобилей</h3>
                <h2>Наш арендный парк</h2>
                <p>Выбирайте из множества наших удивительных автомобилей и арендуйте их для вашего следующего приключения или деловой поездки.</p>
            </div>
            <div className='pick__content'>
              <div className='pick__box'>
                {openCar.map(e => (
                  <button onClick={() => changeDataCar(e.id)} className={e.open ? "pick__btn pick__btn_activ" : "pick__btn"} key={e.id}>{e.title}</button>
                ))}
              </div>
              <div className='pick__box-cars'>
                <div className='pick__car'>
                  <img src={openCharact.src} alt='картинка машины'/>
                </div>
                <div className='pick__description'>
                  <div className='pick__price'><span>{openCharact.price}₽</span>/ аренда в сутки</div>
                  <div className='pick__table'>
                    <div className='pick__table__col'>
                      <span>Модель</span>
                      <span>{openCharact.model}</span>
                    </div>
                    <div className='pick__table__col'>
                      <span>Марка</span>
                      <span>{openCharact.mark}</span>
                    </div>
                    <div className='pick__table__col'>
                      <span>Выпуск</span>
                      <span>{openCharact.year}</span>
                    </div>
                    <div className='pick__table__col'>
                      <span>Двери</span>
                      <span>{openCharact.doors}</span>
                    </div>
                    <div className='pick__table__col'>
                      <span>Кондиционер</span>
                      <span>{openCharact.AC}</span>
                    </div>
                    <div className='pick__table__col'>
                      <span>КПП</span>
                      <span>{openCharact.transmission}</span>
                    </div>
                    <div className='pick__table__col'>
                      <span>Топливо</span>
                      <span>{openCharact.fuel}</span>
                    </div>
                  </div>
                  <button onClick={() => setOpenForm(true)} >Забронировать сейчас</button>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}
