import React from 'react'
import { Box,Image,Text } from '@chakra-ui/react'
import Card1 from "./BookingCard/Card1"
import Card_post from "./Download_card.png"


const Booking = ( ) => {
  return (
    <div >
     <Box position={"relative"}>
       <Image src='https://www.covermore.com.au/sites/default/files/16-top-travel-hacks-for-flying.jpg' width={"100vw"} height={"40vh"} />
       <Text position={"absolute"} top="50%" left={"50%"}  transform="translate(-50%, -50%)"
          textAlign="center" fontSize={'6xl'} color={'white'} >Flight Booking</Text>
       </Box>
       <h1 style={{color:"black", fontSize:"40px", marginRight:"55%"}}>Top <span style={{color:"#1071DB"}}>International Airlines</span></h1>
       <p style={{color:"black", fontSize:"20px", marginRight:"43%"}}>Book your next flight with find my trip for a world-class experience</p>
      <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"10px", width:"90%", margin:"auto"}} >
      <Card1 img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6aJcAwq3WkvPMgZKExXr1mW7gRkObHl04nQ&usqp=CAU"} Price={"$850"} Price1={"990"} />
      <Card1 img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI3SfN5VNrzMnORea6qleLczoENS_AX5dqNg&usqp=CAU"} Price={"$725"} Price1={"888"} />
      <Card1 img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZZTuHtiWrCvzE7spd5A50JdgO-P5f-0yIQ&usqp=CAU"} Price={"$625"} Price1={"750"} />
      <Card1 img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnY07AIP3h4WA71RHlD21a7EnNC5-nl-sHKA&usqp=CAU"} Price={"$741"} Price1={"951"} />
      </div>
      <h1 style={{color:"black", fontSize:"40px", marginRight:"60%"}}>Featured <span style={{color:"#1071DB"}}>Flight Deals</span></h1>
      <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"10px", width:"90%", margin:"auto"}} >
      <Card1 img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7nFa4FSNuIUsZL1hkBrQ-3YpRrv7auMgzJA&usqp=CAU"} Price={"$105"} Price1={"128"} />
      <Card1 img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjRLSSORmHXYpmNJl2bzNuKSg28iirJP3t9g&usqp=CAU"} Price={"$258"} Price1={"320"} />
      <Card1 img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz8jy84NbjCExv84VUt1Xi7_HNzeC4LF9c0w&usqp=CAU"} Price={"$314"} Price1={"412"} />
      <Card1 img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9A9oPA3yJFYoWIWAI3p_GGTl14u4EmLjF4Q&usqp=CAU"} Price={"$520"} Price1={"650"} />
      </div>

      <div>
      <h1 style={{color:"black", fontSize:"40px", marginRight:"70%"}}>Quick <span style={{color:"#1071DB"}}>& Safe</span></h1>
        <h1 style={{color:"black", fontSize:"20px", marginRight:"63%"}}>Back your flights in <span style={{color:"#1071DB"}}>three esay steps</span></h1>
       
       <div style={{display:"flex",width:"90%", margin:"auto"}}>
         <div style={{width:"70%", marginRight:"10%"}} >
          <div style={{display:"flex", marginRight:"10%", margin:"auto", marginBottom:"10px", textAlign:"left", marginTop:'10px'}}>
              <img src="https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png" alt="" />
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, ipsum! Sed, voluptatem culpa deserunt pariatur, harum quae temporibus autem sit asperiores quas maxime fuga quaerat!
               </p>
          </div  >
          <div style={{display:"flex",marginBottom:"10px", textAlign:"left"}}>
               <img src="https://promos.makemytrip.com/Growth/Images/B2C/2x/language1@2x_20210901.png" alt="" />
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, ipsum! Sed, voluptatem culpa deserunt pariatur, harum quae temporibus autem sit asperiores quas maxime fuga quaerat!
          </p>
          </div>
          <div style={{display:"flex",marginBottom:"10px", textAlign:"left"}}>
               <img src="https://promos.makemytrip.com/notification/xhdpi/web-check-in-116x116-23062020.png" alt="" width="10%" />
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, ipsum! Sed, voluptatem culpa deserunt pariatur, harum quae temporibus autem sit asperiores quas maxime fuga quaerat!
          </p>
          </div>
        </div>
        <div style={{width:"30%", marginTop:'10px', marginBottom:"10px",  }} >
          <div style={{width:"230px", height:"230px" , borderRadius:"100% / 80%", background:"#1071DB"}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1J71Ufj7feHLHd1PYSBiPxC2NdOKKHidWnw&usqp=CAU" alt="" style={{width:"200px", height:"200px", borderRadius: "100% / 150%", margin:"auto", padding:"15px"}} />
          </div>
       
      </div>
       </div>
       
      </div>
      <div style={{display:"flex", background:"#1071DB", borderRadius:"15px", width:"90%", margin:"auto", }}>
       <img src={Card_post} alt="" />
      
      </div>
     


    </div>
    
  )
}

export default Booking