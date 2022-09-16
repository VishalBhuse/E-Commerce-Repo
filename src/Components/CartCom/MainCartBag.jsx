import React, { useState } from "react";
import { Box, Button, Checkbox, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { CartShowList } from "./CartShowList";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { GET_CART_SUCCESS } from "../../Redux/CartReducer/actionTypes";


export const MainCartBag = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const AddtoCart = useSelector((state) => state.Cartreducer.AddtoCart);
  let totalPrice = 0;


  const HandleCheckout=()=>{
    navigate("/checkout")
  }

  const handlleDelete = (id) => {
    console.log(AddtoCart,id,"AddtoCart");
      let UpdateCart = AddtoCart.filter((item)=> item._id !== id)
      console.log(UpdateCart,"UpdateCart");
      dispatch({
        type: GET_CART_SUCCESS,
        payload: UpdateCart,
      });
    };

  
  return (
    <Box>
      <Box width={"80%"} m="auto">
        <Box pt="10" pb="10" fontFamily={`"Montserrat Regular",sans-serif`}>
          <Heading
            fontWeight={500}
            fontStyle="normal"
            fontSize={"28px"}
            lineHeight={"46.2px"}
            transition={"color .2s ease-in-out"}
            letterSpacing={"3px"}
            color={"#12284c"}
            textTransform={"uppercase"}
          >
            YOUR BAG
          </Heading>
        </Box>
      
        <Box mt="5" fontFamily={`"Montserrat Regular",sans-serif`}>
          <Heading
            letterSpacing={"1px"}
            fontSize="20px"
            lineHeight={"26px"}
            color={"#12284c"}
            fontWeight={400}
            as="h2"
            size="xl"
          >
            Your cart ({AddtoCart?.length} items)
          </Heading>
        </Box>
        <Box mt={6}>
          <Stack
            gap={"15px"}
            direction="row"
            fontSize="25px"
            color={"#12284c"}
            fontWeight={700}
            as="h2"
            size="xl"
          >
            <Checkbox size="lg">IS THIS ORDER A GIFT?</Checkbox>
          </Stack>
          <Text
            mt="5"
            fontFamily={`"Montserrat Regular",sans-serif`}
            fontSize={"14px"}
            verticalAlign={"baseline"}
            lineHeight={"19px"}
            fontWeight={500}
            color={"gray"}
            ml="10px"
          >
            The price of your order will be hidden on the gift receipt.
          </Text>
        </Box>
        <Box mt="10">
          <HStack
            justifyContent={"space-between"}
            borderBottom={"1px solid #dcdcdc"}
            h="20"
            mb={"3"}
          >
            <Box>
              <Heading
                letterSpacing={"1px"}
                fontSize="20px"
                lineHeight={"26px"}
                color={"#12284c"}
                fontWeight={400}
                as="h2"
                size="xl"
              >
                Ready to Ship
              </Heading>
            </Box>
            <Stack
              direction={"row"}
              justifyContent={"space-around"}
              gap={220}
              fontFamily={`"Montserrat Regular",sans-serif`}
              fontSize={"16px"}
              verticalAlign={"baseline"}
              lineHeight={"29px"}
              fontWeight={400}
              color={"gray"}
            >
              <Box>
                <Text>Price</Text>
              </Box>
              <Box>
                <Text>Quantity</Text>
              </Box>
              <Box>
                <Text>Total</Text>
              </Box>
            </Stack>
          </HStack>

          <Box mt="2">
            {AddtoCart?.map((item) => {
              totalPrice += item.price;
              return <CartShowList key={item.id} {...item} handlleDelete={handlleDelete}/>;
            })}
          </Box>
        </Box>
        {/* <AdditionalOffering totalPrice={totalPrice} /> */}
        <HStack justifyContent={"flex-end"}>
        <Heading size={"sm"}>SubTotal </Heading>
        <Text color={"#12284c"} fontSize="18px" fontWeight={600}>
        ₹. {totalPrice}
        </Text>
      </HStack>
      <HStack justifyContent={"flex-end"}>
        <Text
          mt="2"
          fontFamily={`"Montserrat Regular",sans-serif`}
          fontSize={"14px"}
          lineHeight={"19px"}
          fontWeight={500}
          color={"gray"}
        >
          Shipping, Taxes, Beauty Cards, and additional discounts applied at
          checkout
        </Text>
      </HStack>
      <HStack justifyContent={"flex-end"}>
        <Button
          w={"30%"}
          mt={8}
          size={"md"}
          py={"6"}
          bg="#12284c"
          fontFamily={"Roboto, sans-serif"}
          color={"white"}
          textTransform={"uppercase"}
          // onClick={() => navigate("/checkout")}
          onClick={HandleCheckout}
        >
          Checkout
        </Button>
      </HStack>
      
      </Box>
    </Box>
  );
};
