import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

import { Box, Heading, Text, VStack, Input } from "@chakra-ui/react";
import { useState } from "react";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "NProject" },
    { name: "description", content: "Welcome to My Project!" },
  ];
}

const Projects = () => {
  const [inputText, setInputText] = useState("");
  return (
    <Box maxW="md" py="10">
      <VStack gap="6" alignItems="flex-start">
        <Heading size="lg">
          Input Here
          <Heading />
          <Input
            placeholder="input here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            size="lg"
          />
          <Box
            p="6"
            borderWidth="1px"
            borderRadius="md"
            bg="gray.50"
            _dark={{ bg: "gray.800" }}
          >
            <Text fontSize="xl" minH="8">
              {inputText || "Nonthing Entered yet"}
            </Text>
          </Box>
        </Heading>
      </VStack>
    </Box>
  );
};
export default Projects;
