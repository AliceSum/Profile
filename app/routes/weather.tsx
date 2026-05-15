import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
//import { HomePage } from "../view/home";
import { Box, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NProject" },
    { name: "description", content: "Welcome to My Project!" },
  ];
}

const Weather = () => {
  const [info, setInfo] = useState("");
  const LA_api_request =
    "https://api.open-meteo.com/v1/forecast?latitude=34.0522&longitude=-118.2437&current=temperature_2m&hourly=temperature_2m&timezone=America%2FLos_Angeles&forecast_days=1";
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Obtain the open-Meteo weather data
        const response = await fetch(LA_api_request);
        if (!response.ok) throw new Error("weapon api request failed");
        const data = await response.json();
        const currentTemp = data.current.temperature_2m;
        const currentTime = data.current.time;
        const currentIndex = data.hourly.time.indexOf(currentTime);

        const nextHourTemp = data.hourly.temperature_2m[currentIndex + 1];
        const nextNextHourTemp = data.hourly.temperature_2m[currentIndex + 2];

        setInfo(`Current Temperature is ${currentTemp}°C.
The temperature in the next one hour is ${nextHourTemp}°C.
The temperature in the next two hours is ${nextNextHourTemp}°C.`);

        // 2. Store those data into express backend database.
        const saveRes = await fetch("http://localhost:3001/api/weather", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            temperature: currentTemp,
            time: currentTime,
          }),
        });
        if (!saveRes.ok)
          throw new Error("Savining data to the database failed");
        const saveResult = await saveRes.json();

        console.log(
          "result of saving weather data into database: ",
          saveResult,
        );
      } catch (error) {
        console.error("Error occurs: ", error);
        setInfo("Error: Unable to fetch or save weather data");
      }
    };

    fetchData();
  }, []);

  return (
    <Box maxW="md" py="10">
      <VStack gap="6" alignItems="flex-start">
        <Heading size="lg"> Welcome, my name is Alice.</Heading>
        <Text fontSize="xl" color="gray.600" maxW="2xl">
          Please Click the upper right "Project" button for the project.
        </Text>
        <Text fontSize="xl" color="gray.600" maxW="2xl">
          {info || "No data yet."}
        </Text>
      </VStack>
    </Box>
  );
};
export default Weather;
