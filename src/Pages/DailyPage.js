import React from 'react'
import { Card } from '../components/UI/Card'
import img1 from '../images/icon-work.svg'
import img2 from '../images/icon-play.svg'
import img3 from '../images/icon-study.svg'
import img4 from '../images/icon-exercise.svg'
import img5 from '../images/icon-social.svg'
import img6 from '../images/icon-self-care.svg'

export const DailyPage = () => {
   const data = [
      {
         id: 1,
         title: 'Work',
         time: '7hrs',
         recentActivity: 'Last Day - 7hrs',
         img: img1,
         bgColor: 'hsl(15, 100%, 70%)'
      },
      {
         id: 2,
         title: 'Play',
         time: '2hrs',
         recentActivity: 'Last Day - 3hrs',
         img: img2,
         bgColor: ' hsl(195, 74%, 62%)'
      },
      {
         id: 3,
         title: 'Study',
         time: '2hrs',
         recentActivity: 'Last Day - 2hrs',
         img: img3,
         bgColor: 'hsl(348, 100%, 68%)'
      },
      {
         id: 4,
         title: 'Exercise',
         time: '1hrs',
         recentActivity: 'Last Day - 1hrs',
         img: img4,
         bgColor: 'hsl(145, 58%, 55%)'
      },
      {
         id: 5,
         title: 'Social',
         time: '0.5hrs',
         recentActivity: 'Last Day - 0.5hrs',
         img: img5,
         bgColor: 'hsl(264, 64%, 52%)'
      },
      {
         id: 6,
         title: 'Self care',
         time: '1hrs',
         recentActivity: 'Last Day - 1hrs',
         img: img6,
         bgColor: 'hsl(43, 84%, 65%)'
      },
   ]
   return (
      data.map(item => (
         <Card
            key={item.id}
            img={item.img}
            title={item.title}
            bgColor={item.bgColor}
            time={item.time}
            recentActivity={item.recentActivity}
         />
      ))
   )
}
