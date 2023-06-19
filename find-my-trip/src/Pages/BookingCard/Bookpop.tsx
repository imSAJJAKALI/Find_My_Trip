import { useState } from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Popup({text}:any) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleProceed = () => {
    // Handle proceed action
    console.log("Proceed");
  };

  return (
    <>
      <Button colorScheme="teal" onClick={handleOpen}>{text}</Button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Proceed to Continue?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Popup content here */}
            Are you sure you want to proceed?
          </ModalBody>

          <ModalFooter>
          <Link to="/payment">
            <Button colorScheme="blue" mr={3} onClick={handleProceed}>
              Proceed
            </Button>
            </Link>
            <Button onClick={handleClose}>Cancel</Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Popup;
