// About.js
import React, { useState, useEffect } from 'react';
import { Text, Image, Link, Button, Box, useColorMode, HStack, Heading, Switch, UnorderedList, List, ListItem, Divider } from '@chakra-ui/react';
import Projects from './Projects';
import Contact from './Contact';


const About = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const listItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

    const boxBackgroundColor = colorMode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)';
    const dividerColor = colorMode === 'light' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.2)';

    return (
        <>
        <Box zIndex={1} m={5}>
            <Box textAlign={"center"}>
                <Heading borderRadius="md" 
                p={2} align="center" 
                display="inline-block" position="relative" zIndex={3} 
                size="3xl" fontWeight={100} justify="center" 
                >
                    Noah Cunningham Baker
                </Heading>
            </Box>
            <HStack justify="center" spacing={5} mt={5}>
                <Button w={100} colorScheme="red" onClick={() => setIsProjectsOpen(true)}>
                    Projects
                </Button>
                <Projects isOpen={isProjectsOpen} onClose={() => setIsProjectsOpen(false)}/>
                <Button w={100} colorScheme="red" onClick={() => setIsContactOpen(true)}>
                    Contact
                </Button>
                <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)}/>
                <Button w={100} colorScheme="red">
                    <Link _hover={{ textDecoration: "none" }} href="https://github.com/NoahCCB" isExternal>
                        Github
                    </Link>
                </Button>
                <Button w={100} colorScheme="red">
                    <Link _hover={{ textDecoration: "none" }} href="https://www.linkedin.com/in/noah-cunningham-baker/" isExternal>
                        LinkedIn
                    </Link>
                </Button>
            </HStack>
            
            <Box
                position="absolute"
                zIndex={2}
                p={5}
                mt={5}
                border="2px solid"
                borderColor="red"
                left={5}
                right={5}
            >
            <HStack zIndex={3} justify={"center"} my={5} spacing={5}>
                <Box 
                zIndex={3}
                backgroundColor={boxBackgroundColor}
                p={4}
                borderRadius="md"
                w={"30%"} overflowY="auto"
                h={500} align="center">
                    <Text fontWeight="700" fontSize="xl" align="center">
                        About
                    </Text>
                    <Divider borderColor={dividerColor} my={3}/>
                    <Image mt={3} mb={5} maxH={100} flexGrow={true} align="center" src="../P.JPG" borderRadius="full" boxShadow="dark-lg"/>
                    <Text>I am a computer science student at Washington University in St. Louis 
                        with a track record of crafting numerous software and web applications, and a dedicated, 
                        enthusiastic approach to continuous learning and creation
                    </Text>
                </Box>
                <Box 
                zIndex={3}
                backgroundColor={boxBackgroundColor}
                p={4}
                borderRadius="md"
                w={"30%"}
                h={500}
                overflowY="auto">
                    <Text fontWeight="700" fontSize="xl" align="center">
                        Skills
                    </Text>
                    <Divider borderColor={dividerColor} my={3}/>
                    <HStack my={5} justifyContent="space-evenly">
                        <UnorderedList>
                            <ListItem>Java</ListItem>
                            <ListItem>HTML</ListItem>
                            <ListItem>CSS</ListItem>
                            <ListItem>Typescript</ListItem>
                            <ListItem>Javascript</ListItem>
                        </UnorderedList>
                        <UnorderedList>
                            <ListItem>Python</ListItem>
                            <ListItem>C++</ListItem>
                            <ListItem>Swift</ListItem>
                            <ListItem>C</ListItem>
                            <ListItem>Assembly</ListItem>
                        </UnorderedList>
                    </HStack>
                    <Divider borderColor={dividerColor}/>
                    <HStack my={5} justifyContent="space-evenly">
                        <UnorderedList>
                            <ListItem>MySQL/SQL</ListItem>
                            <ListItem>NodeJs</ListItem>
                            <ListItem>NextJs</ListItem>
                            <ListItem>PyTorch</ListItem>
                            <ListItem>Scikit</ListItem>
                            <ListItem>Keras</ListItem>
                        </UnorderedList>
                        <UnorderedList>
                            <ListItem>Firebase</ListItem>
                            <ListItem>React</ListItem>
                            <ListItem>AWS</ListItem>
                            <ListItem>Prisma</ListItem>
                            <ListItem>SwiftUI</ListItem>
                            <ListItem>Numpy</ListItem>
                        </UnorderedList>
                    </HStack>
                </Box>
                <Box 
                zIndex={3}
                backgroundColor={boxBackgroundColor}
                p={4}
                borderRadius="md"
                w={"30%"}
                align="center"
                h={500}
                overflowY="auto">
                    <Text fontWeight="700" fontSize="xl" align="center">
                        Education
                    </Text>
                    <Divider borderColor={dividerColor} my={3}/>
                    <Text fontSize="lg" fontWeight="500">Washington University in St. Louis</Text>
                    <Text>Bachelor of Science in Computer Science</Text>
                    <Box align="left" mt={5}>
                        <Text size="sm">Minor in Human Computer Interaction</Text>
                        <Text size="sm">Minor in Mathematics</Text>
                    </Box>
                    <Divider borderColor={dividerColor} my={3}/>
                    <UnorderedList align="left" fontSize={13}>
                        <ListItem>Data Structures and Algorithms</ListItem>
                        <ListItem>Web Development</ListItem>
                        <ListItem>Rapid Prototyping and Creative Development</ListItem>
                        <ListItem>Artificial Neural Networks and Deep Learning</ListItem>
                        <ListItem>Matrix Algebra and Dynamical Systems</ListItem>
                        <ListItem>Object-Oriented Software Development</ListItem>
                        <ListItem>Systems Software</ListItem>
                        <ListItem>Data Science</ListItem>
                    </UnorderedList>
                </Box>
            </HStack>

            <HStack ml={10}>
                <Switch zIndex={3} size="lg" onChange={toggleColorMode} colorScheme="red" />
            </HStack>
            </Box>
        </Box>
        </>
    );
};

export default About;
