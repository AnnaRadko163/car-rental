import { useState } from 'react'
import { Formik, Form, useField } from 'formik'; 
import * as Yup from 'yup';

import dataCar from "../../pages/models/allDataCar"
import SuccessSubmit from '../successSubmit/SuccessSubmit';

import "./reservationForm.sass"

const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <span>
            <label htmlFor={props.name}>{label}&nbsp;<b>*</b></label>
            <input {...props} {...field}/>
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </span>
    )
}
const MyCheckbox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type: 'checkbox'});
    return (
        <span className='reserve__form__checkbox'>
            <label className='checkbox'>
                <input type='checkbox' {...props} {...field}/>&nbsp; 
                {children} 
            </label>

            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </span>
    )
}
export default function ReservationForm({dataCarForm, setOpenForm}) {
    const [reserve, setReserve] = useState(false)
    let modelCar = (dataCar.filter(e => e.title === dataCarForm.car))[0]
  return (
    <>
    { !reserve ? (<div className='search-form'>
        <div className='reserve'>
            <div className='reserve__title'>
                <h2>Полное бронирование</h2>
                <svg onClick={() => {
                    document.body.style.overflow = "scroll"
                    setOpenForm(false)}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-x"><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>
            </div>
            <div className='reserve__message'> 
                <h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-info-circle-filled"><path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" fill="currentColor" strokeWidth="0"></path></svg>
                    &nbsp; После завершения запроса на бронирование вы получите:
                </h4>
                <p>Ваучер на аренду, который необходимо предъявить по прибытии в пункт проката, и позвонить по бесплатному номеру службы поддержки клиентов.</p>
            </div>
            <div className='reserve__info'>
                <div className='reserve__info__dates-div'>
                    <div className='reserve__info__dates'>
                        <h5>Место и дата</h5>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-map-pin-filled"><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" fill="currentColor" strokeWidth="0"></path></svg>
                            <div>
                                <h6>Дата и время получения</h6>
                                <p>{dataCarForm.pickData} / <input type="time"></input></p>
                            </div>
                        </span>
                    </div>
                    <div className='reserve__info__dates'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-map-pin-filled"><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" fill="currentColor" strokeWidth="0"></path></svg>
                            <div>
                                <h6>Дата и время возврата</h6>
                                <p>{dataCarForm.dropData} / <input type="time"></input></p>
                            </div>
                        </span>
                    </div>
                    <div className='reserve__info__dates'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-map-pin-filled"><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" fill="currentColor" strokeWidth="0"></path></svg>
                            <div>
                                <h6>Место получения</h6>
                                <p>{dataCarForm.pick}</p>
                            </div>
                        </span>
                    </div>
                    <div className='reserve__info__dates'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-map-pin-filled"><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" fill="currentColor" strokeWidth="0"></path></svg>
                            <div>
                                <h6>Место возврата</h6>
                                <p>{dataCarForm.drop}</p>
                            </div>
                        </span>
                    </div>
                </div>
                <div className='reserve__info__model'>
                    <h5><span>Автомобиль — </span>{dataCarForm.car}</h5>
                    <img src={modelCar.src} alt='миниатюра'/>
                </div>
            </div>
            <div className='reserve__form'>
                <h4>Персональная информация</h4>
                <Formik
                    initialValues={{
                    name: '',
                    surname: '',
                    tel: '',
                    age: '',
                    email: '',
                    address: '',
                    city: '',
                    index: '',
                    news: true,
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string().required('Обязательное поле!'),
                        surname: Yup.string().required('Обязательное поле!'),
                        tel: Yup.number().required('Обязательное поле!').min(9, 'Не менее 9 символов!').integer('Значение должно быть числом!'),
                        age: Yup.number().required('Обязательное поле!').moreThan(18, 'Не младше 18 лет!'),
                        email: Yup.string().required('Обязательное поле!').email('Неправильный email адрес'),
                        address: Yup.string().required('Обязательное поле!'),
                        city: Yup.string().required('Обязательное поле!'),
                        index: Yup.number().required('Обязательное поле!').min(4, 'Не менее 4 символов!').integer('Значение должно быть числом!'),
                    })}
                    onSubmit={ (values) => {
                        document.body.style.overflow = "scroll"
                        setReserve(true)
                        ;
                    }}>
                    <Form className="reserve__form__wrapper">
                        <div className='reserve__form__2col'>
                            <MyTextInput 
                                label="Имя"
                                placeholder="Введите свое имя"
                                id="name"
                                name="name"
                                type="text"/> 
                            <MyTextInput 
                                label="Фамилия"
                                placeholder="Введите свою фамилию"
                                id="surname"
                                name="surname"
                                type="text"/>
                            <MyTextInput 
                                label="Номер телефона"
                                placeholder="Введите свой номер телефона"
                                id="tel"
                                name="tel"
                                type="tel"/>
                            <MyTextInput 
                                label="Возраст"
                                placeholder="18"
                                id="age"
                                name="age"
                                type="number"/>
                        </div>
                        <div className='reserve__form__1col'>
                            <MyTextInput 
                                label="Электронная почта"
                                placeholder="Введите ваш адрес электронной почты"
                                id="email"
                                name="email"
                                type="email"/>
                            <MyTextInput 
                                label="Адрес"
                            placeholder="Введите свой почтовый адрес"
                            id="address"
                            name="address"
                            type="text"
                            />
                        </div>
                        <div className='reserve__form__2col'>
                            <MyTextInput 
                                label="Город"
                                placeholder="Введите свой город"
                                id="city"
                                name="city"
                                type="text"/>
                            <MyTextInput 
                                label="Почтовый индекс"
                                placeholder="Введите свой почтовый индекс"
                                id="index"
                                name="index"
                                type="number"/>
                        </div>
                        <MyCheckbox name="news" >
                            Я соглашаюсь на рассылку последних новостей и обновлений
                        </MyCheckbox>
                        <div className='reserve__form__btn'>
                            <button type="submit">Отправить</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
        </div>
    ) : <SuccessSubmit setOpenForm={setOpenForm}/>}
    </>
  )
}
