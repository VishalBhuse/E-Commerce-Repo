import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { loadData } from "../../utils/localStorage";
import style from "./Login.module.css";
import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    
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
  email: "",
  password: "",
};

export function Login() {
  const [state, dispatch] = useReducer(reducer, initState);
  console.log("state:", state);

  const loginHandler = () => {
    let data = loadData("user Details")
    console.log('data:', data)

    if(state.email === data.email && state.password === data.password)
    {
      alert("Signed in successfully");
    }
    else{
      alert("Please enter valid credentials")
    }
  };

  return (
    <Flex
      minH={"80vh"}
      align={"center"}
      justify={"center"}
      // bg={useColorModeValue("gray.50", "gray.800")}
      // border={"2px solid black"}
      // border={"2px solid red"}
    >
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
      align={"center"}
        // py={12}
        // px={20}
        // border={"2px solid black"}
      >
        <Stack align={"center"}>
          <Heading fontSize={"2rem"} color={"#12284c"}>
            Login
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Please enter your e-mail and password
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          // boxShadow={"lg"}
          p={8}
          width={"700px"}
          margin="auto"
        >
          <Stack spacing={4}>
            <FormControl id="email">
              {/* <FormLabel>Email address</FormLabel> */}
              <Input
                type="email"
                placeholder="Email"
                // width={"60%"}
                isRequired
                value={state.email}
                onChange={(e) =>
                  dispatch({ type: "email", payload: e.target.value })
                }
              />
            </FormControl>
            <FormControl id="password">
              {/* <FormLabel>Password</FormLabel> */}
              <Input
                type="password"
                placeholder="Password"
                isRequired
                value={state.password}
                onChange={(e) =>
                  dispatch({ type: "password", payload: e.target.value })
                }
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                {/* <Link color={'blue.400'}>Forgot password?</Link> */}
              </Stack>
              <Button
                bg={"#12284c"}
                color={"white"}
                _hover={{
                  bg: "#12284c",
                }}
                onClick={loginHandler}
              >
                Login
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"} fontSize={"sm"} color={"gray"}>
                Don't have an account?{" "}
                <RouterLink to="/signup" className={style.link}>
                  Create one
                </RouterLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
