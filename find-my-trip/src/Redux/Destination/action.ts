import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { AnyAction } from "redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  DESTINATION_DATA_ERROR,
  DESTINATION_DATA_LOADING,
  DESTINATION_DATA_SUCCESS,
} from "./actionType";

const url = 'http://localhost:9090/destination';

export interface DestinationType {
  id?: number;
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

export const destinationGetData = () => async (dispatch: DispatchType) => {
  dispatch({ type: DESTINATION_DATA_LOADING });
  try {
    const response: AxiosResponse<DestinationType[]> = await axios.get(url);
    dispatch({ type: DESTINATION_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: DESTINATION_DATA_ERROR });
  }
};
