import React, { useEffect, useState } from 'react';
import {
  Box,
  Image,
  Text,
  Center,
  Flex,
  Select,
  Spacer,
  Grid,
  InputGroup,
  InputLeftElement,
  Input,
  IconButton,
  Button,
} from '@chakra-ui/react';
// import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import DestinationCard from '../Components/DestinationCard';
import { useDispatch, useSelector } from 'react-redux';
import { destinationGetData } from '../Redux/Destination/action';
import { Loding } from './Loding';

const Destinations = () => {
  const [category, setCategory] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');
  const [isAscending, setIsAscending] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [destinationsPerPage] = useState<number>(6);
  const dispatch = useDispatch();
  const { destination } = useSelector((store: any) => store.destReducer);
  const { isLoading } = useSelector((store: any) => store.destReducer);
  

  useEffect(() => {
    destinationGetData({ dispatch, category });
  }, [category]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const handleSortOrderToggle = () => {
    setIsAscending((prev) => !prev);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Sorting destinations based on sortBy and isAscending values
  const sortedDestinations = destination.slice().sort((a: any, b: any) => {
    if (sortBy === 'name') {
      return isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    } else if (sortBy === 'rating') {
      return isAscending ? a.rating - b.rating : b.rating - a.rating;
    }
    return 0;
  });

  // Pagination
  const indexOfLastDestination = currentPage * destinationsPerPage;
  const indexOfFirstDestination = indexOfLastDestination - destinationsPerPage;
  const currentDestinations = sortedDestinations.slice(indexOfFirstDestination, indexOfLastDestination);
  const totalPages = Math.ceil(sortedDestinations.length / destinationsPerPage);

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
            <option value="">Select Category</option>
            <option value="beach">Beaches</option>
            <option value="hills-station">Hills Station</option>
            <option value="adventures">Adventures</option>
          </Select>
         
        </Flex>

        <Flex direction="row" align="center" mb="4">
          <Text fontSize="lg" color="#1071db" mr="2">
            Sort by:
          </Text>
          <Select width="180px" value={sortBy} onChange={handleSortChange}>
            <option value="name">Name</option>
            <option value="rating">Rating</option>
          </Select>
          <IconButton
            aria-label="Toggle sort order"
         
            onClick={handleSortOrderToggle}
            ml="2"
            variant="ghost"
          />
        </Flex>

        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
          {isLoading? <Loding/>: currentDestinations.map((el: any) => (
            <DestinationCard key={el.id} {...el} />
          ))}
        </Grid>

        <Flex justify="center" mt="4">
          {totalPages > 1 &&
            Array.from({ length: totalPages }).map((_, index) => (
              <Button
                key={index}
                variant={currentPage === index + 1 ? 'solid' : 'outline'}
                colorScheme="blue"
                size="sm"
                mx="1"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Destinations;
