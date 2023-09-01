import { Box, Flex, Image, Spacer, Text, Textarea, Input, Button, Center } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DestinationType } from '../Redux/Destination/action';

const url = 'https://purringroot-serverr.onrender.com/destination';

const EditPage = () => {
  const [singleData, setSingleData] = useState<DestinationType | null>(null);
  const { id } = useParams<{ id: string }>();

  console.log(singleData);

  const getData = () => {
    axios.get<DestinationType>(`${url}/${id}`).then((res) => setSingleData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>| React.ChangeEvent<HTMLTextAreaElement>)=>{
      const {value,name}=e.target;
      
      setSingleData((prev:any)=>({...prev,[name]:value}))

  }

  const handleSubmit = () => {
      axios.patch(`${url}/${id}`,singleData).then((res)=>alert('path successfully...'))
  };

  return (
    <div>
      <Box position="relative" backgroundColor="#BA90C6" height="180px">
        <Text
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          fontSize={{ base: '4xl', md: '6xl' }}
          color="white"
        >
          Edit Plans
        </Text>
      </Box>
      <Flex justifyContent="center" alignItems="center" mt={8}>
        {singleData && (
          <Box
            boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
            borderRadius="8px"
            overflow="hidden"
            border="2px"
            borderColor="#fb9216"
            width={['80%', '60%', '40%']}
          >
            <Box >
              <Image src={singleData.image} height="200px" width="100%" objectFit="cover" />
              <Center mt={5}>

              <Input type="text" placeholder="Enter Image Url" name='image' value={singleData.image}  onChange={handleChange} width="93%" />
              </Center>
            </Box>
            <Flex p="16px" alignItems="center" justifyContent="space-between">
              <Text fontSize="24px" fontWeight="bold" mr={4}>
                {singleData.name}
              </Text>
              <Input type="text" placeholder="Enter Name" value={singleData.name} name='name' onChange={handleChange} width="300px" />
            </Flex>
            <Flex p="16px" alignItems="center" justifyContent="space-between">
              <Text fontSize="20px" fontWeight="bold" mr={4}>
                {singleData.days}
              </Text>
              <Input type="text" placeholder="Enter Days" value={singleData.days} name='days' onChange={handleChange} width="300px" />
            </Flex>
            <Flex p="16px" alignItems="center" justifyContent="space-between">
              <Text fontSize="20px" fontWeight="bold" mr={4}>
                Price: ₹{singleData.price}
              </Text>
              <Input type="text" placeholder="Enter Price" value={singleData.price} name='price' onChange={handleChange} width="300px" />
            </Flex>
            <Flex p="16px" alignItems="center" justifyContent="space-between">
              <Text fontSize="20px" fontWeight="bold" mr={4}>
                Details:
              </Text>
              <Textarea name="details" placeholder="Enter details" value={singleData.details}  onChange={handleChange} width="100%" resize="vertical" p={4} />
            </Flex>
            <Flex p="16px" alignItems="center" justifyContent="space-between">
              <Button colorScheme="blue" onClick={handleSubmit}>
                Update Changes
              </Button>
            </Flex>
          </Box>
        )}
      </Flex>
    </div>
  );
};

export default EditPage;
