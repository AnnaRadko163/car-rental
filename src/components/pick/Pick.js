import React from 'react'

import dataCar from '../../pages/models/allDataCar'
import "./pick.sass"
export default function Pick() {
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
                {dataCar.map(e => (
                  <button key={e.id}>{e.title}</button>
                ))}
              </div>
              <div className='pick__box-cars'>
                <div className='pick__car'>
                  <img src={dataCar[0].src} alt='картинка машины'/>
                </div>
                <div className='pick__description'>
                  <div className='pick__price'><span>{dataCar[0].price}₽</span>/ аренда в сутки</div>
                  <div className='pick__table'>
                    <div className='pick__table__col'>
                      <span>Модель</span>
                      <span>{dataCar[0].model}</span>
                    </div>
                    <div className='pick__table__col'>
                      <span>Марка</span>
                      <span>{dataCar[0].mark}</span>
                    </div>
                    <div className='pick__table__col'>
                      <span>Выпуск</span>
                      <span>{dataCar[0].year}</span>
                    </div>
                    <div className='pick__table__col'>
                      <span>Двери</span>
                      <span>{dataCar[0].doors}</span>
                    </div>
                    <div className='pick__table__col'>
                      <span>Кондиционер</span>
                      <span>{dataCar[0].AC}</span>
                    </div>
                    <div className='pick__table__col'>
                      <span>КПП</span>
                      <span>{dataCar[0].transmission}</span>
                    </div>
                    <div className='pick__table__col'>
                      <span>Топливо</span>
                      <span>{dataCar[0].fuel}</span>
                    </div>


                    
                  </div>
                  <a href='/'>Забронировать сейчас</a>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}
