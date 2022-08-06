import React from 'react'
import { Box } from '@chakra-ui/react'
import {Link } from "react-router-dom"
import {useSelector} from "react-redux"
import { handleLogOut } from '../redux/authReducer/actions'
import {useDispatch} from "react-redux"
export const Navbar = () => {
  const dispatch=useDispatch()

    const {token }=useSelector(state=>state.Auth)
    const handleLogOutClick=()=>{
       dispatch(handleLogOut())
    }
    
  return (
    <div>
        <div style={{display:"flex", justifyContent:"space-between", boxSizing:"border-box", padding:"20px", backgroundColor:"orange", color:"white", borderRadius:"10px"}}  >
            <Link to="/"> Home</Link>
            {!!token? (<button onClick={handleLogOutClick}>Log out</button>): (<Link to="/login">Login</Link>)}
            <Link to="/cart">Cart</Link>            
        </div>
    </div>
  )
}
