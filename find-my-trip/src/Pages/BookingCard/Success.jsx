import { useState, useEffect } from 'react';
import { Button, Box, Text, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Show the popup after 2 minutes
    const popupTimeout = setTimeout(() => {
      setShowPopup(true);
    }, 2 * 60 * 1000);

    return () => clearTimeout(popupTimeout);
  }, []);

  useEffect(() => {
    // Show the success message after the popup is shown
    if (showPopup) {
      const successTimeout = setTimeout(() => {
        setShowSuccessMessage(true);
      }, 2000);

      return () => clearTimeout(successTimeout);
    }
  }, [showPopup]);

  useEffect(() => {
    // Redirect to the home page after the success message is shown
    if (showSuccessMessage) {
      const redirectTimeout = setTimeout(() => {
        navigate('/');
      }, 2000);

      return () => clearTimeout(redirectTimeout);
    }
  }, [showSuccessMessage, navigate]);

  const handlePayment = () => {
    // Perform payment logic here

    // Show payment success toast
    toast({
      title: 'Payment Successful',
      status: 'success',
      duration: 2000,
    });
  };

  return (
    <Box>
      {showPopup && (
        <Box
          position="fixed"
          top={['40%', '50%']}
          left={['50%', '50%']}
          transform={['translate(-50%, -40%)', 'translate(-50%, -50%)']}
          padding={['1rem', '2rem']}
          background="white"
          borderRadius="md"
          boxShadow="lg"
          zIndex={9999}
        >
          <Text fontSize={['lg', 'xl']} fontWeight="bold" mb="1rem">
            Payment Popup
          </Text>
          <Button onClick={handlePayment}>Pay Now</Button>
        </Box>
      )}
      {showSuccessMessage && (
        <Box
          position="fixed"
          top={['40%', '50%']}
          left={['50%', '50%']}
          transform={['translate(-50%, -40%)', 'translate(-50%, -50%)']}
          padding={['1rem', '2rem']}
          background="white"
          borderRadius="md"
          boxShadow="lg"
          zIndex={9999}
        >
          <Text fontSize={['lg', 'xl']} fontWeight="bold" mb="1rem">
            Payment Successful!
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default Success;
