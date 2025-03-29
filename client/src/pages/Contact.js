import React from 'react';
import {
  Container,
  Heading,
  Text,
  VStack,
  Box,
  HStack,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const ContactCard = ({ title, value, icon, href }) => (
  <ChakraLink href={href} isExternal _hover={{ textDecoration: 'none' }} w="100%" maxW="600px">
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
  return (
    <Box minH="100vh" bg="gray.900" pt={20}>
      <Container maxW="container.xl" py={20} centerContent>
        <VStack spacing={10} align="center" w="100%">
          <Box textAlign="center" maxW="600px">
            <Heading mb={4} color="white" bgGradient="linear(to-r, blue.400, purple.400)" bgClip="text">
              Get in Touch
            </Heading>
            <Text color="gray.300" fontSize="lg">
              Feel free to reach out for collaborations or just a friendly hello
            </Text>
          </Box>

          <VStack spacing={6} align="stretch" w="100%" maxW="600px">
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
              href="https://maps.app.goo.gl/Lasr8fkzazxcJ24N8"
            />
            <ContactCard
              title="Based in"
              value="Philippines"
              icon={faMapMarker}
              href="#"
            />
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;
