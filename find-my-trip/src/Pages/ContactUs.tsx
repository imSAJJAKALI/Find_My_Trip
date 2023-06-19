
import {
  Image,
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
 
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,

  
} from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import React from 'react'
import {AiOutlineMail} from "react-icons/ai"

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import DownloadApp from '../Components/DownloadApp';
import Popup from './BookingCard/Bookpop';
// import PaymentPage from './PaymentPage';



const ContactUs = () => {
  return (
    <Box >
       
      <Box>
        <Box>
          <FormControl>
             <FormLabel>Your Name</FormLabel>
                 <Input type='text' />
              <FormLabel>Email address</FormLabel>
                 <Input type='email' />
                 <FormLabel>Your Phone Number</FormLabel>
                 <Input type='number' />
                 <FormLabel>Your Feedback</FormLabel>
                 <Input type='text' />
              <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
        </Box>
        
      </Box>
      
    </Box>
  )
}


export default function contact() {

  const handleClick=()=>{
    alert("Thanks for the feedback")
  }

  return (
    <Box position={"relative"} bg="#9DC4FB" >
       <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WNAUHhlGr8XnEddCuYDdKe_lXfbZkV2Y2Q&usqp=CAU' width={"100%"} height={"40vh"} />
        <Text position={"absolute"} top="8%" left={"50%"} transform="translate(-50%, -50%)" textAlign="center" fontSize={'6xl'} color={'white'}>Contact Us</Text>
    <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden" style={{padding:"50px"}}>
      <Flex>
        <Box
          bg="gray"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                        +91-988888888
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                        Admin@findmytrip.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                        Bengaluru,Karnataka, India
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                     
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                     
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                     
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0D74FF">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" placeholder="Enter your Name"  />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<AiOutlineMail color="gray.800"/>}
                            
                          />
                          <Input type="text" size="md" placeholder="Enter your email address" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="Enter your message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          onClick={handleClick}
                          _hover={{color:"black", bg:"#115dc0"}}>
                           
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
     <Box>
      
      <Popup/>
     </Box>
    <Box width="90%" margin="auto" marginBottom="-20px"  >
        <DownloadApp/>
      </Box>
    </Box>
  );
}