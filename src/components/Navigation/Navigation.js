import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

export const Navigation = () => {
   const linkList = [
      { name: 'Daily', path: '/' },
      { name: 'Weekly', path: '/weekly' },
      { name: 'Monthly', path: '/monthly' }
   ]
   const navLinks = linkList.map(link => (
      <li key={link.name}><NavLink to={link.path}>{link.name}</NavLink></li>
   ))

   return (
      <nav className='navigation'>
         <ul>
            {navLinks}
         </ul>
      </nav>
   )
}
