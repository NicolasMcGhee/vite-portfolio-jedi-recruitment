import React from 'react'
import './index.css'


export default function ProfileCard(props) {
  return (
    <div className='Profilecard-Container'>
        <div className='Profilecard-Image'>
            <img src={props.profileImage} alt="" width={250} />
        </div>
        <div>
            <h1>{props.name}</h1>
            <h3>{props.ranking}</h3>
        </div>
    </div>
  )
}
