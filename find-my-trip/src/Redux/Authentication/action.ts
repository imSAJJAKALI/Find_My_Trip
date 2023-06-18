import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth"
import { auth } from "../../Pages/firebaseAuth"
import { LOGINLOADING, LOGINSFAILURE, LOGINSUCCESS } from "./actionType"


export const LoginHandling=async({dispatch,email,password}:{dispatch:any,email:string,password:string})=>{
dispatch({type:LOGINLOADING})
try {

    await signInWithEmailAndPassword(auth,email,password).then((res)=>dispatch({type:LOGINSUCCESS}))
    
} catch (error) {
    dispatch({type:LOGINSFAILURE})
}
}
export const SignupHandling=async({dispatch,email,password}:{dispatch:any,email:string,password:string})=>{
dispatch({type:LOGINLOADING})
try {

    await createUserWithEmailAndPassword(auth,email,password).then((res)=>dispatch({type:LOGINSUCCESS}))
    
} catch (error) {
    dispatch({type:LOGINSFAILURE})
}

  
    
}