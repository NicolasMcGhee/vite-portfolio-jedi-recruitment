import React from 'react'
import './index.css'
import JediSymbol from '../../assets/Symbols/Jedi_symbol.svg'

export default function Navbar() {
  return (
    <nav className='navbar-Container uppercase'>
        <div className='navbar-Items'>
            <img src={JediSymbol} alt="Jedi Symbol" width={30}/>
            <p>Join The Jedi</p>
        </div>
        <div className='navbar-Items'>
            <ul className='navbar-List'>
                <li>Stories</li>
                <li>Council Members</li>
                <li>Requirements</li>
            </ul>
        </div>
        <div className='navbar-Items '>
            <button className='navbar-Button uppercase'>Join Us</button>
        </div>
    </nav>
  )
}
