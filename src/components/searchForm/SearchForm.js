import React from 'react'
import {useState} from 'react'
import { Formik, Form, Field, ErrorMessage, useField } from 'formik'; 
import * as Yup from 'yup';
import "./searchForm.sass"
import bg from "../../img/book-car/book-bg.png"
import ReservationForm from '../reservationForm/ReservationForm';

const MyDataInput = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
      <>
          <label htmlFor={props.name}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon"><path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M16 3l0 4"></path><path d="M8 3l0 4"></path><path d="M4 11l16 0"></path><path d="M8 15h2v2h-2z"></path></svg>&nbsp; {label}<b>*</b></label>
          <input {...props} {...field}/>
          {meta.touched && meta.error ? (
              <div className='error'>{meta.error}</div>
          ) : null}
      </>
  )
}
export default function SearchForm({setOpenForm}) {
  const [reserveForm, setReserveForm] = useState(false)
  const [dataCarForm, setDataCarForm] = useState({})
  return (
    <div className='search-form'>
        {!reserveForm ? (<div style={{ backgroundImage: `url(${bg})` }} className='search-form__bg' >
          <div className='search-form__title'>
            <h2>Забронировать автомобиль</h2>
            <svg onClick={() => setOpenForm(false)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-x"><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>
          </div>
          <Formik
            initialValues={{
              car: '',
              pick: '',
              drop: '',
              pickData: '',
              dropData: '',
            }}
            validationSchema={Yup.object({
                car: Yup.string().required('Обязательное поле!'),
                pick: Yup.string().required('Обязательное поле!'),
                drop: Yup.string().required('Обязательное поле!'),
                pickData: Yup.date().required('Обязательное поле!').min(new Date(), 'Дата некорректная!'),
                dropData: Yup.date().required('Обязательное поле!').min(Yup.ref('pickData'),"Вторая дата не может быть раньше даты начала"),
            })}
            onSubmit={ (values) => {
              // setDataCarForm(JSON.stringify(values, null, 2))
              setDataCarForm(values)
              document.body.style.overflow = "hidden";
              setReserveForm(true)}
            }>
              <Form className="search-form__wrapper">
                <div className="search-form__box">
                  <label htmlFor="car"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon"><path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path></svg>&nbsp; Выберите тип автомобиля<b>*</b></label>
                  <Field
                      className="search-form__type"
                      id="car"
                      name="car"
                      as="select">
                          <option value="">Выберите тип автомобиля</option>
                          <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                          <option value="VW Golf 6">VW Golf 6</option>
                          <option value="Toyota Camry">Toyota Camry</option>
                          <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                          <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                          <option value="VW Passat CC">VW Passat CC</option>
                  </Field>
                  <ErrorMessage className="error" name="car" component="div"/>
                </div>
                <div className="search-form__box">
                  <label htmlFor="pick"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon"><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" fill="currentColor" strokeWidth="0"></path></svg>&nbsp; Место получения автомобиля<b>*</b></label>
                  <Field
                    className="search-form__type"
                    id="pick"
                    name="pick"
                    as="select">
                      <option value="">Выберите город</option>
                      <option value="Самара">Самара</option>
                      <option value="Новокуйбышевск">Новокуйбышевск</option>
                      <option value="Тольятти">Тольятти</option>
                      <option value="Чапаевск">Чапаевск</option>
                      <option value="Сызрань">Сызрань</option>
                  </Field>
                  <ErrorMessage className="error" name="pick" component="div"/>
                </div>
                <div className="search-form__box">
                  <label htmlFor="drop"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon"><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" fill="currentColor" strokeWidth="0"></path></svg>&nbsp;Место возврата автомобиля<b>*</b></label>
                  <Field
                    className="search-form__type"
                    id="drop"
                    name="drop"
                    as="select">
                      <option value="">Выберите город</option>
                      <option value="Самара">Самара</option>
                      <option value="Новокуйбышевск">Новокуйбышевск</option>
                      <option value="Тольятти">Тольятти</option>
                      <option value="Чапаевск">Чапаевск</option>
                      <option value="Сызрань">Сызрань</option>
                  </Field>
                  <ErrorMessage className="error" name="drop" component="div"/>
                </div>
                <div className="search-form__box">
                  <MyDataInput 
                    className="search-from__data"
                    label="Дата подачи"
                    id="pickData"
                    name="pickData"
                    type="date"/>
                </div>
                <div className="search-form__box">
                  <MyDataInput 
                    className="search-form__data"
                    label="Дата возврата"
                    id="dropData"
                    name="dropData"
                    type="date"/>
                </div>
                  <button type="submit">Отправить</button>
              </Form>
          </Formik>
        
        </div>
      ) : <ReservationForm dataCarForm={dataCarForm} setOpenForm={setOpenForm}/>}

    </div>
  )
}
