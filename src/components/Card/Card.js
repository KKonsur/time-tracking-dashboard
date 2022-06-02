import React from 'react'
import './Card.css'
import ellipsis from '../../images/icon-ellipsis.svg'

export const Card = props => (
   <section className='card' >
      <div className='card__image' style={{ backgroundColor: props.bgColor }}>
         <img src={props.img} alt="" />
      </div>
      <div className='card__data'>
         <img src={ellipsis} alt="" />
         <p className='card__title'>{props.title}</p>
         <p className='card__time'>{props.time}</p>
         <p className='card__recent'>{props.recentActivity}</p>
      </div>
   </section>
)

