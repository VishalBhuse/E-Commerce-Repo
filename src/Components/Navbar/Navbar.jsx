import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Collapse,
  useColorModeValue,
  Image,
  useColorMode,
  useDisclosure,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillBagPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 99, height: "75px" }}>
      <Box>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Link to={"/"}>
              <Image
                src="https://ecommercemernapp.vercel.app/img/brandlogo.jpg"
                width="150px"
                height={"65px"}
              ></Image>
            </Link>

            <Flex
              display={{ base: "none", md: "flex" }}
              ml={10}
              alignItems={"center"}
            >
              <DesktopNav />
            </Flex>
          </Flex>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={4}
            alignItems={"center"}
            fontSize="20px"
            mr="10px"
          >
            <button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
            <Menu>
              <MenuButton>
                <AiOutlineUser />
              </MenuButton>
              <MenuList fontSize={"13px"}>
                <MenuItem>
                  <Image
                    boxSize="2rem"
                    src="https://cdn.modesens.com/static/img/20180905footer_logo.svg"
                    alt="Fluffybuns the destroyer"
                    mr="25px"
                  />
                  <VStack align={"left"}>
                    <Text>Earn Points</Text>
                    <Text color={"tomato"}>
                      Sign up to unlock all the benifits
                    </Text>
                  </VStack>
                </MenuItem>
                <hr />
                <MenuItem fontWeight={"600"}>
                  <Link to={"/invite"}> Login </Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <HStack>
              <Link to="/cart">
                <BsFillBagPlusFill />
              </Link>
            </HStack>
          </Stack>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
        <br />
      </Box>
    </div>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      <Box>
        <HStack spacing={"25px"} alignItems="center">
          <Link to={"/laptop"}>
            <Text
              fontSize={"15px"}
              fontWeight={"500"}
              _hover={{
                fontSize: "15px",
                borderBottom: "1px solid red",
              }}
            >
              Laptop
            </Text>
          </Link>
          <Link to={"/mobiles"}>
            <Text
              fontSize={"15px"}
              fontWeight={"500"}
              border="1px inherit"
              _hover={{
                fontSize: "15px",
                borderBottom: "1px solid red",
              }}
            >
              Mobile
            </Text>
          </Link>
          <Link to={"/review"}>
            <Text
              border="1px inherit"
              _hover={{
                fontSize: "15px",
                borderBottom: "1px solid red",
              }}
              fontSize={"15px"}
              fontWeight={"500"}
            >
              Reviews
            </Text>
          </Link>
          <Link to={"/about"}>
            <Text
              border="1px inherit"
              _hover={{
                fontSize: "15px",
                borderBottom: "1px solid red",
              }}
              fontSize={"15px"}
              fontWeight={"500"}
            >
              About Us
            </Text>
          </Link>
          <Link to={"/faq"}>
            <Text
              border="1px inherit"
              _hover={{
                fontSize: "15px",
                borderBottom: "1px solid red",
              }}
              fontSize={"15px"}
              fontWeight={"500"}
            >
              Faq
            </Text>
          </Link>
          <Link to={"/help"}>
            <Text
              border="1px inherit"
              _hover={{
                fontSize: "15px",
                borderBottom: "1px solid red",
              }}
              fontSize={"15px"}
              fontWeight={"500"}
            >
              Help
            </Text>
          </Link>
        </HStack>
      </Box>
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      <Box>
        <VStack fontWeight={"600"}>
          <Link to={"/laptop"}>Laptop</Link>
          <Link to={"/mobiles"}>Mobile</Link>
          <Link to={"/review"}>Reviews</Link>
          <Link to={"/about"}>About Us</Link>
          <Link to={"/faq"}>Faq</Link>
          <Link to={"/help"}>Help</Link>
        </VStack>
      </Box>
    </Stack>
  );
};
