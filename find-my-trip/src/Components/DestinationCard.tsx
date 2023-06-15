import { Box, Button, Flex, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const DestinationCard = () => {
  return (
    <Box
  boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
  borderRadius="8px"
  overflow="hidden"
  border={"2px"}
  borderColor={"#fb9216"}
>
  <Image src="https://hblimg.mmtcdn.com/content/hubble/img/destimgjun2022/mmt/activities/m_Goa_l_686_915.jpg" />
  <Flex p="16px">
    <Text fontSize="24px" fontWeight="bold">
      Goa
    </Text>
  </Flex>
  <Flex p="16px">
    <Text fontSize="16px" mr="auto" fontWeight="bold">
      1 to 3 days
    </Text>
    <Text fontSize="16px" fontWeight="bold">
      * * * * *
    </Text>
  </Flex>
  <Flex p="16px" alignItems="center">
    <Text fontSize="20px" fontWeight="bold">
      Price: ₹20,000
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