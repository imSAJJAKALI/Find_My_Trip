import React, { useEffect } from 'react';
import { Box, Image, Text, Center, Flex, Select, Spacer, Grid } from '@chakra-ui/react';
import DestinationCard from '../Components/DestinationCard';
import { useDispatch } from 'react-redux';
import { destinationGetData } from '../Redux/Destination/action';

const Destinations = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(destinationGetData());
  }, []);

  return (
    <div>
      <Box position="relative">
        <Image
          src="https://1.bp.blogspot.com/-nePYI_qummY/YEymIP1AJbI/AAAAAAAABt4/pxSpjSikukE2S6CpvXSE3TrZJvd3hyQQgCLcBGAsYHQ/s1498/beach-1824855_1920.jpg"
          width="100vw"
          height="40vh"
        />
        <Text
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          fontSize="6xl"
          color="white"
        >
          Destinations
        </Text>
      </Box>
      <Box margin="auto" marginTop="50px" width="90%" border="1px" borderColor="red">
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="3xl" color="#1071db">
            <b>Popular Destinations</b>
          </Text>
          <Select width="130px">
            <option value="">Beaches</option>
          </Select>
        </Flex>

        <Grid templateColumns="repeat(4,1fr)" gap={6}>
          <DestinationCard />
        </Grid>
      </Box>
    </div>
  );
};

export default Destinations;
