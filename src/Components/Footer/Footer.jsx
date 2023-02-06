import {
  Box,
  chakra,
  Container,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  HStack,
} from "@chakra-ui/react";
import { FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Image
          h="10vh"
          src={"https://ecommercemernapp.vercel.app/img/brandlogo.jpg"}
        />
        <Stack direction={"row"} fontWeight="600" spacing={6}>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/faq"}>Faq</Link>
          <Link to={"/review"}>Reviews</Link>
          <Link to={"/help"}>Help</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <HStack>
            <Image src="/img/logo.jpg" h="50px" />
            <Text fontWeight="600">E-commerce Webiste @ 2022</Text>
          </HStack>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"FaGithub"}
              href={"https://github.com/VishalBhuse/E-Commerce-Repo"}
            >
              <FaGithub />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"https://www.youtube.com/"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton
              label={"Instagram"}
              href={"https://www.instagram.com/"}
            >
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
