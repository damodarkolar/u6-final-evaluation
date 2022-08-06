import { compose, combineReducers,  legacy_createStore as createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {authReducer} from "./authReducer/authReducer"
const rootReducers=combineReducers({
Auth:authReducer
})

export const store=createStore(rootReducers, compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__  && window.__REDUX_DEVTOOLS_EXTENSION__()))