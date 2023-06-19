import { useState, useEffect } from 'react';
import { Box, Text, useToast, Button, Spinner, Center, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Pay_suc from "../Payment_Successful.gif"

const Success = (): JSX.Element => {
  const [spin, setSpin]=useState<boolean>(false)
  const  Navigate= useNavigate()

  setTimeout(()=>{
    setSpin(true)
    
    
  },2000)

  setTimeout(()=>{
    // setSpin(false)
    Navigate("/")
  },4000)
 
  
  return (
    <>
    <Center height={'100vh'} zIndex={5}>
    <Box >
      
      {spin?<Image src={Pay_suc} width={"60%"} margin={"auto"} />:<Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  />}
    </Box>
    </Center>
    
    </>
   
  );
};

export default Success;
