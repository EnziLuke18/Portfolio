import React from 'react';
import { Box, Container, Heading, Text, VStack, Button, HStack, Image, Flex } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Home = () => {
  const animatedGradient = `
    linear-gradient(
      -45deg, 
      rgba(26, 32, 44, 0.97), 
      rgba(45, 55, 72, 0.97),
      rgba(26, 32, 44, 0.97),
      rgba(45, 55, 72, 0.97)
    )
  `;

  return (
    <Box
      position="relative"
      minH="100vh"
      color="white"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundImage: 'url(/coding-bg.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.1,
        zIndex: -2,
      }}
      _after={{
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        bgGradient: animatedGradient,
        backgroundSize: '400% 400%',
        animation: `${gradientAnimation} 15s ease infinite`,
        zIndex: -1,
      }}
    >
      <Container maxW="container.xl" pt={{ base: 20, md: 32 }}>
        <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" gap={10}>
          <VStack align="flex-start" spacing={6} flex={1}>
            <Box>
              <Text color="blue.300" fontWeight="bold" mb={2}>
                Welcome to my creative space
              </Text>
              <Heading 
                as="h1" 
                size="2xl" 
                mb={4}
                bgGradient="linear(to-r, blue.300, purple.300)"
                bgClip="text"
              >
                Hi, I'm Enzi Luke Torrento 👋
              </Heading>
              <Text fontSize="2xl" color="gray.100" mb={6} fontWeight="medium">
                Frontend Developer & UI/UX Designer
              </Text>
              <Text fontSize="lg" color="gray.300" maxW="600px" lineHeight="tall">
                I specialize in creating beautiful, intuitive user interfaces and engaging digital experiences. 
                With a keen eye for design and expertise in frontend technologies, I transform ideas into 
                pixel-perfect, responsive websites.
              </Text>
            </Box>

            <HStack spacing={4}>
              <Button 
                as={Link} 
                to="/projects" 
                bg="blue.500" 
                color="white" 
                size="lg"
                _hover={{ bg: 'blue.600' }}
                backdropFilter="blur(10px)"
              >
                View My Work
              </Button>
              <Button 
                as={Link} 
                to="/contact" 
                size="lg" 
                variant="outline" 
                color="white"
                borderColor="blue.400"
                _hover={{ bg: 'whiteAlpha.100' }}
              >
                Get in Touch
              </Button>
            </HStack>

            <HStack spacing={6} pt={8}>
              <Link href="https://www.facebook.com/enziluke.torrento?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#63B3ED' }} />
              </Link>
              <Link href="https://mail.google.com/mail/u/0/?hl=en#inbox">
                <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ color: '#63B3ED' }} />
              </Link>
            </HStack>
          </VStack>

          <Box 
            flex={1} 
            display={{ base: 'none', md: 'block' }}
            position="relative"
            maxW="450px"
          >
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              width="300px"
              height="300px"
              background="rgba(49, 130, 206, 0.1)"
              borderRadius="full"
              filter="blur(40px)"
              zIndex={0}
            />
            <Box
              borderRadius="2xl"
              overflow="hidden"
              border="2px solid"
              borderColor="blue.500"
              position="relative"
              zIndex={1}
              boxShadow="2xl"
              h="500px"
            >
              <Image
                src="/profile.jpg"
                alt="Enzi Luke Torrento"
                width="100%"
                height="100%"
                objectFit="cover"
                loading="eager"
                onError={(e) => {
                  console.log('Image load error:', e);
                  e.target.src = 'https://via.placeholder.com/500x600?text=Your+Photo+Here';
                }}
              />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Home;
