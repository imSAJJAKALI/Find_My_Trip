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
  Text,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import phonePeImage from './PhonePe.png';
import paytmImage from './Paytm.png';

function PaymentPage() {
  const [selectedOption, setSelectedOption] = useState('creditCard');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [ccvNumber, setCCVNumber] = useState('');
  const [paytmNumber, setPaytmNumber] = useState('');
  const [phonePeNumber, setPhonePeNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const toast = useToast();

  const handlePaymentOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const handlePayNowClick = () => {
    if (selectedOption === 'creditCard') {
      // Validate credit card inputs
      if (!cardName || !cardNumber || !expireDate || !ccvNumber) {
        toast({
          title: 'Please fill out all required fields for Credit Card.',
          position: 'top',
          status: 'warning',
          duration: 3000,
          isClosable: true,
        });
        return;
      }
    } else if (selectedOption === 'phonePe') {
      // Validate PhonePe inputs
      if (!phonePeNumber) {
        toast({
          title: 'Please fill out all required fields for PhonePe.',
          position: 'top',
          status: 'warning',
          duration: 3000,
          isClosable: true,
        });
        return;
      }
    } else if (selectedOption === 'paytm') {
      // Validate Paytm inputs
      if (!paytmNumber) {
        toast({
          title: 'Please fill out all required fields for Paytm.',
          position: 'top',
          status: 'warning',
          duration: 3000,
          isClosable: true,
        });
        return;
      }
    }

    // Simulate payment processing
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/Success');
      onClose();
    }, 2000);
  };

  return (
    <>
      <Box maxWidth="500px" mx="auto" p={4} border="3px solid teal" zIndex={5}>
        <Text fontSize="18px" fontWeight="bold">
          Place: Example Place
        </Text>
        <Text fontSize="16px" fontWeight="300" color="gray.10">
          Number of Days: 5
        </Text>
        <Text fontSize="18px" fontWeight="bold" color="green">
          Amount: ₹1000
        </Text>

        <FormControl mb={4} isRequired>
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
                value={ccvNumber}
                isRequired
                onChange={(e) => setCCVNumber(e.target.value)}
              />
            </FormControl>
          </>
        )}

        {selectedOption === 'phonePe' && (
          <Box>
            <Image src={phonePeImage} alt="PhonePe" maxH="100px" mx="auto" my={4} />
            <FormControl mb={4} isRequired>
              <FormLabel>Enter PhonePe UPI</FormLabel>
              <Input
                type="text"
                placeholder="Enter your PhonePe UPI"
                value={phonePeNumber}
                isRequired
                onChange={(e) => setPhonePeNumber(e.target.value)}
              />
            </FormControl>
          </Box>
        )}

        {selectedOption === 'paytm' && (
          <Box>
            <Image src={paytmImage} alt="Paytm" maxH="100px" mx="auto" my={4} />
            <FormControl mb={4} isRequired>
              <FormLabel>Enter Paytm UPI</FormLabel>
              <Input
                type="text"
                placeholder="Enter your Paytm UPI"
                value={paytmNumber}
                isRequired
                onChange={(e) => setPaytmNumber(e.target.value)}
              />
            </FormControl>
          </Box>
        )}

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Payment Confirmation</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>You have selected: {selectedOption}</p>
              <Text fontSize="18px" fontWeight="bold" color="green">
                Amount: ₹1000
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="blue" onClick={handlePayNowClick} isLoading={isLoading}>
                Pay Now
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Button colorScheme="blue" mt={4} w="100%" onClick={onOpen}>
          Pay Now
        </Button>
      </Box>
    </>
  );
}

export default PaymentPage;
