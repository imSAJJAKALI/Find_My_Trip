import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { reducer as destReducer} from "./Destination/reducer"
import { reducer as authReducer } from "./Authentication/reducer"
import thunk from "redux-thunk"


const rootReducer=combineReducers({destReducer,authReducer})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
