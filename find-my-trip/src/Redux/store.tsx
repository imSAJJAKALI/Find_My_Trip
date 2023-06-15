import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { reducer as destReducer} from "./Destination/reducer"
import thunk from "redux-thunk"


const rootReducer=combineReducers({destReducer})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
