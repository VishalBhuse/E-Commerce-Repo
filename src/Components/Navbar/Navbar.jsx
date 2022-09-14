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
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillBagPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
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
              <MenuList fontSize={"13px"} cursor="unset">
                {/* <MenuItem> */}
                <HStack spacing={3} alignItems="center" justify="center" w="90%" m="auto">
                  <Image
                    boxSize="2.3rem"
                    src={isAuthenticated ? user.picture : "./img/logo.jpg"}
                    alt="Fluffybuns the destroyer"
                    mr="25px"
                  />
                  <VStack align={"left"} textAlign={isAuthenticated ? "left" : "center"} >
                    <Text
                    fontWeight={"600"}
                      color={"tomato"}
                      fontSize="19px"
                      textTransform={"capitalize"}
                    >
                      {isAuthenticated ? user.nickname : "Welcome To Our World"}
                    </Text>
                    <Text color={"tomato"} fontSize="15px">
                      {isAuthenticated ? user.name : ""}
                    </Text>
                  </VStack>
                {/* </MenuItem> */}
                </HStack>
                <hr />
                {isAuthenticated ? (
                  <MenuItem>
                    <Button
                      w="100%"
                      size="md"
                      colorScheme={"red"}
                      onClick={() =>
                        logout({ returnTo: window.location.origin })
                      }
                    >
                      Log-out
                    </Button>
                  </MenuItem>
                ) : (
                  <MenuItem fontWeight={"600"}>
                    <Button
                      w="100%"
                      size="md"
                      colorScheme={"green"}
                      onClick={() => loginWithRedirect()}
                    >
                      {" "}
                      Login{" "}
                    </Button>
                  </MenuItem>
                )}
                {/* {!isAuthenticated ? (
                  <MenuItem fontWeight={"600"}>
                    <Button
                      onClick={() =>
                        logout({ returnTo: window.location.origin })
                      }
                      w="100%"
                      size="md"
                      colorScheme={"red"}
                    >
                      Log-Out
                    </Button>
                  </MenuItem>
                ) : (
                  <MenuItem fontWeight={"600"}>
                    <Button
                      onClick={() => loginWithRedirect()}
                      w="100%"
                      size="md"
                      colorScheme={"green"}
                    >
                      Login
                    </Button>
                  </MenuItem>
                )} */}
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
