import React, { useState } from 'react'
import { useParams } from "react-router-dom"
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import{useNavigate } from "react-router-dom"
export const ProductDetails = () => {
    const {token}=useSelector(state=>state.Auth)
const navigate=useNavigate()
const [count, setCount]=useState(0)

React.useEffect(()=>{
  if(!token){
    navigate("/login")
  }
},[token])
    const {id}=useParams()
    const [product, setProduct]=useState({})

    React.useEffect(()=>{
        fetch(`http://localhost:8080/products/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
        .catch(err=>console.log(err))
    },[])

  return (
    <div style={{display:"flex", flexDirection:"column"}}>
        <div>
            <img style={{width:"50%"}} src={product.image} alt="" />            
        </div>
        <div style={{backgroundColor:"teal", width:"50%", fontSize:"30px", color:"white", padding: "20px", marginLeft:"360px"}}>
            <div>
                <h3>{product.title}</h3>
            </div>
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <p>{product.brand}</p>
                <p>{product.category}</p>
            </div >
            <div style={{display:"flex", justifyContent:"space-around"}}>
            <h5>₹ {product.price} /-</h5>
                <Link to="/">Back</Link>
            </div >    
            <div>
                {
                    !!count? (<><button>-</button>{count}<button>+</button><button onClick={()=>{setCount(()=>0)}}>Remove</button></>):(<button onClick={()=>{setCount(prev=>prev+1)}}>Add to Cart</button>)
                }
                
            </div>            
        </div>        
    </div>
  )
}
// "id": 40,
//         "brand": "Tied Ribbons",
//         "title": "Set of 3 Owl",
//         "image": "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/12/15/777efffd-ccf5-42c9-b20f-5630d360b57f1576371164101-1.jpg",
//         "price": 1299,
//         "category": "homedecor"