import React from 'react'
import './ProfileCard.scss'
import { Navigation } from '../Navigation/Navigation'
import img from '../../images/image-jeremy.png'

export const ProfileCard = () => (
   <section className='profile-card'>
      <div className="profile-card__profile">
         <img src={img} alt="" />
         <div>
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
         </div>
      </div>
      <Navigation />
   </section>
)

