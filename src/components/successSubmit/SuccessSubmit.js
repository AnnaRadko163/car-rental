import { useEffect }  from 'react'

import "./successSubmit.sass" 

export default function SuccessSubmit({setOpenForm}) {
  useEffect(() => {
    setTimeout(
      () => {setOpenForm(false)},3000)
  },[])
  return (

    <div onClick={() => setOpenForm(false)} className='search-form'>
      <div className='success'>
        <div className='success__wrapper'>
          <p>Спасибо за обращение! Мы скоро с вами свяжемся!</p>
        </div>
      </div>
    </div>

  )
}
