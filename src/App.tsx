import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useAppSelector } from './app/hooks'
import { Header } from './components/Header'
import { Button } from './components/UI/Button'
import { Dropdown } from './components/UI/Dropdown'

export const App = () => {
  console.log('App rendered')

  return (
    <BrowserRouter>
      <Header />
      <Dropdown dropdownType={'rooms'} />
      <Button text='Кнопка' buttonStyle='long' hasArrow={true} />
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
