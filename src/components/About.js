// About.js
import React, { useState } from 'react';
import { Text, Image, Link, Button, Box, VStack, useBreakpointValue, useColorMode, HStack, Heading, Switch, UnorderedList, ListItem, Divider } from '@chakra-ui/react';
import Projects from './Projects';
import Contact from './Contact';


const About = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const isMobile = useBreakpointValue({ base: true, sm: true, md: false, lg: false, xl: false });

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
            {isMobile ? (
                <VStack zIndex={3} justify={"center"} my={5} spacing={5}>
                     <Box 
                zIndex={3}
                backgroundColor={boxBackgroundColor}
                p={4}
                borderRadius="md"
                w={"full"} overflowY="auto"
                h={500} align="center">
                    <Text fontWeight="700" fontSize="xl" align="center">
                        About
                    </Text>
                    <Divider borderColor={dividerColor} my={3}/>
                    <Image mt={3} mb={5} maxH={100} flexGrow={true} align="center" src={process.env.PUBLIC_URL + '/P.JPG'} borderRadius="full" boxShadow="dark-lg"/>
                    <Text>I am a computer science student at Washington University in St. Louis 
                        with a track record of crafting numerous software and web applications, and a dedicated, 
                        enthusiastic approach to continuous learning and creation
                    </Text>
                    <Divider borderColor={dividerColor} my={3}/>
                    <Text fontWeight="600" mb={3}>Full-Stack Software Engineering Intern - ASL Aspire</Text>
                    <Text>I work with ASL Aspire, a company focused on making STEM education accessible for deaf and hard of hearing students. 
                        I built there teacher dashboard website, here teachers can assign the content created by the company to students as well as 
                        get comprehensive insight into the students performance and shortcomings so as to better inform teachers. I worked on both the frontend and backend of the platform, utilizing
                        Typescript and React as well as Pyhton, Alembic, Flask, and MySQL. 
                    </Text>
                    <Divider borderColor={dividerColor} my={3}/>
                    <Text fontWeight="600" mb={3}>Teaching Assistant - Data Structures and Algorithms</Text>
                    <Text>I am proud to be a mentor for other students and help students in groups to improve their code and understand course concepts. I hold office hours
                        In order to provide one-on-one guidance, and strive to explain and teach concepts in a understandable and engaging way.
                    </Text>
                </Box>
                <Box 
                zIndex={3}
                backgroundColor={boxBackgroundColor}
                p={4}
                borderRadius="md"
                w={"full"}
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
                            <ListItem>PyQT</ListItem>
                            <ListItem>QT</ListItem>
                            <ListItem>MySQL/SQL</ListItem>
                            <ListItem>NodeJs</ListItem>
                            <ListItem>NextJs</ListItem>
                            <ListItem>PyTorch</ListItem>
                            <ListItem>Scikit</ListItem>
                            <ListItem>Keras</ListItem>
                            <ListItem>Flask</ListItem>
                        </UnorderedList>
                        <UnorderedList>
                            <ListItem>Firebase</ListItem>
                            <ListItem>React</ListItem>
                            <ListItem>React Native</ListItem>
                            <ListItem>AWS</ListItem>
                            <ListItem>Prisma</ListItem>
                            <ListItem>SwiftUI</ListItem>
                            <ListItem>Numpy</ListItem>
                            <ListItem>Alembic</ListItem>
                        </UnorderedList>
                    </HStack>
                </Box>
                <Box 
                zIndex={3}
                backgroundColor={boxBackgroundColor}
                p={4}
                borderRadius="md"
                w={"full"}
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
                        <ListItem>Analysis of Algorithms</ListItem>
                        <ListItem>Web Development</ListItem>
                        <ListItem>Rapid Prototyping and Creative Development</ListItem>
                        <ListItem>Artificial Neural Networks and Deep Learning</ListItem>
                        <ListItem>Matrix Algebra and Dynamical Systems</ListItem>
                        <ListItem>Object-Oriented Software Development</ListItem>
                        <ListItem>Systems Software</ListItem>
                        <ListItem>Data Science</ListItem>
                    </UnorderedList>
                </Box>
                </VStack>) : (
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
                    <Image mt={3} mb={5} maxH={100} flexGrow={true} align="center" src={process.env.PUBLIC_URL + '/P.JPG'} borderRadius="full" boxShadow="dark-lg"/>
                    <Text>I am a computer science student at Washington University in St. Louis 
                        with a track record of crafting numerous software and web applications, and a dedicated, 
                        enthusiastic approach to continuous learning and creation
                    </Text>
                    <Divider borderColor={dividerColor} my={3}/>
                    <Text fontWeight="600" mb={3}>Full-Stack Software Engineering Intern - ASL Aspire</Text>
                    <Text>I work with ASL Aspire, a company focused on making STEM education accessible for deaf and hard of hearing students. 
                        I built there teacher dashboard website, here teachers can assign the content created by the company to students as well as 
                        get comprehensive insight into the students performance and shortcomings so as to better inform teachers. I worked on both the frontend and backend of the platform, utilizing
                        Typescript and React as well as Pyhton, Alembic, Flask, and MySQL. 
                    </Text>
                    <Divider borderColor={dividerColor} my={3}/>
                    <Text fontWeight="600" mb={3}>Teaching Assistant - Data Structures and Algorithms</Text>
                    <Text>I am proud to be a mentor for other students and help students in groups to improve their code and understand course concepts. I hold office hours
                        In order to provide one-on-one guidance, and strive to explain and teach concepts in a understandable and engaging way.
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
                            <ListItem>MySQL / SQL</ListItem>
                            <ListItem>NodeJs</ListItem>
                            <ListItem>QT / PyQT</ListItem>
                            <ListItem>NextJs</ListItem>
                            <ListItem>PyTorch</ListItem>
                            <ListItem>Scikit</ListItem>
                            <ListItem>Keras</ListItem>
                            <ListItem>Flask</ListItem>
                        </UnorderedList>
                        <UnorderedList>
                            <ListItem>Firebase</ListItem>
                            <ListItem>React</ListItem>
                            <ListItem>React Native</ListItem>
                            <ListItem>AWS</ListItem>
                            <ListItem>Prisma</ListItem>
                            <ListItem>SwiftUI</ListItem>
                            <ListItem>Numpy</ListItem>
                            <ListItem>Alembic</ListItem>
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
                    <UnorderedList align="left" spacing={2} fontSize={13}>
                        <ListItem>Data Structures and Algorithms</ListItem>
                        <ListItem>Analysis of Algorithms</ListItem>
                        <ListItem>Web Development</ListItem>
                        <ListItem>Rapid Prototyping and Creative Development</ListItem>
                        <ListItem>Artificial Neural Networks and Deep Learning</ListItem>
                        <ListItem>Matrix Algebra and Dynamical Systems</ListItem>
                        <ListItem>Object-Oriented Software Development</ListItem>
                        <ListItem>Systems Software</ListItem>
                        <ListItem>Data Science</ListItem>
                        <ListItem>Large Language Models</ListItem>
                        <ListItem>Differential Equations</ListItem>
                    </UnorderedList>
                </Box>
            </HStack>)}

            <HStack ml={10}>
                <Switch zIndex={3} size="lg" onChange={toggleColorMode} colorScheme="red" />
            </HStack>
            </Box>
        </Box>
        </>
    );
};

export default About;
