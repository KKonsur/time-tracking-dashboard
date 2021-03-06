import React from 'react'
import './Card.scss'
import ellipsis from '../../images/icon-ellipsis.svg'

export const Card = props => (
   <section className='card' >
      <div className='card__image' style={{ backgroundColor: props.bgColor }}>
         <img src={props.img} alt="" />
      </div>
      <div className='card__data'>
         <img src={ellipsis} alt="" />
         <h2 className='card__title'>{props.title}</h2>
         <p className='card__time'>{props.time}</p>
         <p className='card__recent'>{props.recentActivity}</p>
      </div>
   </section>
)

