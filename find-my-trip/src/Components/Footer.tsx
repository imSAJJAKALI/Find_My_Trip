import React from 'react';
import { Box, VStack, HStack, UnorderedList, ListItem, List, Input, Button, SimpleGrid } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="#1071db" color="white" p={8} display="flex" flexDirection={['column', 'column', 'row']} alignItems={['center', 'center', 'flex-start']} justifyContent="space-between" marginTop="20px" marginBottom="-50px">
      <VStack align={['center', 'center', 'flex-start']} mb={[8, 8, 0]} mr={[0, 0, 8]}>
        <img src="https://github.com/imSAJJAKALI/purring-root-8/assets/112471219/be02d43f-211f-4200-8208-a8f4bb0271eb" alt="" width="250px" />
        <h5>REAL DESIGNS BY REAL ARTISTS</h5>
        <h5>FOR REAL PEOPLE</h5>
      </VStack>

      <HStack spacing={40} flexWrap={['wrap', 'wrap', 'nowrap']}>
        <VStack align="flex-start">
          <h5>EXPLORE</h5>
          <List spacing={2}>
            <ListItem>Destinations</ListItem>
            <ListItem>Hotels</ListItem>
            <ListItem>Flights</ListItem>
            <ListItem>Tours</ListItem>
            <ListItem>Car Rentals</ListItem>
          </List>
        </VStack>

        <VStack align="flex-start">
          <h5>PLAN</h5>
          <List spacing={2}>
            <ListItem>Travel Guides</ListItem>
            <ListItem>Trip Planner</ListItem>
            <ListItem>Packing Tips</ListItem>
            <ListItem>Budgeting</ListItem>
            <ListItem>Travel Insurance</ListItem>
          </List>
        </VStack>

        <VStack align="flex-start">
          <h5>SOCIAL</h5>
          <List spacing={2}>
            <ListItem>Instagram</ListItem>
            <ListItem>Facebook</ListItem>
            <ListItem>Twitter</ListItem>
            <ListItem>LinkedIn</ListItem>
            <ListItem>Pinterest</ListItem>
          </List>
        </VStack>
      </HStack>

      <HStack alignItems="center" flexWrap={['wrap', 'wrap', 'nowrap']}>
        <Input borderRadius={20} placeholder="EMAIL ADDRESS" mb={[4, 4, 0]} />
        <Button colorScheme="orange" borderRadius={20}>
          Send
        </Button>
      </HStack>
    </Box>
  );
}

export default Footer;
