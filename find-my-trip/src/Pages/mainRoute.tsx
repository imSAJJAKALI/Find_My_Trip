import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Booking from './Booking'
import Destinations from './Destinations'
import Reviews from './Reviews'
import ContactUs from './ContactUs'

export default function MainRoute() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Destinations' element={<Destinations/>}/>
      <Route path='/Booking' element={<Booking/>}/>
      <Route path='/Reviews' element={<Reviews/>}/>
      <Route path='/ContactUs' element={<ContactUs/>}/>
    </Routes>
  )
}
