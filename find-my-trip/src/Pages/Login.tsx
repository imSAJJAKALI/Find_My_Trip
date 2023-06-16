import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Text,
  Link,
  FormControl,
  FormHelperText,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiUser, FiLock } from 'react-icons/fi';
import { FaPlane } from 'react-icons/fa';

const LoginPage = () => {
  const bg = useColorModeValue('white', 'gray.700');
  const color = useColorModeValue('black', 'white');

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" bg="gray.100"  bgImage="url('https://hblimg.mmtcdn.com/content/hubble/img/singapore/mmt/destination/m_singapore-landscape_l_400_640.jpg')">
      <Box px={20} py={12} maxW="md" borderWidth={1} borderRadius="lg" bg={bg} color={color}>
        <Flex direction="column" align="center" mb={8}>
          <Box as={FaPlane} size="80px" color="blue.500" />
          <Heading as="h1" size="xl" textAlign="center" mt={4} mb={8}>
            Traveler Login
          </Heading>
        </Flex>
        <form>
          <FormControl id="email" mb={6}>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<FiUser />} />
              <Input type="email" placeholder="Email" />
            </InputGroup>
          </FormControl>
          <FormControl id="password" mb={8}>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<FiLock />} />
              <Input type="password" placeholder="Password" />
            </InputGroup>
            <FormHelperText textAlign="right">
              <Link color="blue.500" href="#">
                Forgot password?
              </Link>
            </FormHelperText>
          </FormControl>
          <Button colorScheme="blue" size="lg" width="full">
            Sign In
          </Button>
        </form>
        <Flex direction="column" mt={8}>
          <Text textAlign="center">Don't have an account?</Text>
          <Link color="blue.500" href="#">
            Sign Up
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default LoginPage;
