import { Box,Button, Center ,Flex} from '@chakra-ui/react'
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { destinationGetData } from '../Redux/Destination/action'
import { Link } from 'react-router-dom'

const Admin = () => {
  const dispatch=useDispatch()
  const {destination}=useSelector((store:any)=>store.destReducer)
  console.log(destination)

  useEffect(()=>{
destinationGetData({dispatch})
  },[])

  return (
    

<Box height="100vh" zIndex="10">
  <Flex
 
    direction={{ base: 'column', md: 'row' }}
    justify="space-evenly"
   
    p={10}
  >
    <Button
    mt={5}
      width={{ base: '100%', md: 'auto' }}
      mb={{ base: 4, md: 0 }}
      p={{ base: '30px', md: '70px' }}
      bg={'#A0C49D'}
    >
      <Link to={'/admin/totalplans'}>
      
      Total Plans: {destination.length}
      </Link>
    </Button>
    <Button
     mt={5}
      width={{ base: '100%', md: 'auto' }}
      mb={{ base: 4, md: 0 }}
      p={{ base: '30px', md: '70px' }}
      bg={'#99DBF5'}
    >
      <Link to='/admin/addplan'>
      Add New Plan
      </Link>
    </Button>
    <Button
     mt={5}
      width={{ base: '100%', md: 'auto' }}
      mb={{ base: 4, md: 0 }}
      p={{ base: '30px', md: '70px' }}
      bg={'#E8A9A9'}
    >
      Total Bookings: {20}
    </Button>
    <Button
     mt={5}
      width={{ base: '100%', md: 'auto' }}
      mb={{ base: 4, md: 0 }}
      p={{ base: '30px', md: '70px' }}
      bg={'#C4DFDF'}
    >
      Active Users: {5}
    </Button>
  </Flex>
  <Box>
 
  </Box>
</Box>


 


   
  )
}

export default Admin