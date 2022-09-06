import { WarningIcon } from "@chakra-ui/icons";
import { Box, Checkbox, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {  useSelector } from "react-redux";
import { AdditionalOffering } from "./AdditionalOffering";
import { CartShowList } from "./CartShowList";
import { ShopTopSellers } from "./ShopTopSellers";
import { SlidersPrivew } from "./SlidersPrivew";

export const MainCartBag = () => {
  const AddtoCart = useSelector((state) => state.Cartreducer.AddtoCart);

  const uniqueIds = [];

const unique = AddtoCart.filter(element => {
const isDuplicate = uniqueIds.includes(element.id);

if (!isDuplicate) {
  uniqueIds.push(element.id);

  return true;
}


return false;
});
let totalPrice=0
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
      <HStack spacing={"10px"} justifyContent={"flex-end"} h="50px" mr={"4%"}>
        <Box
          gap={"10px"}
          width="500px"
          fontSize={"20px"}
          display="flex"
          fontWeight={400}
          color={"#12284c"}
          bgColor={"#f4fafc"}
          h="50px"
          fontFamily={`"Montserrat Regular",sans-serif`}
          pl={10}
        >
          <Box mt="2">
            <WarningIcon color="red.500" w={5} h={5} />
          </Box>
          <Text mt="3" fontSize={"14px"} verticalAlign={"baseline"}>
            Sign up or Sign in to BlueRewards for Free Ground Shipping
          </Text>
        </Box>
      </HStack>

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
          Your cart ({AddtoCart.length} items)
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
        <HStack justifyContent={"space-between"} borderBottom={"1px solid #dcdcdc"} h="20" mb={"3"}>
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
          <Stack direction={"row"} justifyContent={"space-around"} gap={220} fontFamily={`"Montserrat Regular",sans-serif`}
          fontSize={"16px"}
          verticalAlign={"baseline"}
          lineHeight={"29px"}
          fontWeight={400}
          color={"gray"}>
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
              {
                  unique.map((item)=>
                  {
                    totalPrice+=item.priceMax
                      return  <CartShowList key={item.id} {...item} />
                  })
              }
         
          </Box>
      </Box>

      <AdditionalOffering totalPrice={totalPrice}/>
   </Box>
   <Box>
      <SlidersPrivew />
      <ShopTopSellers />
      </Box>
    </Box>

  );
};
