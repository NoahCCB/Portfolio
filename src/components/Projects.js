import React from "react";
import { Button, Image, Modal, ModalOverlay, Link, useColorMode, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, VStack, Text, Box, HStack } from "@chakra-ui/react";

const Projects = ({ isOpen, onClose}) => {

    const { colorMode, toggleColorMode } = useColorMode();
    const boxBackgroundColor = colorMode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)';

    function Project(title, description, link, image) {
        this.title = title;
        this.description = description;
        this.link = link;
        this.image = image;
    }

    const beatbuff = new Project("Beatbuff", "A social app for sharing, rating, and catalogging music", "http://dev.fishersun.com:3000/", "../beatbuff.png");
    const movieFinder = new Project("Movie Finder", "An app where you can find movies and look at their descriptions and ratings. Programmed in Swift using Storyboard", "https://github.com/NoahCCB/Movie-Finder", "../movie-finder.png");
    const breakout = new Project("Breakout Game", "A simple retro version of the game breakout, written entirely in Java using Swing, highlighting object oriented design principles and effective coding practice", "https://github.com/NoahCCB/Breakout-Game", "../breakout.png");


    let projectList = [beatbuff, movieFinder, breakout]

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Projects</ModalHeader>
                <ModalCloseButton />
                <ModalBody maxH="60vh" overflowY="auto">
                <Box overflowY="auto">
                    <VStack spacing={4} align="stretch">
                        {projectList.map((project) => (
                            <Link borderRadius="md" _hover={{textDecoration: "none", backgroundColor: "rgba(0, 0, 0, 0.15)"}} key={project.title} href={project.link} isExternal>
                                <Box 
                                key={project.title} 
                                p={4} size="lg" borderRadius="md" 
                                background={boxBackgroundColor} cursor="pointer"
                                >
                                    <HStack>
                                        <Box>
                                            <Text fontWeight={700}>{project.title}</Text>
                                            <Text>{project.description}</Text>
                                        </Box>
                                        <Image maxH={200} maxW={300} src={project.image} borderRadius="md"/>
                                    </HStack>
                                </Box>
                            </Link>
                        ))}
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

export default Projects;
