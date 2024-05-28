import img1 from "../../img/plan/icon1.png"
import img2 from "../../img/plan/icon2.png"
import img3 from "../../img/plan/icon3.png"

import "./planRental.sass"

const planList = [
  {
    id:1,
    src: img1,
    name: "Выбрать автомобиль",
    descr: "Мы предлагаем большой выбор транспортных средств для всех ваших потребностей вождения. У нас есть идеальный автомобиль, отвечающий вашим потребностям",
  },
  {
    id:2,
    src: img2,
    name: "Связаться с оператором",
    descr: "Наши знающие и дружелюбные операторы всегда готовы помочь с любыми вопросами или проблемами.",
  },
  {
    id:3,
    src: img3,
    name: "Поехали",
    descr: "Если вы едете по открытой дороге, мы предоставим вам широкий выбор автомобилей.",
  },
]
export default function PlanRental() {
  return (
    <section className='plan-section'>
      <div className='plan__title'>
        <h3>Спланируйте поездку сейчас</h3>
        <h2>Быстрая и простая аренда автомобиля</h2>
      </div>
      <div className='plan__icons__wrapper'>
        {planList.map(e => ( 
          <div key={e.id} className='plan__icons__box'>
            <img src={e.src} alt='миниатюра'/>
            <h3>{e.name}</h3>
            <p>{e.descr}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
