import React,{useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { auth } from '../Pages/firebaseAuth';

const PrivateRoute = ({ children }: any) => {
  let [Auth, setAuth] = useState<string>('Login IN')


  useEffect(() => {
    auth.onAuthStateChanged((user) => user == null ? setAuth('Login IN') : setAuth(user.email || ''))
  }, [])

if(Auth){
  return <Navigate to='/login'/>
}

  return <div>{children}</div>;
};

export default PrivateRoute;
