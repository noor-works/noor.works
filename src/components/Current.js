import {
  Box,
  Text,
  HStack,
  Icon,
  Stack,
  Link,
} from "@chakra-ui/react";
import { MusicNotesSimple, Monitor, Bookmarks } from "phosphor-react";
import Section from "@/components/Section";

const CurrentItem = ({ icon, title, caption, link }) => {
  return (
    <HStack spacing={4}>
      <Icon fontSize="xl" as={icon} />
      <Box>
        <Link href={link} _hover={{ color: "teal.500" }} isExternal>
          <Text
            fontWeight="regular"
            maxW={["320px", null, "150px"]}
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {title}
          </Text>
          <Text fontSize="sm" color="trueGray.500">
            {caption}
          </Text>
        </Link>
      </Box>
    </HStack>
  );
};

const Current = () => {

  return (
    <Section header="Currently">
      <Stack
        spacing={8}
        direction={["column", null, "row"]}
        justifyContent="space-between"
        flexShrink="0"
      >
        <CurrentItem
          icon={MusicNotesSimple}
          title={"Oviman Repside"}
          caption={"Tanveer Evan"}
          link="https://soundcloud.com/nazmul-alam-joy/oviman-tanveer-evan-piran-khan-jovan-mehazabien-best-friend-3-drama"
        />

        <CurrentItem
          icon={Bookmarks}
          title={"Nextjs Mdx"}
          caption={"By Nextjs"}
          link="https://nextjs.org/blog/markdown"
        />
        <CurrentItem
          link="https://youtu.be/98JAXsI5D14"
          icon={Monitor}
          title={"Sir, I Love You"}
          caption={"Drama"}
        />
      </Stack>
    </Section>
  );
};

export default Current;
