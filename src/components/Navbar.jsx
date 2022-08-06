import React from 'react'
import { Box } from '@chakra-ui/react'
import {Link } from "react-router-dom"
export const Navbar = () => {


    const token=1
    const handleLogOut=()=>{
        console.log("logout")
    }
  return (
    <div>
        <Box display={"flex"} padding="20px" justifyContent="space-between"  boxSizing="border-box" bg='tomato' w='100%' p={4} color='white'>
            <Link to="/"> Home</Link>
            {!!token? (<button onClick={handleLogOut}>Log out</button>): (<Link>Login</Link>)}
            <Link to="/cart">Cart</Link>            
        </Box>
    </div>
  )
}
