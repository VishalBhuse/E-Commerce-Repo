import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiFillStar, AiTwotoneHeart } from "react-icons/ai";
import { GrFormAdd, GrSubtract } from "react-icons/gr";

export const QuickPro = (props) => {
  const [qty, setqty] = useState(1)
  const { category } = useParams();
  return (
    <Box>
      <Stack direction={"row"}>
        <Box w={"50%"}>
          <Img
            cursor={"pointer"}
            src={props.item.src}
            w="100%"
            h="300px"
            alt=""
            srcSet=""
          />
        </Box>
        <Box w={"50%"} px={2}>
          <Stack direction={"column"}>
            <Text fontSize={"md"} fontWeight={"200"}>
              {props.item.title}
            </Text>
            <Text fontSize={"md"} fontWeight={"600"}>
              ₹ {props.item.price}
            </Text>
          </Stack>
          <Stack direction={"row"} mb={"25px"}>
            <AiFillStar color="gold" />
            <AiFillStar color="gold" />
            <AiFillStar color="gold" />
            <AiFillStar color="gold" />
          </Stack>
          <Button borderRadius={0} w="100%" my={2} variant="outline">
            ONLY A FEW LEFT!
          </Button>
          <Stack direction={"row"} justify="space-evenly">
            <ButtonGroup size="md" isAttached variant="outline">
              <Button onClick={()=>setqty(qty+1)} disabled={qty===5}>
                <GrFormAdd />
              </Button>
              <Button disabled={true}>{qty}</Button>
              {/* <IconButton aria-label='Add to friends'>{1}</IconButton> */}
              <Button onClick={()=>setqty(qty-1)} disabled={qty===1}>
                <GrSubtract />
              </Button>
            </ButtonGroup>

            <Button
              leftIcon={<AiTwotoneHeart />}
              colorScheme="black"
              variant="outline"
              borderRadius={0}
            >
              ADD TO WISHLIST
            </Button>
          </Stack>

          <Button
            borderRadius={0}
            w="100%"
            my={2}
            variant="outline"
            colorScheme={"#12284c"}
          >
            ADD TO BAG
          </Button>
        </Box>
      </Stack>
      <Center>
        <Link to={`/${category}/${props.item._id}`}>
          <Text fontSize={"lg"} fontWeight={"600"}>
            VIEW FULL DETAILS
          </Text>
        </Link>
      </Center>
    </Box>
  );
};
