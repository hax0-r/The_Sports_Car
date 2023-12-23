import React from 'react'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Partners from '../Pages/Partners/Partners'
import Contact from '../Pages/Contact/Contact'
import Media from '../Pages/Media/Media'
import { Route, Routes } from 'react-router-dom'
import NAVBAR_DATA from '../Components/Navbar/NavBAR_DATA'

export default function Router() {
  return (
    <>
    
    <Routes>
      <Route path={NAVBAR_DATA[0].navPath} element={<Home />} />
      <Route path={NAVBAR_DATA[1].navPath} element={<About />} />
      <Route path={NAVBAR_DATA[2].navPath} element={<Partners />} />
      <Route path={NAVBAR_DATA[3].navPath} element={<Media />} />
      <Route path={NAVBAR_DATA[4].navPath} element={<Contact/>} />
    </Routes>

    </>
  )
}
