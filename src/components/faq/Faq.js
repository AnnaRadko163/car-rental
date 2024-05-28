import { useState } from "react";

import img from "../../img/faq/car.png";

import "./faq.sass";



export default function Faq() {
    const [questions, setQuestions] = useState([
        {
          id: 1,
          title: "1. Что особенного в сравнении предложений по аренде автомобилей?",
          descr:
            "Сравнение предложений по аренде автомобилей важно, поскольку оно помогает найти лучшее предложение, соответствующее вашему бюджету и требованиям, гарантируя, что вы получите максимальную отдачу от своих денег. Сравнивая различные варианты, вы можете найти предложения, предлагающие более низкие цены, дополнительные услуги или лучшие модели автомобилей. Вы можете найти предложения по аренде автомобилей, исследуя Интернет и сравнивая цены различных компаний по аренде.",
          open: true,
        },
        {
          id: 2,
          title: "2. Как мне найти предложения по аренде автомобилей?",
          descr:
            "Вы можете найти предложения по аренде автомобилей, исследуя Интернет и сравнивая цены различных компаний по аренде. Такие сайты, как Expedia, Kayak и Travelocity, позволяют сравнивать цены и просматривать доступные варианты аренды. Также рекомендуется подписаться на рассылку новостей по электронной почте и следить за компаниями по прокату автомобилей в социальных сетях, чтобы быть в курсе любых специальных предложений или рекламных акций.",
          open: false,
        },
        {
          id: 3,
          title: "3. Как мне найти такие низкие цены на аренду автомобилей?",
          descr:
            "Бронируйте заранее: бронирование автомобиля заранее часто может привести к снижению цен. Сравните цены нескольких компаний. Используйте такие сайты, как Kayak, Expedia или Travelocity, чтобы сравнить цены нескольких компаний по аренде автомобилей. Ищите коды скидок и купоны. Найдите коды скидок и купоны, которые можно использовать для снижения стоимости аренды. Аренда жилья за пределами аэропорта иногда может привести к снижению цен.",
          open: false,
        },
    ])

    function changeQiestions(index) {
      const newQuestions = questions.map(e => {
        if(e.id === index && e.open === false) {
          e.open = true
          return e
        } else {
          e.open = false
          return e
        }
      })
      setQuestions(newQuestions)
      
    }
    
    
    
return (
    <section className="faq-section" style={{ backgroundImage: `url(${img})` }}>
      <div className="container">
        <div className="faq">
          <div className="faq__title">
            <h2>Часто задаваемые вопросы</h2>
            <p>
              Часто задаваемые вопросы о процессе бронирования аренды автомобиля
              на нашем веб-сайте: ответы на распространенные вопросы и вопросы.
            </p>
          </div>
          <div className="faq__questions">
            {questions.map((e) => (
              <div key={e.id} id={e.id} onClick={() => changeQiestions(e.id)} className="faq__box ">
                <div className={e.open ? "faq__box__question active-question" : "faq__box__question"}>
                  <p>{e.title}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-chevron-down"
                  >
                    <path d="M6 9l6 6l6 -6"></path>
                  </svg>
                </div>
                {/* {e.open ? <div className="faq__box__answer active-answer">{e.descr}</div> : null} */}
                <div className={e.open ? "faq__box__answer active-answer" : "faq__box__answer"}>{e.descr}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
