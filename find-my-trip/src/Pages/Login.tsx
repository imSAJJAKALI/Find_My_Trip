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
} from '@chakra-ui/react';
import { FiUser, FiLock } from 'react-icons/fi';
import { FaPlane } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseAuth';
import { useDispatch, useSelector } from 'react-redux';
import { LoginHandling } from '../Redux/Authentication/action';

const LoginPage = () => {
  const dispatch =useDispatch()
  const [email,setEmail]=useState<string>("")
  const [password,setPassword]=useState<string>("")
  const {isLoading,isError,isSuccess} =useSelector((store:any)=>store.authReducer)
const navigate=useNavigate()
  console.log(isLoading)
  // console.log(isSuccess)
  // console.log(isError)

  const handleLogin=(e:React.MouseEvent<HTMLButtonElement> )=>{
      
    LoginHandling({dispatch,email,password})

    
  }

  if(isSuccess){
    navigate('/')
  }

  const bg = useColorModeValue('white', 'gray.700');
  const color = useColorModeValue('black', 'white');

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
           Login
          </Heading>
        </Flex>
        <form>
          <FormControl id="email" mb={6}>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<FiUser />} />
              <Input type="email" placeholder="Email" 
              onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          <FormControl id="password" mb={8}>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<FiLock />} />
              <Input type="password" placeholder="Password" 
              onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}
              />
            </InputGroup>
            <FormHelperText textAlign="right">
              <Link color="blue.500" href="#">
                Forgot password?
              </Link>
            </FormHelperText>
          </FormControl>
          <Button colorScheme="blue" size="lg" width="full"
          onClick={handleLogin}
          >
            Sign In
          </Button>
        </form>
        <Flex direction="column" mt={8}>
          <Text textAlign="center">Don't have an account?</Text>
          <Center>

          <Link color="blue.500" href="#">
            <NavLink to="/signup">

            Sign Up
            </NavLink>
          </Link>
          </Center>
        </Flex>
      </Box>
    </Box>
  );
};

export default LoginPage;
