import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Dropdown } from './components/UI/Dropdown'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Dropdown dropdownType={'rooms'} />
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
