import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Text,
  Link,
  FormControl,
  FormHelperText,
  useColorModeValue,
  Center,
  useToast,
} from '@chakra-ui/react';
import { FiUser, FiLock } from 'react-icons/fi';
import { FaPlane } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from './firebaseAuth'
import { SignupHandling } from '../Redux/Authentication/action';
import { useDispatch, useSelector } from 'react-redux';
const SignupPage = () => {
  const bg = useColorModeValue('white', 'gray.700');
  const color = useColorModeValue('black', 'white');
  
  const dispatch=useDispatch()

  const {isLoading,isError,isSuccess}=useSelector((store:any)=>store.authReducer)

  const [email,setEmail]=useState<string>("")
  const [password,setPassword]=useState<string>("")
  const toast=useToast()

 

  const handleSubmit=(e:React.MouseEvent<HTMLButtonElement>)=>{
  
   if(email=="" && password==""){
    toast({
      title: ` Please fill out all required fields.`,
      position: "top",
      isClosable: true,
    })
   }else if(email=="" || password==""){
    toast({
      title: ` Please fill out required fields.`,
      position: "top",
      isClosable: true,
    })
   }else{
    toast({
      title: ` Account created Successfully.`,
      status:"success",
      position: "top",
      isClosable: true,
      duration:1000
    })
    SignupHandling({dispatch,email,password})
     setEmail("")
     setPassword("")
   }
  }

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.100"
      bgImage="linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://hblimg.mmtcdn.com/content/hubble/img/singapore/mmt/destination/m_singapore-landscape_l_400_640.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Box px={20} py={1} maxW="md" borderWidth={1} borderRadius="lg" bg={bg} color={color}>
        <Flex direction="column" align="center" mb={8}>
          <Box as={FaPlane} size="40px" color="blue.500" />
          <Heading as="h1" size="xl" textAlign="center" mt={4} mb={8}>
            Signup
          </Heading>
        </Flex>
        <form >
          <FormControl id="email" mb={6}>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<FiUser />} />
              <Input type="email" placeholder="Email or Phone-Number" 
              onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          <FormControl id="password" mb={6}>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<FiLock />} />
              <Input type="password" placeholder="Password" 
              onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          
          <Button colorScheme="blue" size="lg" width="full" onClick={handleSubmit}>
            Sign Up
          </Button>
        </form>
        <Flex direction="column" mt={8}>
          <Text textAlign="center">Already have an account?</Text>
          <Center>

          <Link color="blue.500" href="#">
            <NavLink to="/login">
            Log In
            </NavLink>
          </Link>
          </Center>
        </Flex>
      </Box>
    </Box>
  );
};

export default SignupPage;
