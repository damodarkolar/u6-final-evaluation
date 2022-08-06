import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { ProductsPageCard } from '../components/ProductsPageCard';
import {useSelector} from "react-redux"
import{useNavigate } from "react-router-dom"
export const Home = () => {
const [products, setProducts]=useState([]);
const {token}=useSelector(state=>state.Auth)
const navigate=useNavigate()

React.useEffect(()=>{
  if(!token){
    navigate("/login")
  }
},[token])
React.useEffect(() => {
  fetch(`http://localhost:8080/products`)
  .then(res=>res.json())
  .then(data=>setProducts(data))
  .catch(err=>console.log(err))
}, [])
console.log(products)
  return (
    <div style={{display:"grid", gridTemplateColumns:"auto auto auto auto", gap:"10px"}}>
      {products?.map(ele=> <ProductsPageCard product={ele}/>)}
    </div>
  )
}
