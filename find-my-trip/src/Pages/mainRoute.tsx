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
import Admin from './Admin'
import AddPlanForm from './AddPlan'
import TotalPlans from './TotalPlans'
import EditPage from './EditPage'

import PrivateRoute from '../Components/PrivateRoute'

import PaymentPage from './PaymentPage'
import Success from './BookingCard/Success'
import PaymentPage2 from './PaymentPage2'
import { Myplans } from './Myplans'




export default function MainRoute() {
  return (
    <>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/destinations' element={<Destinations/>}/>
      <Route path='/booking' element={
     <Booking/>
      
      }/>
      <Route path='/reviews' element={
     

        <Reviews/>
    
      
      }/>
      <Route path='/ContactUs' element={<ContactUs/>}/>
      
      <Route path='/login' element={<LoginPage/>}/>
     <Route path='/admin' element={<Admin/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/admin/addplan' element={<AddPlanForm/>}/>
      <Route path='/admin/totalplans' element={<TotalPlans/>}/>
      <Route path='/edit/:id' element={<EditPage/>} />
      <Route path='/payment' element={
      <PrivateRoute>

        <PaymentPage/>
      </PrivateRoute>
      
      } />
      <Route path='/payment2' element={
     <PrivateRoute>

        <PaymentPage2/>
        </PrivateRoute>
     
      
      } />
      <Route path='/Success' element={<Success/>} />
      <Route path='/Myplans' element={<Myplans/>} />
      </Routes>
    </>
  )
}
