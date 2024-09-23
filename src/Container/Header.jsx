import React from 'react'
import './Header.css'
import Menu from './Menu'

export default function Header() {
  return (
    <div className='Header'>
        <h1>PIA</h1>
        <ul>
            <li><a href='#pic_des'>About</a></li>
            <li><a href='#port'>Portfolio</a></li>
            <li><a href='#compound'>Skills</a></li>
            <li><a href='#contact'>Contact</a></li>

        </ul>
      <Menu />
    </div>
  )
}