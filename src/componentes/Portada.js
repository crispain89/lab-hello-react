import React from 'react'
import Boton from './Boton'
import logo from '../images/ironhack-logo-xs.png'
import menu from '../images/menu-top-xs.png'


function Portada({ titulo, info}) {
  return (
    <div className="portada">
      <div className='portada__superior'>
        <img className='imgLogo' src={logo } alt='logo Iron Hack'/>
        <img className='imgMenu' src={menu} alt='menu logo' />       
      </div>
          <div className='portada__info'>
              <span className='title'>{titulo}</span>
              <span className='info'>{info}</span>
          <Boton/>  
          </div>

    </div>
  )
}

export default Portada