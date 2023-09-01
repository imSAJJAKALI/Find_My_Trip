import { Box, Button, Flex, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { DestinationType, paymentfun } from '../Redux/Destination/action'
import Popup from '../Pages/BookingCard/Bookpop'
import { useDispatch } from 'react-redux'


const DestinationCard = ({id,image,name,days,price,stars,category,details}:DestinationType) => {
  const dispatch=useDispatch()
   

  const handleClick = (id:any) => {
    let obj = {
      id, name, days, price, stars, category, details
    };
    return dispatch(paymentfun(obj))
  };


  return (
    <Box
  boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
  borderRadius="8px"
  overflow="hidden"
  border={"2px"}
  borderColor={"#fb9216"}
>
  <Image src={image} height={"200px"} width={'100%'} />
  <Flex p="16px">
    <Text fontSize="24px" fontWeight="bold">
      {name}
    </Text>
  </Flex>
  <Flex p="16px">
    <Text fontSize="16px" mr="auto" fontWeight="bold">
     {days}
    </Text>
   
    <Text fontSize="16px" fontWeight="bold">
      ⭐⭐⭐⭐⭐
    </Text>
   
  </Flex>

  <Flex p="16px" alignItems="center">
    <Text fontSize="20px" fontWeight="bold">
      Price: ₹{price}
    </Text>
    <Spacer />
   
    <Button colorScheme="teal" size="md" onClick={()=>handleClick(id)}>
      <Popup text="Book Now" />
    </Button>
    
    
  </Flex>
  <Text fontSize="14px" color="gray.500" textAlign="center" mt="8px">
  Unforgettable Journeys Await!
</Text>
</Box>
  )
}

export default DestinationCard