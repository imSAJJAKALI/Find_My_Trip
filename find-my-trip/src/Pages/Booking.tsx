import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import Card1 from "./BookingCard/Card1";
import Card_post from "./Download_card.png";
import FlightWings from './flightwings.png';
import style from "../styles/bookig.module.css";

const Booking = () => {
  return (
    <Box>
      <Box position={"relative"}>
        <Image src='https://www.covermore.com.au/sites/default/files/16-top-travel-hacks-for-flying.jpg' width={"100%"} height={"40vh"} />
        <Text position={"absolute"} top="50%" left={"50%"} transform="translate(-50%, -50%)" textAlign="center" fontSize={'6xl'} color={'white'}>Flight Booking</Text>
      </Box>
      <Box px={6} py={8} textAlign="center">
        <Text fontSize={['3xl', '4xl']} fontWeight="700" color="black">Top <Text as="span" color="#1071DB">International Airlines</Text></Text>
        <Text color="black" fontSize={['xl', '2xl']} mx="auto" maxWidth={['80%', '60%']} mt={4}>Book your next flight with find my trip for a world-class experience</Text>
        <Box display="grid" gridTemplateColumns={['1fr', 'repeat(4, 1fr)']} gap={4} width="90%" mx="auto" mt={8}>
          <Card1 img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6aJcAwq3WkvPMgZKExXr1mW7gRkObHl04nQ&usqp=CAU"} Price={"₹18000"} Price1={"₹19500"} Brand={"indigo"} city={"Dubai"} />
          <Card1 img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI3SfN5VNrzMnORea6qleLczoENS_AX5dqNg&usqp=CAU"} Price={"₹19000"} Price1={"₹21000"} Brand={"Emirates"} city={"Singapore"}/>
          <Card1 img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZZTuHtiWrCvzE7spd5A50JdgO-P5f-0yIQ&usqp=CAU"} Price={"₹32000"} Price1={"₹34000"} Brand={"Lufthansa"} city={"London"}/>
          <Card1 img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnY07AIP3h4WA71RHlD21a7EnNC5-nl-sHKA&usqp=CAU"} Price={"₹23000"} Price1={"₹25000"} Brand={"Qantas"} city={"Maldives"}/>
        </Box>
        <Text fontSize={['3xl', '4xl']} color="black" mt={16}>Featured <Text as="span" color="#1071DB">Flight Deals</Text></Text>
        <Box display="grid" gridTemplateColumns={['1fr', 'repeat(4, 1fr)']} gap={4} width="90%" mx="auto" mt={8}>
          <Card1 img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7nFa4FSNuIUsZL1hkBrQ-3YpRrv7auMgzJA&usqp=CAU"} Price={"₹28000"} Price1={"₹32000"} Brand={"Delta Air Lines"} city={"Paris"} />
          <Card1 img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjRLSSORmHXYpmNJl2bzNuKSg28iirJP3t9g&usqp=CAU"} Price={"₹32000"} Price1={"₹34000"} Brand={"Kingfisher"} city={"Kuala Lumpur"}  />
          <Card1 img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz8jy84NbjCExv84VUt1Xi7_HNzeC4LF9c0w&usqp=CAU"} Price={"₹43000"} Price1={"₹45000"} Brand={"American Airlines"} city={"Los Angeles"} />
          <Card1 img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9A9oPA3yJFYoWIWAI3p_GGTl14u4EmLjF4Q&usqp=CAU"} Price={"₹48000"} Price1={"₹50000"} Brand={"United Airlines"} city={"Washington"} />
        </Box>
        <Box mt={16}>
          <Text fontSize={['3xl', '4xl']} color="black" mr={['5%', '70%']}>Quick <Text as="span" color="#1071DB">& Safe</Text></Text>
          <Text fontSize={['lg', 'xl']} color="black" mr={['10%', '63%']} mb={4}>Back your flights in <Text as="span" color="#1071DB">three easy steps</Text></Text>
          <Box display={['block', 'flex']} width="90%" mx="auto">
            <Box width={['100%', '70%']} mr={['0', '10%']}>
              <Box display="flex" mr={['0', '10%']} alignItems="flex-start" mb={2}>
                <Image src="https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png" alt="" width={['30px', 'auto']} mr={2} />
                <Text color="black" textAlign="left">Hassle-Free Booking: Select, Confirm and Travel with Confidence Easy as 1-2-3: Pick, Reserve, Takeoff Safely.</Text>
              </Box>

               <Box display="flex" mr={['0', '10%']} alignItems="flex-start" mb={2}>
                <Image src="https://promos.makemytrip.com/Growth/Images/B2C/2x/language1@2x_20210901.png" alt="" width={['30px', 'auto']} mr={2} />
                <Text color="black" textAlign="left" marginLeft="15px">Swift and Secure: Select, Book, Fly with Peace of Mind.,Secure Your Journey: Select, Book, Fly with Ease.</Text>
              </Box>
              <Box display="flex" mr={['0', '10%']} alignItems="flex-start" mb={2}>
                <Image src="https://promos.makemytrip.com/notification/xhdpi/web-check-in-116x116-23062020.png" alt="" width="80px"  mr={2} />
                <Text color="black" textAlign="left" marginLeft="15px">Effortless Travel Planning: Select, Reserve, Enjoy Your Journey, and Streamlined Booking Process: Pick, Confirm, Travel Stress-Free.</Text>
              </Box>
            </Box>
            <Box width={['100%', '30%']} height="280px" mt={['4', '0']} mr={['0', '10%']} alignItems="center"   >
              <Image src={FlightWings} alt="" height="250px"   mx="auto" p={3} padding="0px" paddingTop="0px" />
            </Box>
          </Box>
        </Box>
        <Box display="flex" bg="#1071DB" borderRadius="15px" width="90%" mx="auto" mt={8}>
          <Image src={Card_post} alt=""  />
        </Box>
      </Box>
    </Box>
  );
}

export default Booking;
