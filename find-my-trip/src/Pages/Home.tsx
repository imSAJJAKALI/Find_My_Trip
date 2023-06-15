import React from 'react'
import { Box,Image,Text,Flex,Button, Spacer,
Center,VStack,HStack
} from '@chakra-ui/react'

const containerStyle = {
  backgroundImage: "url('https://w0.peakpx.com/wallpaper/308/219/HD-wallpaper-nice-view-beauty-lake.jpg')",
};

const Home = () => {

  return (
    <div>
    <Box position="relative">
      <Image src='https://w0.peakpx.com/wallpaper/308/219/HD-wallpaper-nice-view-beauty-lake.jpg' width="100%" height="80vh" />
      <Box position="absolute" top="15%" left={0} right={0}>
        <Center>
          <VStack spacing={4}>
            <Text>Budget Travel Rich Life</Text>
            <Text>Injoy The Best Moments <br /> With The Outdoor Life</Text>
           
            <HStack spacing={4}>
              <Button>Plan a Trip {">"}</Button>
              <Button>Learn More</Button>
            </HStack>
          </VStack>
        </Center>
      </Box>
    </Box>
    </div>
  )
}

export default Home