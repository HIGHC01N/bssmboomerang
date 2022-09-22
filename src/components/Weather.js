import React from 'react';
import { Center } from '@chakra-ui/react';
import { Container } from '@chakra-ui/layout';
import Content from './Content';
import Header from './Header';


export function Weather() {
  return (
    <Center minH="100vh">
      <Container maxW="xl" flexFlow="column">
        <Header />
        <Content />
      </Container>
    </Center>
  );
}

export default Weather;