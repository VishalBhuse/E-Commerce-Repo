import {
  Box,
  Button,
  Heading,
  Image,
  SlideFade,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { DeleteIcon } from "@chakra-ui/icons";
import { deleteitem, getCart } from "../../Redux/CartReducer/action";
export const CartShowList = (props) => {
  const { price, type, title, quantity, vendor, id } = props;
  const { src } = props.images[0];
  const [count, setCount] = useState(quantity);
  const [abovethreeOrder, setAbovethreeOrder] = useState(false);
  const dispatch = useDispatch();

  const handdleUpdate = async (count) => {
    await axios
      .patch(`http://localhost:8080/addtocart/${id}`, {
        quantity: count,
        priceMax: count * price,
      })
      .then(() => getCart(dispatch));
  };

  const handdleIncrement = (value) => {
    if (value == 1 && count < 3) {
      setCount(count + value);
    } else if (value === -1 && count > 1) {
      setCount(count + value);
    }
  };
  useEffect(() => {
    if (count == 3) {
      setAbovethreeOrder(true);
    } else {
      setAbovethreeOrder(false);
    }
  }, [count]);
  useEffect(() => {
    handdleUpdate(count);
  }, [count]);
  // console.log(abovethreeOrder)
  const handlleDelete = async () => {
   
    deleteitem(dispatch, id).then(() => {
      getCart(dispatch);
    });
  };

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
            <Image src={src} />
          </Box>
          <Box width={"180px"} overflow={"hidden"} whiteSpace={"nowrap"}>
            <Text>{title}</Text>
            <Text color={"gray"}>{vendor}</Text>
            <Text color={"#dcdcdc"}>{type}</Text>
            <Box>{abovethreeOrder ? <Text>Limit: 3 Per Order</Text> : ""}</Box>
          </Box>
        </Stack>
        <Box>
          <Box display={"flex"} justifyContent="space-between">
            <Text color={"gray"}>
              ₹.
              {price.toLocaleString("hi-IN")}.00
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
              {quantity}
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
              onClick={handlleDelete}
            >
              Remove
            </Text>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent="space-between">
          <Text color={"gray"}>
            ₹.
            {(quantity * price).toLocaleString("hi-IN")}.00
          </Text>
        </Box>
      </Box>
      <Box borderBottom={"1px solid #dcdcdc"} mt="3" mb={"3"} ></Box>
      
    </Box>
  );
};
