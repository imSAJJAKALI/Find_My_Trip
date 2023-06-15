import { DESTINATION_DATA_ERROR, DESTINATION_DATA_LOADING, DESTINATION_DATA_SUCCESS } from "./actionType"

interface initialType{
    isLoading:boolean;
    isError:boolean;
    destination:string[];
}

const initialData:initialType={
    isLoading:false,
    isError:false,
    destination:[]
}

export const reducer=(state=initialData,action:any)=>{
    switch(action.type){
       case DESTINATION_DATA_LOADING:{
        return {
            ...state,
            isLoading:true
        }
       }
       case DESTINATION_DATA_SUCCESS:{
        return {
            ...state,
            isLoading:false,
            destination:action.payload
        }
       }
       case DESTINATION_DATA_ERROR:{
        return {
            ...state,
            isLoading:false,
            isError:true
        }
       }
       default:{
        return state
       }
    }

}

