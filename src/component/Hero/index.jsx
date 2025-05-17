import React from 'react'
import './index.css'
import JediWating from '../../assets/Jedi_Waiting.png'


export default function Hero(props) {
  return (
    <section className={`Hero-Container ${props.flip == "yes" ? "reverse" : ""} ${props.bgWhite == "yes" ? "white" : ""}` } >
        <div className='Hero-Text'>
            <h1 className='uppercase'>join the jedi and serve your republic.</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat molestiae quas quae temporibus, ex dolores modi debitis necessitatibus. Ad, debitis? Facere voluptatem cum blanditiis. Excepturi!</p>
        </div>
        <div className='Hero-Image'>
            <img src={JediWating} alt=""/>
        </div>
    </section>
  )
}
