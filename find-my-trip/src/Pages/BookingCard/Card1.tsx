import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
    ButtonGroup 
  } from '@chakra-ui/react';
import Popup from './Bookpop';
  
//   const IMAGE =
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS8Xj_5Ic5qDBl_6n_uHbUvUOu9nv0wIR8_Q&usqp=CAU';
  
  export default function ProductSimple({img, Price, Price1, Brand, city}:any) {
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${img})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={img}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {Brand}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {city}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
              {Price}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                {Price1}
              </Text>
            </Stack>
          </Stack>
          <br />
          <Button colorScheme="teal">
             Book Now
          </Button>
        </Box>
        
      </Center>
    );
  }