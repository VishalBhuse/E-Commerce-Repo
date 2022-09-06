import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const About = () => {
  return (
    <Box>
      <Box
        backgroundImage={
          "https://i01.appmifile.com/webfile/globalimg/in/service/faq-banner.png"
        }
        height="200px"
        color="#fff"
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
      >
        <Heading fontSize={"40px"}>About US</Heading>
      </Box>
      <Box textAlign={'justify'} m="60px auto" w="80%">
        <Text mt="15px">
          Discounts vary product to product. Product images shown are for
          representational purpose only, actual product may vary.
        </Text>
        <Text mt="15px">
          Samsung Blue Fest Sale is the best time to purchase mobile phones,
          tablets, television, soundbar, refrigerator, washing machine, air
          conditioners, wearables, kitchen care, accessories, laptop and
          monitor. Explore the best offers and great deals on all major
          electronic categories during the sale. Unlock the great deals &
          discounts by referring to friends and family! Purchase electronic
          items at the Samsung Blue Fest Sale and get additional benefits. What
          are you waiting for? It's time to buy more & save more!
        </Text>
        <Text mt="15px">
          1. Up to ₹ 20000 instant cashback* on HDFC and ICICI bank cards
        </Text>
        <Text mt="15px">2. Up to ₹ 4500 off* on App purchase</Text>
        <Text mt="15px">3. Avail up to 69% off* on selected products</Text>
        Avail great deals and discounts with Samsung Blue Fest Sale:
        <Text mt="15px">
          Grab exclusive offers and benefits with the latest launch Galaxy Z
          Flip4, Galaxy Z Fold4, Galaxy Z Flip4 Bespoke Edition. Samsung Blue
          Fest Sale is a great chance to own premium products like Galaxy M33
          5G, Galaxy A73 5G, Galaxy A53 5G, Galaxy Book2 Pro 360, Neo QLED 4K
          Smart TV, The Frame QLED 4K TV, Twin Cooling Plus™ Double Door
          Refrigerator, Side by Side with SpaceMax™ Technology, Digital Inverter
          Technology Double Door Refrigerator, Front Load with AI Control &
          SmartThings Connectivity, WindFree™ Split AC and much more. Fulfil
          your wishlist with great deals.
        </Text>
        <Text mt="15px">
          Browse the range of high-quality Samsung electronic items. Our
          electronic store has got everything in it for you, at the most
          compelling price range. Our goal is to grant customers extra benefits,
          choices, and freedom. We assist our customers throughout the shopping
          journey until the final transaction. Shop your favourite products from
          the Samsung Blue Fest Sale and get the finest discounts, deals,
          offers, cashback, and no-cost EMI options. The Samsung Blue Fest Sale
          is the best spot to shop for all your favourite items.
        </Text>
      </Box>
    </Box>
  );
};
