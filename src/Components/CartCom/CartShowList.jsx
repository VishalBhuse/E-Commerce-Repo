import {
  Box,
  Button,
  Image,
  SimpleGrid,
  Divider,
  ButtonGroup,
  Text,
} from "@chakra-ui/react";
import { GrFormAdd, GrSubtract } from "react-icons/gr";

import React, { useEffect } from "react";
import { useState } from "react";

export const CartShowList = (props) => {
  const [count, setCount] = useState(props.quantity);
  const [abovethreeOrder, setAbovethreeOrder] = useState(false);

  const handdleIncrement = (value) => {
    if (value === 1 && count < 5) {
      setCount(count + value);
      props.handleQuantityChange(props._id, count + 1);
    } else if (value === -1 && count > 1) {
      setCount(count + value);
      props.handleQuantityChange(props._id, count - 1);
    }
  };

  useEffect(() => {
    if (count === 5) {
      setAbovethreeOrder(true);
    } else {
      setAbovethreeOrder(false);
    }
  }, [count]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  

  return (
    <Box>
      <SimpleGrid
        textAlign="center"
        columns={[2, 2, 3, 6]}
        spacing={10}
        alignItems="center"
        justifyContent={"space-around"}
      >
        <Box p="5">
          <Image src={props.src} />
        </Box>
        <Box>
          <Text
            color={"gray"}
            noOfLines={2}
            fontSize={"15px"}
            fontweight={"700"}
          >
            {props.title}
          </Text>
          <Box>
            {abovethreeOrder ? (
              <Text color="red" fontweight="600">
                Limit: 5 Per Order
              </Text>
            ) : (
              ""
            )}
          </Box>
        </Box>
        <Box>
          <Text fontSize={"15px"} fontweight={"700"} color={"gray"}>
            ₹ {props.price.toLocaleString("hi-IN")}
          </Text>
        </Box>
        <Box textAlign="center">
          <Box
            display={"flex"}
            h="30px"
            mt="10px"
            m="auto"
            w={"100px"}
            textAlign="center"
          >
            <ButtonGroup size="md" isAttached>
              <Button
                borderRadius={0}
                colorScheme="blackAlpha"
                onClick={() => handdleIncrement(1)}
              >
                <GrFormAdd />
              </Button>
              <Button>{count}</Button>
              <Button
                onClick={() => handdleIncrement(-1)}
                borderRadius={0}
                colorScheme="blackAlpha"
              >
                <GrSubtract />
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
        <Box>
          <Button
            onClick={() => props.handlleDelete(props._id)}
            colorScheme="orange"
            fontSize={"15px"}
          >
            Remove
          </Button>
        </Box>
        <Box>
          <Text fontSize={"15px"} fontweight={"700"} color={"gray"}>
            ₹ {(count * props.price).toLocaleString("hi-IN")}
          </Text>
        </Box>
      </SimpleGrid>
      <Divider
        w="100%"
        my="5"
        orientation="horizontal"
        size="10px"
        border="2"
        opacity={8}
      />
    </Box>
  );
};
