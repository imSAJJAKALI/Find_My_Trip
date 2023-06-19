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
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import phonePeImage from './PhonePe.png';
import paytmImage from './Paytm.png';

function PaymentPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [ccvnumber, setCCVNumber] = useState('');
  const navigate = useNavigate();

  const handlePaymentOptionChange = (value: string) => {
    setSelectedOption(value);
    // onOpen();
  };

  const handlePayNowClick = () => {
    // Perform payment logic based on selectedOption and card details
    
    // Simulating payment success
    setTimeout(() => {
      
    navigate('/Success');
    }, 2000);
    
    onClose();
  };

  return (
    <>
      <br />
      <br />
      <br />
      <Box maxWidth="500px" mx="auto" p={4} border="3px solid teal" zIndex={5}>
        <FormControl mb={4}>
          <FormLabel>Select Payment Method</FormLabel>
          <RadioGroup onChange={handlePaymentOptionChange} value={selectedOption}>
            <Stack direction="row">
              <Radio value="creditCard">Credit Card</Radio>
              <Radio value="phonePe">PhonePe</Radio>
              <Radio value="paytm">Paytm</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        {selectedOption === 'creditCard' && (
          <>
            <FormControl mb={4}>
              <FormLabel>Name on Card</FormLabel>
              <Input
                type="text"
                placeholder="Enter name on card"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />
            </FormControl>

            <FormControl mb={4}>
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

            <FormControl mb={4}>
              <FormLabel>Expiration Date</FormLabel>
              <Input
                type="month"
                placeholder="Select expiration date"
                value={expireDate}
                isRequired
                onChange={(e) => setExpireDate(e.target.value)}
              />
            </FormControl>

            <FormControl mb={4}>
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
            <Input
              type="text"
              placeholder="Enter your UPI"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </Box>
        )}

        {selectedOption === 'paytm' && (
          <Box>
            <Image src={paytmImage} alt="Paytm" maxH="100px" mx="auto" my={4} />
            <Input
              type="text"
              placeholder="Enter your UPI"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
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

export default PaymentPage;
