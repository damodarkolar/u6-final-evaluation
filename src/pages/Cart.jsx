import React from 'react'
import {useSelector} from "react-redux"
import{useNavigate } from "react-router-dom"
export const Cart = () => {
  const {token}=useSelector(state=>state.Auth)
const navigate=useNavigate()

React.useEffect(()=>{
  if(!token){
    navigate("/login")
  }
},[token])
  return (

    <div>
cart
    </div>
  )
}
