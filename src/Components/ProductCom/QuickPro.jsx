import {
  Box,
  Button,
  ButtonGroup,
  Center,
  HStack,
  Img,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AiFillStar, AiTwotoneHeart } from "react-icons/ai";
import { GrFormAdd, GrSubtract } from "react-icons/gr";
import { GET_CART_SUCCESS } from "../../Redux/CartReducer/actionTypes";
import { useDispatch, useSelector } from "react-redux";

export const QuickPro = (props) => {
  const [qty, setqty] = useState(1);
  const toast = useToast()
  const { category } = useParams();
  const dispatch = useDispatch()
  const CartItem = useSelector(state=>state.Cartreducer.AddtoCart)

  const AddToCard = () =>{
    toast({
      title: 'Product added to cart',
      position:"top",
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
  console.log(props.item);
    dispatch({ type: GET_CART_SUCCESS, payload:[...CartItem, props.item]});
  }
  return (
    <Box>
      <Stack direction={"row"} flexWrap="wrap" m="3">
        <Box w={["100%", "100%", "49%", "49%"]} m="auto">
          <Img
            src={props.item.src}
            m="auto"
            w={category == "laptop" ? "90%" : "40%"}
            h={category == "laptop" ? "250px" : "290px"}
            alt="prod"
          />
        </Box>
        <Box w={["100%", "100%", "100%", "49%"]} m="auto">
          <Text
            fontSize={"md"}
            fontWeight={"600"}
            textTransform={"capitalize"}
            textAlign={"justify"}
          >
            {props.item.title}
          </Text>
          <HStack justify={"space-between"}>
            <Box>
              <HStack>
                <Text fontSize={"md"} fontWeight={"600"}>
                  ₹ {props.item.price}
                </Text>
                <Text
                  textDecoration={"line-through"}
                  fontSize={"12px"}
                  fontWeight={"600"}
                >
                  ₹ {props.item.offerPrice}
                </Text>
                <Button size="xs" colorScheme={"green"}>
                  {props.item.discount}
                </Button>
              </HStack>
            </Box>
            <Box>
              <Button size="xs" colorScheme={"orange"}>
                Free Delivery
              </Button>
            </Box>
          </HStack>

          <Stack direction={"row"} mb={"14px"}>
            <AiFillStar color="gold" />
            <AiFillStar color="gold" />
            <AiFillStar color="gold" />
            <AiFillStar color="gold" />
          </Stack>

          <UnorderedList my="5">
            <ListItem>{props.item.displaySize}</ListItem>
            <ListItem>{props.item.os}</ListItem>
            <ListItem>{props.item.processor}</ListItem>
            <ListItem>{props.item.ram}</ListItem>
            <ListItem>{props.item.storege}</ListItem>
            <ListItem>{props.item.warranty}</ListItem>
          </UnorderedList>

          <HStack direction={"row"} justify="space-between">
            <ButtonGroup size="md" isAttached>
              <Button
                borderRadius={0}
                colorScheme="blackAlpha"
                onClick={() => setqty(qty + 1)}
                disabled={qty === 5}
              >
                <GrFormAdd />
              </Button>
              <Button>{qty}</Button>
              <Button
                borderRadius={0}
                colorScheme="blackAlpha"
                onClick={() => setqty(qty - 1)}
                disabled={qty === 1}
              >
                <GrSubtract />
              </Button>
            </ButtonGroup>
            <Button
              leftIcon={<AiTwotoneHeart />}
              borderRadius={0}
              colorScheme="green"
            >
              ADD TO WISHLIST
            </Button>
          </HStack>
          <Button
            borderRadius={0}
            onClick={()=>AddToCard()}
            w="100%"
            my={4}
            variant="outline"
            colorScheme={"whatsapp"}
          >
            ADD TO BAG
          </Button>

          <Link to={`/${category}/${props.item._id}`}>
            <Button
              w="100%"
              borderRadius={0}
              colorScheme="teal"
              fontSize={"lg"}
              fontWeight={"600"}
              textTransform={"capitalize"}
            >
              View Full Details
            </Button>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};
