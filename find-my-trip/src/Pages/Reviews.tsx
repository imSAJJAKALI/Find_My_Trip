import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react';
import Card from "./BookingCard/ReviewCard"
import Download from "./Download_card.png"

const Reviews = () => {
  return (
    <Box>
      <Box position={"relative"}>
        <Image src='https://media.licdn.com/dms/image/D4E22AQGzpWE1yKtY4Q/feedshare-shrink_800/0/1685433301177?e=1689206400&v=beta&t=CpZ2qa5tw5sesaRmt_GM_lxxuQNOa7GCn7aQzk2yJgk' width={"100%"} height={"40vh"} />
        <Text position={"absolute"} top="50%" left={"50%"} transform="translate(-50%, -50%)" textAlign="center" fontSize={'6xl'} color={'white'}>Reviews</Text>
      </Box>
      <Box width="90%" margin="auto">
        <Card/>
      </Box>
      <Box width="90%" margin="auto" >
        <img src={Download} alt="" />
      </Box>
    </Box>
  )
}

export default Reviews