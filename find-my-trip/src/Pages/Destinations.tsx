import React, { useEffect, useState } from 'react';
import { Box, Image, Text, Center, Flex, Select, Spacer, Grid } from '@chakra-ui/react';
import DestinationCard from '../Components/DestinationCard';
import { useDispatch, useSelector } from 'react-redux';
import { destinationGetData } from '../Redux/Destination/action';

const Destinations = () => {
  const [category, setCategory] = useState<string>('beach');
  const dispatch = useDispatch();
  const { destination } = useSelector((store: any) => store.destReducer);

  useEffect(() => {
    destinationGetData({ dispatch, category });
  }, [category]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setCategory(e.target.value);
  };

  return (
    <Box>
      <Box position="relative">
        <Image
          src="https://1.bp.blogspot.com/-nePYI_qummY/YEymIP1AJbI/AAAAAAAABt4/pxSpjSikukE2S6CpvXSE3TrZJvd3hyQQgCLcBGAsYHQ/s1498/beach-1824855_1920.jpg"
          width="100%"
          maxH="40vh"
          objectFit="cover"
        />
        <Text
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          fontSize={{ base: '4xl', md: '6xl' }}
          color="white"
        >
          Destinations
        </Text>
      </Box>
      <Box margin="auto" mt={{ base: '4', md: '8' }} px={{ base: '4', md: '8' }} maxWidth="90%">
        <Flex direction={{ base: 'column', md: 'row' }} align="center" mb={{ base: '4', md: '8' }}>
          <Text fontSize={{ base: '2xl', md: '3xl' }} color="#1071db" mb={{ base: '4', md: '0' }}>
            <b>Popular Destinations</b>
          </Text>
          <Spacer />
          <Select width={{ base: '100%', md: '130px' }} mt={{ base: '4', md: '0' }} onChange={handleChange}>
            <option value="beach">Beaches</option>
            <option value="hills-station">Hills Station</option>
            <option value="adventures">Adventures</option>
          </Select>
        </Flex>

        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
          {destination?.map((el: any) => (
            <DestinationCard key={el.id} {...el} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Destinations;
