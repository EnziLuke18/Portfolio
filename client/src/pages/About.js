import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Flex,
  Badge,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCode, faPalette } from '@fortawesome/free-solid-svg-icons';

const SkillCard = ({ title, skills }) => (
  <Box
    bg="gray.800"
    p={6}
    borderRadius="lg"
    shadow="dark-lg"
    transition="transform 0.2s"
    _hover={{ transform: 'translateY(-5px)' }}
    backdropFilter="blur(10px)"
    backgroundColor="rgba(26, 32, 44, 0.8)"
  >
    <Text color="white" fontWeight="bold" mb={4} fontSize="lg">
      {title}
    </Text>
    <Flex gap={2} flexWrap="wrap">
      {skills.map((skill, index) => (
        <Badge
          key={index}
          colorScheme="blue"
          px={3}
          py={1}
          borderRadius="full"
          fontSize="sm"
        >
          {skill}
        </Badge>
      ))}
    </Flex>
  </Box>
);

const About = () => {
  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Chakra UI'],
    design: ['UI Design', 'UX Design', 'Responsive Design', 'Figma'],
  };

  return (
    <Box minH="100vh" bg="gray.900" pt={20}>
      <Container maxW="container.xl" py={20}>
        <VStack spacing={16} align="stretch">
          {/* Education Section */}
          <Box>
            <Heading 
              mb={6} 
              color="white"
              display="flex"
              alignItems="center"
              gap={4}
            >
              <Box color="blue.400">
                <FontAwesomeIcon icon={faGraduationCap} />
              </Box>
              Education
            </Heading>
            <Box
              bg="gray.800"
              p={8}
              borderRadius="lg"
              shadow="dark-lg"
              backdropFilter="blur(10px)"
              backgroundColor="rgba(26, 32, 44, 0.8)"
            >
              <VStack align="stretch" spacing={4}>
                <Box>
                  <Text color="blue.400" fontWeight="bold" fontSize="lg">
                    Bachelor of Science in Information Technology
                  </Text>
                  <Text color="white" fontSize="md">
                    Western Institute of Technology
                  </Text>
                  <Text color="gray.400" fontSize="sm">
                    Current Student
                  </Text>
                </Box>
                <Text color="gray.300" fontSize="md">
                  Focusing on frontend development and UI/UX design, with a strong emphasis on creating 
                  intuitive and engaging user experiences.
                </Text>
              </VStack>
            </Box>
          </Box>

          {/* Skills Section */}
          <Box>
            <Heading 
              mb={6} 
              color="white"
              display="flex"
              alignItems="center"
              gap={4}
            >
              <Box color="blue.400">
                <FontAwesomeIcon icon={faCode} />
              </Box>
              Skills
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <SkillCard title="Frontend Development" skills={skills.frontend} />
              <SkillCard title="Design" skills={skills.design} />
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default About;
