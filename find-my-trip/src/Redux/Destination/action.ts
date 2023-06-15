import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { DESTINATION_DATA_ERROR, DESTINATION_DATA_LOADING, DESTINATION_DATA_SUCCESS } from "./actionType";
import { AnyAction } from "redux";

const url = 'http://localhost:9090/destination';

export const destinationGetData = () => async (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: DESTINATION_DATA_LOADING });
  try {
    const response: AxiosResponse<string|number[]> = await axios.get(url);
    dispatch({ type: DESTINATION_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: DESTINATION_DATA_ERROR });
  }
};
