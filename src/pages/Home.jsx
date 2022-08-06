import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { ProductsPageCard } from '../components/ProductsPageCard';
export const Home = () => {
const [products, setProducts]=useState([]);


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
