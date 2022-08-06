import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_ERR, LOG_OUT } from "./actionTypes";

export const handleLoginLoading=()=>{
    return {
        type:LOGIN_LOADING
    }
}
export const handleLoginErr=()=>{
    return {
        type:LOGIN_ERR
    }
}

export const handleLoginSuccess=(payload)=>{
    return {
        type:LOGIN_SUCCESS,
        payload
    }
}
export const handleLogOut=()=>{
    return{
        type:LOG_OUT
    }

}


export const handleLoginFetch=(data)=>(dispatch)=>{
    dispatch(handleLoginLoading)
    fetch(`https://reqres.in/api/login`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(res=>res.json())
    .then(data=>dispatch(handleLoginSuccess(data.token)))
    .catch(err=>dispatch(handleLoginErr))
}