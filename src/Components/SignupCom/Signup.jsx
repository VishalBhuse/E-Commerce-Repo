
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useReducer, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import style from "./Signup.module.css";
import { Link as RouterLink } from "react-router-dom";
import { saveData } from "../../utils/localStorage";

const reducer = (state, action) => {
  switch (action.type) {
    case "first_name": {
      return {
        ...state,
        first_name: action.payload,
      };
    }

    case "last_name": {
      return {
        ...state,
        last_name: action.payload,
      };
    }

    case "email": {
      return {
        ...state,
        email: action.payload,
      };
    }

    case "password": {
      return {
        ...state,
        password: action.payload,
      };
    }
  }
  return state;
};

const initState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

export function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [state, dispatch] = useReducer(reducer, initState);
  console.log("state:", state);

  const signupHandler = () => {
    saveData("user Details", state)
  }

  return (
    <Flex
      minH={"80vh"}
      align={"center"}
      justify={"center"}
      // bg={useColorModeValue("gray.50", "gray.800")}
      className={style.container}
    >
      <Stack
        // border={"2px solid blue"}
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        py={12}
        px={6}
      >
        <Stack align={"center"}>
          <Heading
            fontSize={"2rem"}
            textAlign={"center"}
            color={"#12284c"}
            marginBottom={"18px"}
          >
            CREATE ACCOUNT
          </Heading>
          <Text fontSize={"md"} color={"gray"} width={"90%"}>
            Complete the form below to create a bluemercury.com account.
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            {/* <HStack> */}
            {/* <Box> */}
            <FormControl id="firstName" isRequired>
              {/* <FormLabel>First Name</FormLabel> */}
              <Input
                type="text"
                placeholder="First Name*"
                value={state.first_name}
                onChange={(e) =>
                  dispatch({ type: "first_name", payload: e.target.value })
                }
              />
            </FormControl>
            {/* </Box> */}
            {/* <Box> */}
            <FormControl id="lastName" isRequired>
              {/* <FormLabel>Last Name</FormLabel> */}
              <Input
                type="text"
                placeholder="Last Name*"
                value={state.last_name}
                onChange={(e) =>
                  dispatch({ type: "last_name", payload: e.target.value })
                }
              />
            </FormControl>
            {/* </Box> */}
            {/* </HStack> */}
            <FormControl id="email" isRequired>
              {/* <FormLabel>Email address</FormLabel> */}
              <Input
                type="email"
                placeholder="Email*"
                value={state.email}
                onChange={(e) =>
                  dispatch({ type: "email", payload: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="password" isRequired>
              {/* <FormLabel>Password</FormLabel> */}
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password*"
                  value={state.password}
                  onChange={(e) =>
                    dispatch({ type: "password", payload: e.target.value })
                  }
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"#12284c"}
                color={"white"}
                _hover={{
                  bg: "#12284c",
                }}
                onClick={signupHandler}
              >
                Create Account
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"} fontSize={"sm"} color={"gray"}>
                Already have a bluemercury.com account?{" "}
                <RouterLink  to='/login' className={style.link}>
                  Sign In
                </RouterLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

//     </div>
//   )
// }
