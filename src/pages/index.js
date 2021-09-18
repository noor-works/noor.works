import Project from "@/components/Projects";
import Current from "@/components/Current";
import Item from "@/components/Item";
import Shell from "@/components/Shell";
import Section from "@/components/Section";
import {
  PaperPlaneTilt,
  DiscordLogo,
  TwitterLogo,
} from "phosphor-react";
import {
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  Link,
  Box,
  useToast,
  useColorMode,
} from "@chakra-ui/react";

import NextLink from "next/link";

import { useClipboard } from "use-clipboard-copy";
import ActionButton from "@/components/core/ActionButton";

const SecondaryBtn = ({ children, icon, ...rest }) => {
  const { colorMode } = useColorMode();
  return (
    <Button
      variant="link"
      color="trueGray.500"
      fontWeight="regular"
      leftIcon={icon}
      _hover={{
        color: colorMode === "light" ? "blueGray.900" : "blueGray.50",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default function Home() {
  const toast = useToast();
  const clipboard = useClipboard({
    onSuccess() {
      toast({
        description: "Copied username to clipboard",
        status: "success",
        duration: "1500",
      });
    },

    onError() {
      toast({
        description: "Hm, couldn't copy the username..",
        status: "error",
        isClosable: true,
      });
    },
  });

  return (
    <>
      <Shell>
        <Flex
          // py={[0, null, 24]}
          // h={["90vh", null, "50vh"]}
          mt={24}
          mb={8}
          justifyContent="flex-end"
          flexDirection="column"
        >
          <Heading mb={4}>Hi, my name is Noor</Heading>
          <Box lineHeight={9}>
            <Text fontSize={["lg", null, "xl"]} mb={4}>
              My goal is pretty simple, build great things with great people. If
              we can work together to achieve that,{" "}
              <Link
                href="mailto:info@noor.works"
                borderBottom="1px solid"
                pb="3px"
                _hover={{ color: "teal.500" }}
              >
                I&apos;d love to chat 👋
              </Link>
              .
            </Text>
          </Box>
          <NextLink href="/about">
            <ActionButton mt={3}>More about me →</ActionButton>
          </NextLink>
        </Flex>
        <Current />
        <Section header="Experience">
          <Stack spacing={8}>
            <Item
              role="Self Taught Developer"
              company="noor.works"
              date="June 2019 - Present"
              link="https://noor.works/"
            />
          </Stack>
        </Section>
        <Section header="Projects">
          <Stack spacing={8}>
            <Project
              title="My Website"
              description="That's what I have now to showcase as my portfolio"
              repo="noor.works"
              demo={true}
              code={true}
            />
            <Project
              title="Hitek"
              description="A ecommerce website made with Wordpress and Woocommerce."
              repo="hitek"
              demo={true}
              code={false}
            />
          </Stack>
        </Section>
        <Section header="Contact">
          <Stack spacing={4} mb={7}>
            <Text>
              I love connecting with new people to learn from and am always more
              than willing to help with questions you may have.
            </Text>
          </Stack>
          <Stack align="flex-start" spacing={3}>
            <Link
              href="mailto:info@noor.works"
              mb="-4px"
              _hover={{ textDecoration: "none" }}
            >
              <SecondaryBtn icon={<PaperPlaneTilt />}>
                Send an email
              </SecondaryBtn>
            </Link>
            <SecondaryBtn
              icon={<DiscordLogo />}
              onClick={() => clipboard.copy("noor.works")}
            >
              Chat on Discord – noor.works
            </SecondaryBtn>
            <Link
              href="https://twitter.com/noor.works"
              _hover={{ textDecoration: "none" }}
              isExternal
            >
              <SecondaryBtn icon={<TwitterLogo />}>
                DM me on Twitter
              </SecondaryBtn>
            </Link>
          </Stack>
        </Section>
      </Shell>
    </>
  );
}
