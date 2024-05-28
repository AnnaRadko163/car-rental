import { Formik, Form, Field, ErrorMessage, useField } from 'formik'; 
import * as Yup from 'yup';
import { useState } from 'react';

import React from 'react'
import HeaderPages from '../../components/headerPages/HeaderPages'
import bg from "../../img/banners/bg-contact.png"

import "./contact.sass"

const MyTextInput = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
      <>
          <label htmlFor={props.name}>{label} <b>*</b></label>
          <input {...props} {...field}/>
          {meta.touched && meta.error ? (
              <div className='error'>{meta.error}</div>
          ) : null}
      </>
  )
}


function Contact(props) {
  const [submit, setSubmit] = useState(false)
  return (
    <section className='contact-section'>
      <HeaderPages title={props.title} />
      <div className='container'>
        <div style={{ backgroundImage: `url(${bg})` }} className='contact'>
          <div className='contact__text'>
            <h2>Нужна дополнительная информация?</h2>
            <p>Многогранный профессионал, обладающий опытом в различных областях исследований и разработок, а также специалист по обучению. Более 15 лет опыта.</p>
                <a href="tel:+71234567890">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-phone"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path></svg>
                  &nbsp; 8 (123) 456-78-90
                </a>
              <a href="mailto:car@carmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-mail"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path>
                </svg>
                &nbsp; car@carmail.com
              </a>
              <a href="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-location"><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path></svg>
                &nbsp; Россия, Самара
              </a>
          </div>
          <div className='contact__form'>
            <Formik
              initialValues={{
                name: '',
                email: '',
                text: '',
              }}
              validationSchema={Yup.object({
                  name: Yup.string()
                          .min(3, 'Минимум 3 символа!')
                          .required('Обязательное поле!'),
                  email: Yup.string()
                          .email('Неправильный email адрес')
                          .required('Обязательное поле!'),
                  text: Yup.string()
                          .required('Обязательное поле!'),    
              })}
              onSubmit={(values, actions) => {
                document.getElementById("formContact").reset()
                setSubmit(true)
                
            }}
              // onSubmit={ values => console.log(JSON.stringify(values, null, 2))}

          >
              <Form className="form" id="formContact">
                  <MyTextInput 
                      label="Ваше имя"
                      id="name"
                      name="name"
                      type="text"
                      placeholder='Например: "Павел Петров"'/> 
                  <MyTextInput 
                      label="Ваша почта"
                      id="email"
                      name="email"
                      type="email"
                      placeholder=". . . @gmail.com"/>
                  <label htmlFor="text">Ваше сообщение <b>*</b> </label>
                  <Field 
                      id="text"
                      name="text"
                      as="textarea"
                      placeholder="Напишите здесь..."
                  />
                  <ErrorMessage className="error" name="text" component="div"/>
                  <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-mail-opened"><path d="M3 9l9 6l9 -6l-9 -6l-9 6"></path><path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"></path><path d="M3 19l6 -6"></path><path d="M15 13l6 6"></path></svg>&nbsp; Отправить сообщение</button>
                { !submit ? null : (
                  <div className='contact__submit'>Ваше сообщение отправлено, мы скоро с вами свяжемся!</div>
                ) }
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  )
}

export default  Contact;
