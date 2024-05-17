import React from 'react'
import bg from '../../img/hero/heroes-bg.png'

import "./headerPages.sass"

export default function HeaderPages(props) {
    return (
      <div className='header-pages'>
        <img src={bg} alt='заставка'/>
        <div className='container'>
          <div className='header-pages__text'>
            <h3>{props.title}</h3>
            <p>Главная / {props.title}</p>
          </div> 
        </div>
        
      </div>
    )
}
