import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  Button,
  Container,
} from "@chakra-ui/react";
import { Link } from "react-router";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" minH="100vh">
      {/* 1. Navbar */}
      <Box
        as="header"
        borderBottomWidth="1px"
        bg="white"
        _dark={{ bg: "gray.900" }}
      >
        <Container maxW="6xl">
          <Flex h="16" alignItems="center" justifyContent="space-between">
            {/* left side Logo / Website name */}
            <Heading as="h1" size="lg" letterSpacing="tight">
              <Link to="/">Alice</Link>
            </Heading>
            {/* right side menu link */}
            <HStack gap="4">
              <Button variant="ghost" asChild>
                <Link to="/">Home</Link>
              </Button>

              <Button variant="ghost" asChild>
                <Link to="/projects">Projects</Link>
              </Button>

              <Button variant="ghost" asChild>
                <Link to="/weather">Weather</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/contact">Contact</Link>
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Body */}
      {/* make it flex 1 to fullfill all the space between Navbar and Footer */}
      <Box as="main" flex="1" py="8">
        <Container maxW="6xl">{children}</Container>
      </Box>

      {/* 3. Footer */}
      <Box as="footer" borderTopWidth="1px" py="6" mt="auto">
        <Container maxW="6xl">
          <Text textAlign="center" color="gray.500" fontSize="sm">
            @ {new Date().getFullYear()} Alice Sum. All rights reserved.
          </Text>
        </Container>
      </Box>
    </Flex>
  );
}
