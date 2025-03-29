import React from 'react';
import { Box, Flex, Container } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="gray.900" px={4} position="fixed" width="100%" top={0} zIndex={1000} boxShadow="dark-lg">
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="flex-end">
          <Flex gap={8}>
            <Link to="/" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>
              Home
            </Link>
            <Link to="/projects" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>
              Projects
            </Link>
            <Link to="/about" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>
              About
            </Link>
            <Link to="/contact" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>
              Contact
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
