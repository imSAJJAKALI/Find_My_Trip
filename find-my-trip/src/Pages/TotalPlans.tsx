import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { destinationGetData } from '../Redux/Destination/action'
import { Box, Grid, Image, Text } from '@chakra-ui/react'
import DestinationCard from '../Components/DestinationCard'
import PlansCard from './PlansCard'


const TotalPlans = () => {
  const dispatch=useDispatch()
  const {destination}=useSelector((store:any)=>store.destReducer)
  console.log(destination)

  useEffect(()=>{
destinationGetData({dispatch})
  },[])
    
  return (
    <div>
       <Box position="relative" backgroundColor={'#BA90C6'} height={'180px'}>
       
        <Text
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          fontSize={{ base: '4xl', md: '6xl' }}
          color="white"
        >
         Total plans 
        </Text>
      </Box>
      <Box  width={'90%'} margin={'auto'} mt={10}>


      <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
          {destination?.map((el: any) => (
            <PlansCard key={el.id} {...el} />
          ))}
        </Grid>
      </Box>
    </div>
  )
}

export default TotalPlans