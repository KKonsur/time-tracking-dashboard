import React from 'react'
import './App.scss'
import { ProfileCard } from '../ProfileCard/ProfileCard'
import { CardsList } from '../CardsList/CardsList'
import { BrowserRouter as Router } from 'react-router-dom'

export const App = () => (
   <div className='container'>
      <main className="cardsContainer">
         <Router basename={process.env.PUBLIC_URL}>
            <ProfileCard />
            <CardsList />
         </Router>
      </main>
   </div>
)

