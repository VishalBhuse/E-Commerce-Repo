import {
  Box,
  Button,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_CART_SUCCESS } from "../../Redux/CartReducer/actionTypes";

export const CartShowList = (props) => {
  const [count, setCount] = useState(props.quantity);
  const [abovethreeOrder, setAbovethreeOrder] = useState(false);


  const handdleIncrement = (value) => {
    if (value == 1 && count < 5) {
      setCount(count + value);
      props.handleQuantityChange(props._id,count+1)
    } else if (value === -1 && count > 1) {
      setCount(count + value);
      props.handleQuantityChange(props._id,count-1)
    }
  };
  
  useEffect(() => {
    if (count == 5) {
      setAbovethreeOrder(true);
    } else {
      setAbovethreeOrder(false);
    }
  }, [count]);


  return (
    <Box>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        gap="20px"
        justifyContent={"space-between"}
      >
        <Stack direction={"row"}>
          <Box w={"120px"} h="150px">
            <Image src={props.src} />
          </Box>
          <Box width={"180px"}  overflow={"hidden"} >
            <Text>{props.title}</Text>
            {/* <Text color={"gray"}>{vendor}</Text> */}
            {/* <Text color={"#dcdcdc"}>{type}</Text> */}
            <Box>{abovethreeOrder ? <Text>Limit: 5 Per Order</Text> : ""}</Box>
          </Box>
        </Stack>
        <Box>
          <Box display={"flex"} justifyContent="space-between">
            <Text color={"gray"}>
              ₹ {props.price.toLocaleString("hi-IN")}
            </Text>
          </Box>
        </Box>
        <Box
          display={"block"}
          h="30px"
          mt="1px"
          w={"100px"}
          justifyContent="space-around"
          textAlign="center"
        >
          <Box
            display={"flex"}
            h="30px"
            mt="10px"
            w={"100px"}
            justifyContent="space-around"
            textAlign="center"
          >
            <Button
              bgColor="#f8f8f8"
              fontSize={"20px"}
              borderRadius="0px"
              border="1px black solid"
              w={"40px"}
              h="30px"
              _hover={{
                cursor: "pointer",
              }}
              onClick={() => handdleIncrement(-1)}
            >
              -
            </Button>
            <Box
              bgColor="#ffffff"
              border="1px black solid"
              h="30px"
              w="40px"
              m={"auto"}
            >
              {count}
            </Box>
            <Button
              borderRadius="0px"
              bgColor="#f8f8f8"
              fontSize={"20px"}
              border="1px black solid"
              w={"40px"}
              h="30px"
              onClick={() => handdleIncrement(1)}
              _hover={{
                cursor: "pointer",
              }}
            >
              +
            </Button>
          </Box>

          <Box>
            <Text
              _hover={{
                cursor: "pointer",
              }}
              onClick={()=>props.handlleDelete(props._id)}
            >
              Remove
            </Text>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent="space-between">
          <Text color={"gray"}>
            ₹ {(count * props.price).toLocaleString("hi-IN")}
          </Text>
        </Box>
      </Box>
      <Box borderBottom={"1px solid #dcdcdc"} mt="3" mb={"3"} ></Box>
      
    </Box>
  );
};
