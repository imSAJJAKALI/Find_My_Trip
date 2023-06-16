import React from 'react'
import { Box, Image, Text, Input } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'


const ContactUs = () => {
  return (
    <Box>
       <Box position={"relative"}>
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-WNAUHhlGr8XnEddCuYDdKe_lXfbZkV2Y2Q&usqp=CAU' width={"100%"} height={"40vh"} />
        <Text position={"absolute"} top="50%" left={"50%"} transform="translate(-50%, -50%)" textAlign="center" fontSize={'6xl'} color={'white'}>Contact Us</Text>
      </Box>
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

export default ContactUs