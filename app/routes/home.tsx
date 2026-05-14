import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
//import { HomePage } from "../view/home";
import { Box, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "NProject" },
    { name: "description", content: "Welcome to My Project!" },
  ];
}

const Home = () => {
  const [inputText, setInputText] = useState("");
  return (
    <Box maxW="md" py="10">
      <VStack gap="6" alignItems="flex-start">
        <Heading size="lg"> Welcome, my name is Alice.</Heading>
        <Text fontSize="xl" color="gray.600" maxW="2xl">
          Please Click the upper right "Project" button for the project.
        </Text>
      </VStack>
    </Box>
  );
};
export default Home;
