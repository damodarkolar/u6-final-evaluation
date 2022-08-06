import React from 'react'
import { Link } from "react-router-dom"
export const ProductsPageCard = (props) => {
    const {id, image, price, title}=props.product
  return (
    <div style={{backgroundColor:"GrayText", borderRadius:"10px", color:"white"}}>
        <div>
            <img src={image} alt="" />
        </div>
        <div>
            <h2>{title}</h2>
        </div>
        <div>
            <h5>₹ {price} /-</h5>
            <Link to={`/productDetails/${id}`}>View more</Link>
        </div>
    </div>
  )
}
