import { DestinationType } from "./action";
import { DESTINATION_DATA_ERROR, DESTINATION_DATA_LOADING, DESTINATION_DATA_SUCCESS, PAYMENT_DATA_SUCCESS } from "./actionType";

export interface InitialType {
  isLoading: boolean;
  isError: boolean;
  destination: DestinationType[];
  paymentData: DestinationType[];
}

const initialData: InitialType = {
  isLoading: false,
  isError: false,
  destination: [],
  paymentData:[],
}

export const reducer = (
    state = initialData,
    { type, payload }: { type: string; payload: DestinationType[] }
  ): InitialType => {
    switch (type) {
      case DESTINATION_DATA_LOADING: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case DESTINATION_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          destination: payload,
        };
      }
      case PAYMENT_DATA_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          paymentData: payload,
        };
      }
      case DESTINATION_DATA_ERROR: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }
      default: {
        return state;
      }
    }
  };
  