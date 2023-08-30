import React,{useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import { Navigate,useLocation } from 'react-router-dom';
import { auth } from '../Pages/firebaseAuth';


const PrivateRoute = ({ children }: any) => {
  let location=useLocation()
  const {isAuth} =useSelector((store:any)=>store.authReducer)

  if(!isAuth){
    return <Navigate state={location.pathname} to={"/login"} />
  }
  

  return <div>{children}</div>;
};

export default PrivateRoute;
