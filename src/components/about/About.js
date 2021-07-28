import {
  Box,
  Icon,
  Flex,
  HStack,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import { ArrowRight } from "phosphor-react";
import Section from "@/components/Section";

const AboutText = () => (
  <>
    <Stack
      spacing={8}
      fontSize={["lg", null, "xl"]}
      mb={4}
      lineHeight={7}
      letterSpacing="-0.04px"
    >
      <Text mt={3}>
        I’m still figuring out what my life would look like here, but for now,
        I’m happy to share I’m a curious learner of all things. My passions are
        driven by finding the connections between art, human nature, and numbers
        to build memorable experiences.
      </Text>
      <Box>
        <Text fontWeight="bold" mb={2}>
          There are two core mantras I like to live my life by:
        </Text>
        <Stack spacing={2}>
          <HStack>
            <Icon as={ArrowRight} />
            <Text>Do difficult things because they are the most rewarding</Text>
          </HStack>
          <HStack>
            <Icon as={ArrowRight} />
            <Text>Seek discomfort</Text>
          </HStack>
        </Stack>
      </Box>

      <Text>
        In my free time, I’m usually surfing new stuff about modern technology, binge-watching food
        vlogs in youtube, playing video games, starting a side project
        (with hopes to not abandon it), or learning about investment psychology.
      </Text>
    </Stack>
  </>
);

const About = () => {
  return (
    <>
      <Flex mt={24} justifyContent="flex-end" flexDirection="column">
        <Stack spacing={4}>
          <Section header="About">
            <Heading mb={4}>Noor</Heading>
            <AboutText />
            <Text>This website is still a work in progress, bear with me.</Text>
          </Section>
        </Stack>
      </Flex>
    </>
  );
};

export default About;
