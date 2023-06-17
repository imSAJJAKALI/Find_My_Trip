import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Booking from './Booking'
import Destinations from './Destinations'
import Reviews from './Reviews'
import ContactUs from './ContactUs'
import Navbar from '../Components/Navbar'
import LoginPage from './Login'
import SignupPage from './SignUp'

export default function MainRoute() {
  return (
    <>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/destinations' element={<Destinations/>}/>
      <Route path='/booking' element={<Booking/>}/>
      <Route path='/reviews' element={<Reviews/>}/>
      <Route path='/ContactUs' element={<ContactUs/>}/>
      
      <Route path='/login' element={<LoginPage/>}/>

      <Route path='/signup' element={<SignupPage/>}/>

    </Routes>
    </>
  )
}
