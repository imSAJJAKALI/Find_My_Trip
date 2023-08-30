import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { AnyAction } from "redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  DESTINATION_DATA_ERROR,
  DESTINATION_DATA_LOADING,
  DESTINATION_DATA_SUCCESS,
  PAYMENT_DATA_SUCCESS,
} from "./actionType";

const url = 'http://localhost:9090/destination';

export interface DestinationType {
  id?: any;
  image: string;
  name: string;
  details: string;
  days: string;
  stars: number;
  category: string;
  price: number;
}

// Define action types
type DispatchType = Dispatch<AnyAction>;

export const destinationGetData = async( {dispatch,category}:{dispatch:any,category?:string})  => {
  console.log(category)
  dispatch({ type: DESTINATION_DATA_LOADING });
  try {
    if(category){

      const response: AxiosResponse<DestinationType[]> = await axios.get(`${url}?category=${category}`);
      dispatch({ type: DESTINATION_DATA_SUCCESS, payload: response.data });
    }else if(!category){
      const response: AxiosResponse<DestinationType[]> = await axios.get(url);
      dispatch({ type: DESTINATION_DATA_SUCCESS, payload: response.data });
    }
  } catch (error) {
    dispatch({ type: DESTINATION_DATA_ERROR });
  }
};

export const paymentfun :any =  (obj: any) => (dispatch: any) =>  {
  dispatch({ type: PAYMENT_DATA_SUCCESS, payload: obj }) 
};
