import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Input,
  Image,
  Spinner,
  Text
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'
import phonePeImage from './PhonePe.png';
import paytmImage from './Paytm.png';
import { useSelector } from 'react-redux';


function PaymentPage2({img, Price, Price1, Brand, city}:any) {
  const Data=useSelector((store:any)=>store.destReducer.paymentData)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState('creditCard');
  const [cardName, setCardName] = useState('');
  const [cardprice, setCardprice] = useState(Data.price);
  const [cardNumber, setCardNumber] = useState("");
  const [expireDate, setExpireDate] = useState('');
  const [ccvnumber, setCCVNumber] = useState('');
  const [paytmnumber,setPaytmbumber]=useState('')
  const [phonepaynumber,setphonepaynumber]=useState('')
  const navigate = useNavigate();
  
  const toast = useToast()
  console.log(Data)
  
  const handlePaymentOptionChange = (value: string) => {
   
      setSelectedOption(value);
    
    // onOpen();
  };

  const handlePayNowClick = () => {
    // Perform payment logic based on selectedOption and card details
    if(cardName==""||expireDate==""||ccvnumber==""){
      toast({
        title: ` Please fill out all required fields.`,
        position: "top",
        status: 'warning',
        duration: 3000,
        isClosable: true,
      })
    }
    else if(cardName==""||expireDate==""||ccvnumber==""){
      toast({
        title: ` Please fill out required fields`,
        position: "top",
        status: 'warning',
        duration: 3000,
        isClosable: true,
      })
    }
    else if(cardNumber==""){
      toast({
        title: ` Please fill out required fields`,
        position: "top",
        status: 'warning',
        duration: 3000,
        isClosable: true,
      })
    }
    else{
      setTimeout(() => {
        
        navigate('/Success');
        
        }, 2000);
        
        onClose();
    }
    // Simulating payment success
    
  };

  return (
    <>
      <br />
      <br />
      <br />
      <Box maxWidth="500px" mx="auto" p={4} border="3px solid teal" zIndex={5} >
      {/* <Box maxWidth="500px" mx="auto" p={4}  zIndex={5}> */}
      {/* </Box> */}
        <FormControl mb={4} isRequired>
          <FormLabel>Select Payment Method</FormLabel>
          <RadioGroup  onChange={handlePaymentOptionChange} value={selectedOption}  >
            <Stack direction="row" >
              <Radio value="creditCard">Credit Card</Radio>
              <Radio value="phonePe">PhonePe</Radio>
              <Radio value="paytm">Paytm</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        {selectedOption === 'creditCard' && (
          <>
           <FormControl mb={4} >
              {/* <FormLabel>Amount </FormLabel> */}
              {/* <Input
                type="text"
                maxLength={16}
                placeholder="Enter card number"
                value={cardprice}
                onChange={(e) => setCardNumber(e.target.value)}
              /> */}
             <Text fontWeight="bold" color='gray'> The Payable Amount is: ₹.{cardprice}</Text>
            </FormControl>
            <FormControl mb={4} isRequired>
              <FormLabel>Name on Card</FormLabel>
              <Input
                type="text"
                placeholder="Enter name on card"
                value={cardName}
                isRequired
                onChange={(e) => setCardName(e.target.value)}
              />
            </FormControl>

           
            <FormControl mb={4} isRequired>
              <FormLabel>Card Number</FormLabel>
              <Input
                type="text"
                maxLength={16}
                placeholder="Enter card number"
                value={cardNumber}
                isRequired
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </FormControl>

            <FormControl mb={4} isRequired>
              <FormLabel>Expiration Date</FormLabel>
              <Input
                type="month"
                placeholder="Select expiration date"
                value={expireDate}
                isRequired
                onChange={(e) => setExpireDate(e.target.value)}
              />
            </FormControl>

            <FormControl mb={4} isRequired>
              <FormLabel>CCV Number</FormLabel>
              <Input
                type="password"
                maxLength={3}
                placeholder="Enter CCV number"
                value={ccvnumber}
                isRequired
                onChange={(e) => setCCVNumber(e.target.value)}
              />
            </FormControl>
          </>
        )}

        {selectedOption === 'phonePe' && (
          <Box>
            <Image src={phonePeImage} alt="PhonePe" maxH="100px" mx="auto" my={4} />
            <FormControl mb={4} >
              {/* <FormLabel>Amount </FormLabel>
              <Input
                type="text"
                maxLength={16}
                placeholder="Enter card number"
                value={cardprice}
                fontWeight="bold" color='black'
                // onChange={(e) => setCardNumber(e.target.value)}
              /> */}
              <Text fontWeight="bold" color='gray'> The Payable Amount is: ₹.{cardprice}</Text>
            </FormControl>
            <Input
              type="email"
              placeholder="Enter your UPI"
              value={phonepaynumber}
              isRequired
              onChange={(e) => setphonepaynumber(e.target.value)}
            />
          </Box>
        )}

        {selectedOption === 'paytm' && (
          <Box>
            <Image src={paytmImage} alt="Paytm" maxH="100px" mx="auto" my={4} />
            <FormControl mb={4} >
              {/* <FormLabel>Amount </FormLabel>
              <Input
                type="text"
                maxLength={16}
                placeholder="Enter card number"
                value={cardprice}
                fontWeight="bold" color='black'
                // onChange={(e) => setCardNumber(e.target.value)}
              /> */}
              <Text fontWeight="bold" color='gray'> The Payable Amount is: ₹.{cardprice}</Text>
            </FormControl>
            <Input
              type="email"
              placeholder="Enter your UPI"
              value={paytmnumber}
              isRequired
              onChange={(e) => setPaytmbumber(e.target.value)}
            />
          </Box>
        )}

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Payment Confirmation</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>You have selected: {selectedOption}</p>
              {/* Additional content or actions for payment confirmation */}
              <Text fontSize="18px" fontWeight="bold" color='green'  >
     Amount: ₹.{Data.price}
    </Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="blue"  onClick={handlePayNowClick}>
                Pay
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Button colorScheme="blue"  mt={4} w="100%" onClick={onOpen}>
          Pay Now
        </Button>
      </Box>
    </>
  );
}

export default PaymentPage2;
