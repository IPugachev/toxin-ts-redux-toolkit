import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header } from './components/Header'
import { Button } from './components/UI/Button'
import { Calendar } from './components/UI/Calendar'
import { Diagram } from './components/UI/Diagram'
import { Dropdown } from './components/UI/Dropdown'
import { Input } from './components/UI/Input'
import { Slider } from './components/UI/Slider'

export const App: React.FC = () => {
  console.log('App rendered')

  return (
    <BrowserRouter>
      <Header />
      {/* <Dropdown dropdownType={'rooms'} />
      <Button text='Кнопка' buttonStyle='long' hasArrow={true} />
      <Calendar start='Прибытие' end='выезд' filtered={true} />
    <Diagram greatReviews={50} goodReviews={60} alrightReviews={20} badReviews={0} /> */}

      {/* <Toggle title='test' /> */}
      <Slider title='диапазон цены' initialMin={0} initialMax={150} />
      {/* <Body>
        <Header />
        <Routes>
          <Route path='/study-project-toxin/' element={<LandingPage />} />
          <Route path='/study-project-toxin/search' element={<SearchRoomsPage />} />
          <Route path='/study-project-toxin/registration' element={<RegistrationPage />} />
          <Route path='/study-project-toxin/room/:roomId' element={<RoomPage />} />
        </Routes>
        <Footer />
      </Body> */}
    </BrowserRouter>
  )
}
