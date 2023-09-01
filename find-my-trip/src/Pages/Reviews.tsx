import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react';
import Card from "./BookingCard/ReviewCard"

import DownloadApp from '../Components/DownloadApp';

const Reviews = () => {
  return (
    <Box>
      <Box position={"relative"}>
        <Image src='https://i.pinimg.com/474x/43/f4/1a/43f41accb2871c580fb630e0e8a484e8--cover-picture-cover-pics.jpg' width={"100%"} height={"40vh"} />
        <Text position={"absolute"} top="50%" left={"50%"} transform="translate(-50%, -50%)" textAlign="center" fontSize={'6xl'} color={'white'}>Reviews</Text>
      </Box>
      <Box width="90%" margin="auto">
        <Card/>
      </Box>
      <Box width="90%" margin="auto" >
       <DownloadApp/>
      </Box>
    </Box>
  )
}

export default Reviews