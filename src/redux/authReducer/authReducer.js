import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERR, LOG_OUT } from "./actionTypes";

const initialState={
    loginLoading:false,
    loginErr:false,
    token:""
}
export const authReducer=(store=initialState, action)=>{
    switch (action.type) {
    case LOGIN_LOADING:
        return{
            ...store,
            loginLoading:true,
            loginErr:false,
        } 
    case LOGIN_ERR:
        return{
            ...store,
            loginLoading:false,
            loginErr:true,            
        }  
    case LOGIN_SUCCESS:
        return{
            ...store,
            loginErr:false,
            loginLoading:false,
            token:action.payload
        }
    case LOG_OUT:
        return{
            ...store,
            token:""
        }     

    default:
        return{...store}
}
}
