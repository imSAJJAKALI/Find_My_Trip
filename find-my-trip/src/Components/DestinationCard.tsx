import { Box, Button, Flex, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { DestinationType } from '../Redux/Destination/action'

const DestinationCard = ({id,image,name,days,price,stars,category,details}:DestinationType) => {
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
      * * * * *
    </Text>
  </Flex>
  <Flex p="16px" alignItems="center">
    <Text fontSize="20px" fontWeight="bold">
      Price: ₹{price}
    </Text>
    <Spacer />
    <Button colorScheme="teal" size="md">
      Book Now
    </Button>
  </Flex>
</Box>
  )
}

export default DestinationCard