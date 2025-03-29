import React from 'react';
import { Container, Heading, SimpleGrid, Box, Text, Image, Tag, HStack, VStack, Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faGlobe, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ title, description, image, tags, icon }) => (
  <Box 
    borderRadius="xl" 
    overflow="hidden" 
    bg="gray.800" 
    shadow="dark-lg"
    transition="transform 0.2s, box-shadow 0.2s"
    _hover={{ 
      transform: 'translateY(-5px)',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'
    }}
    position="relative"
    backdropFilter="blur(10px)"
    backgroundColor="rgba(26, 32, 44, 0.8)"
  >
    <Box bg="blue.500" p={4} color="white">
      <FontAwesomeIcon icon={icon} size="2x" />
    </Box>
    <Box p={6}>
      <VStack align="flex-start" spacing={3}>
        <Heading size="md" color="white">{title}</Heading>
        <Text color="gray.300">{description}</Text>
        <HStack spacing={2} flexWrap="wrap">
          {tags.map((tag) => (
            <Tag key={tag} colorScheme="blue" size="sm" variant="subtle">
              {tag}
            </Tag>
          ))}
        </HStack>
      </VStack>
    </Box>
  </Box>
);

const Projects = () => {
  const projects = [
    {
      title: "TimeTune",
      description: "A mobile application designed to help users efficiently manage their time and stay on top of their tasks with smart reminders and intuitive scheduling.",
      tags: ["Mobile App", "Time Management", "React Native", "UI/UX"],
      icon: faMobileAlt
    },
    {
      title: "Iskor",
      description: "A web application that enables students to digitally track their academic scores, providing a modern solution for academic performance monitoring.",
      tags: ["Web App", "Education", "React", "Database"],
      icon: faGlobe
    },
    {
      title: "Anti-ligoy",
      description: "An innovative application that helps prevent class cutting by tracking student attendance and providing real-time monitoring for educational institutions.",
      tags: ["Mobile App", "Education", "Student Management", "GPS"],
      icon: faUserGraduate
    }
  ];

  return (
    <Box minH="100vh" bg="gray.900" pt={20}>
      <Container maxW="container.xl" py={20}>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading mb={4} color="white" bgGradient="linear(to-r, blue.400, purple.400)" bgClip="text">
              My Projects
            </Heading>
            <Text color="gray.300" fontSize="lg">
              Here are some of the projects I've worked on that showcase my skills in frontend development and UI/UX design.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Projects;
