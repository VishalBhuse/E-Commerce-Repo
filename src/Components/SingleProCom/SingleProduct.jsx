import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import { addtocart, getCart } from "../../Redux/CartReducer/action";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TOCART_SUCCESS,
  GET_CART_SUCCESS,
} from "../../Redux/CartReducer/actionTypes";

export const SingleProduct = () => {
  const toast = useToast();
  const [isLoading, setIsloading] = useState(true);
  const { id } = useParams();
  const { category } = useParams();
  const [currentProduct, setcurrentProduct] = useState({});
  const [currentImage1, setcurrentImage1] = useState("");
  const [currentImage2, setcurrentImage2] = useState("");
  const [activeImage, setActiveImage] = useState(currentImage1);
  const dispatch = useDispatch();
  const CartItem = useSelector((state) => state.Cartreducer.AddtoCart);
  console.log(CartItem, "use Selactor");

  const getData = () => {
    axios
      .get(`https://ecommercecombine.herokuapp.com/${category}/${id}`)
      .then((res) => {
        // console.log(res.data);
        setcurrentProduct(res.data);
        setcurrentImage1(res.data.src);
        setcurrentImage2(res.data.src2);
        setActiveImage(res.data.src);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handdleSubmit = () => {
    toast({
      title: "Product added to cart",
      position: "top",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    dispatch({
      type: GET_CART_SUCCESS,
      payload: [...CartItem, currentProduct],
    });
  };

  return (
    <>
      <SimpleGrid
        bg="gray.100"
        p="3"
        py="16"
        color={"#5F6F94"}
        columns={[1, 1, 1, 2]}
        my="5"
      >
        <Box w="100%" p="2">
          <HStack alignItems={"flex-start"}>
            <Box w={["100%", "100%", "40%"]}>
              <Image
                w={category == "laptop" ? "80%" : "50%"}
                m="0 auto"
                height={category == "laptop" ? "200px" : "300px"}
                src={currentImage1}
              />
            </Box>
            <Box w={["100%", "100%", "60%"]}>
              <Image
                w={category == "laptop" ? "100%" : "60%"}
                m="auto"
                height={category == "laptop" ? "400px" : "450px"}
                src={currentImage1}
              />
            </Box>
          </HStack>
        </Box>
        <Box w="100%" p="2">
          <Box m="auto" w="90%">
            <Heading as="h4" size="md" textTransform={"capitalize"}>
              {currentProduct.title}
            </Heading>
            <UnorderedList my="5">
              <ListItem>{currentProduct.displaySize}</ListItem>
              <ListItem>{currentProduct.os}</ListItem>
              <ListItem>{currentProduct.processor}</ListItem>
              <ListItem>{currentProduct.ram}</ListItem>
              <ListItem>{currentProduct.storege}</ListItem>
              <ListItem>{currentProduct.warranty}</ListItem>
            </UnorderedList>
            <Text fontWeight={"600"}>BEST SELLER CONCIOUS BEAUTY</Text>
            <HStack my="5">
              <Text fontSize={"20px"} fontWeight={"600"}>
                ₹ {currentProduct.price}
              </Text>
              <Text
                textDecoration={"line-through"}
                fontSize={"12px"}
                fontWeight={"600"}
              >
                ₹ {currentProduct.offerPrice}
              </Text>
            </HStack>
            <Box m="auto" w="90%">
              <Button
                w="100%"
                h="10vh"
                p="20px"
                fontSize="20px"
                borderRadius={0}
                colorScheme="facebook"
                onClick={handdleSubmit}
              >
                Add to Cart ₹ {currentProduct.price}
              </Button>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </>
  );
};
