import React from 'react';
import {
  Container,
  Heading,
  Text,
  VStack,
  Box,
  SimpleGrid,
  Button,
  Input,
  Textarea,
  HStack,
  useToast,
  Link as ChakraLink,
  Center
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const ContactCard = ({ title, value, icon, href }) => (
  <ChakraLink href={href} isExternal _hover={{ textDecoration: 'none' }} w="100%">
    <HStack 
      p={6} 
      bg="gray.800" 
      shadow="dark-lg" 
      borderRadius="lg" 
      spacing={4}
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{ 
        transform: 'translateY(-2px)',
        boxShadow: 'xl',
        bg: 'gray.700'
      }}
      backdropFilter="blur(10px)"
      backgroundColor="rgba(26, 32, 44, 0.8)"
    >
      <Box bg="blue.500" p={3} borderRadius="lg" color="white">
        <FontAwesomeIcon icon={icon} />
      </Box>
      <Box>
        <Text color="gray.400" fontSize="sm">
          {title}
        </Text>
        <Text color="white" fontWeight="bold">
          {value}
        </Text>
      </Box>
    </HStack>
  </ChakraLink>
);

const Contact = () => {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "I'll get back to you as soon as possible.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box minH="100vh" bg="gray.900" pt={20}>
      <Container maxW="container.xl" py={20}>
        <VStack spacing={10} align="stretch">
          <Box>
            <Heading mb={4} color="white" bgGradient="linear(to-r, blue.400, purple.400)" bgClip="text">
              Get in Touch
            </Heading>
            <Text color="gray.300" fontSize="lg">
              Feel free to reach out for collaborations or just a friendly hello
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <VStack spacing={6} align="stretch">
              <ContactCard
                title="Email"
                value="tempestluke674@gmail.com"
                icon={faEnvelope}
                href="https://mail.google.com/mail/u/0/?hl=en#inbox"
              />
              <ContactCard
                title="Facebook"
                value="Enzi Luke Torrento"
                icon={faFacebook}
                href="https://www.facebook.com/enziluke.torrento?mibextid=ZbWKwL"
              />
              <ContactCard
                title="Education"
                value="BSIT - Western Institute of Technology"
                icon={faGraduationCap}
                href="https://www.facebook.com/WesternInstituteOfTechnology.Iloilo"
              />
              <ContactCard
                title="Based in"
                value="Philippines"
                icon={faMapMarker}
                href="#"
              />
            </VStack>

            <Box 
              as="form" 
              onSubmit={handleSubmit} 
              bg="gray.800" 
              p={8} 
              borderRadius="lg" 
              shadow="dark-lg"
              backdropFilter="blur(10px)"
              backgroundColor="rgba(26, 32, 44, 0.8)"
            >
              <VStack spacing={4}>
                <Input 
                  placeholder="Your Name" 
                  required 
                  bg="gray.700"
                  border="none"
                  color="white"
                  _placeholder={{ color: 'gray.400' }}
                />
                <Input 
                  placeholder="Your Email" 
                  type="email" 
                  required 
                  bg="gray.700"
                  border="none"
                  color="white"
                  _placeholder={{ color: 'gray.400' }}
                />
                <Textarea 
                  placeholder="Your Message" 
                  rows={6} 
                  required 
                  bg="gray.700"
                  border="none"
                  color="white"
                  _placeholder={{ color: 'gray.400' }}
                />
                <Button 
                  type="submit" 
                  colorScheme="blue" 
                  w="100%"
                  bg="blue.500"
                  _hover={{ bg: 'blue.600' }}
                >
                  Send Message
                </Button>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;
