import React from "react";
import { Button, Image, Modal, ModalOverlay, Link, useColorMode, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, VStack, Text, Box, HStack } from "@chakra-ui/react";

const Contact = ({ isOpen, onClose}) => {

    const { colorMode, toggleColorMode } = useColorMode();
    const boxBackgroundColor = colorMode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)';

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Contact</ModalHeader>
                <ModalCloseButton />
                <ModalBody maxH="60vh" overflowY="auto">
                <Box overflowY="auto">
                    <VStack spacing={4} align="stretch">
                        <Box borderRadius="md" background={boxBackgroundColor} p={4}>
                            <Text><strong>Email:</strong> <a href="mailto:c.noah@wustl.edu">c.noah@wustl.edu</a></Text>
                        </Box>
                        <Box borderRadius="md" background={boxBackgroundColor} p={4}>
                            
                            <Text><strong>Phone:</strong> +1(406)-223-0144</Text>
                           
                        </Box>
                    </VStack>
                    </Box>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="red" onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default Contact;
