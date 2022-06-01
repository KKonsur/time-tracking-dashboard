import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { DailyPage } from '../../Pages/DailyPage'
import { WeeklyPage } from '../../Pages/WeeklyPage'
import { MonthlyPage } from '../../Pages/MonthlyPage'

export const CardsList = () => (
   <Routes>
      <Route path='/' element={<DailyPage />} />
      <Route path='/weekly' element={<WeeklyPage />} />
      <Route path='/monthly' element={<MonthlyPage />} />
      <Route path='*' element={<DailyPage />} />
   </Routes>
)

