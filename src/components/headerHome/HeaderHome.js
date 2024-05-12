import React from 'react'
import bg from "../../img/hero/hero-bg.png"

import "./headerHome.sass"

export default function HeaderHome() {
  return (
    <div className='header-home'>
        <img className="header-home__bg" src={bg} alt='заставка'/>
    </div>
  )
}
