import React from "react"
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { handleLoginFetch } from '../redux/authReducer/actions';
  const loginData={
    email:"",
    password:""
  }
  export const Login=()=>{

    const [userDetails, setUserDetails]=useState(loginData)
    const {email, password}=userDetails
    const dispatch=useDispatch()
    const {token}=useSelector(state=>state.Auth)
    const navigate=useNavigate()

    React.useEffect(()=>{
      if(!!token){
        navigate("/")
      }
    },[token])

    const handleOnChange=(e)=>{
        const {name, value}=e.target
        setUserDetails(prev=>({...prev,[name]:value}))
        console.log(userDetails)
    }

    const handleOnclick=()=>{
        dispatch(handleLoginFetch(userDetails))
        setUserDetails(loginData)
        

    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input name="email"  value={email} type="email" onChange={handleOnChange} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input onChange={handleOnChange} name="password"  value={password} type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Button onClick={handleOnclick}
                  bg={'blue.400'}
                  color={'black'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }