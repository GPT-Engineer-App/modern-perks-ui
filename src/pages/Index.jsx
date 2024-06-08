import React from "react";
import { Container, Box, VStack, Input, Button, Text, IconButton, HStack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaGoogle, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const bgGradient = useColorModeValue("linear(to-r, teal.500, green.500)", "linear(to-r, teal.200, green.200)");
  const iconColor = useColorModeValue("gray.800", "white");

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgGradient={bgGradient}>
      <Box position="absolute" top="1rem" right="1rem">
        <IconButton aria-label="Toggle dark mode" icon={useColorModeValue(<FaMoon />, <FaSun />)} onClick={toggleColorMode} />
      </Box>
      <VStack spacing={4} bg="white" p={8} borderRadius="lg" boxShadow="lg">
        <Text fontSize="2xl" fontWeight="bold">
          Welcome Back
        </Text>
        <Input placeholder="Email" variant="filled" />
        <Input placeholder="Password" type="password" variant="filled" />
        <Button colorScheme="teal" width="full">
          Login
        </Button>
        <Text>or login with</Text>
        <HStack spacing={4}>
          <IconButton aria-label="Login with Google" icon={<FaGoogle />} color={iconColor} />
          <IconButton aria-label="Login with LinkedIn" icon={<FaLinkedin />} color={iconColor} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
