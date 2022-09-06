import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {shopTopSellers} from "./sliderdata"
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { Pagination, Navigation } from "swiper";


export const ShopTopSellers = () => {
    
  return (
    <Box h="400px" mt="20" mb="10" fontFamily={`"Montserrat Regular",sans-serif`} color="#12284C">
      <Stack ml={"30%"}>

      <Heading size={"md"}letterSpacing="2px"  fontSize="24px" fontWeight={400} p="10">BEAUTY LOVERS LIKE YOU ALSO BOUGHT</Heading>
      </Stack >

       <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {shopTopSellers.map((item)=>
        {
          return  <SwiperSlide>
          <Stack fontSize={"14px"}>

          <Image color={"#12284c"} h="50px"src={item.image} />
          <Text>{item.brand}</Text>
          <Text color={"gray"} >
            {item.name}
          </Text>
          <Text color={"gray"}>
            $. {item.price}
          </Text>
          </Stack>
        </SwiperSlide>
       
        })

        }
       
        
      </Swiper>
    </Box>
  )
}

