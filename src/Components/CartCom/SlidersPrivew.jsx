import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {sliderData} from "./sliderdata"
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
// import {slideone} from "./sliderdata.js/sliderData"

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import "./styles.css";
import { Pagination, Navigation } from "swiper";


export const SlidersPrivew = () => {
    // console.log(slideone)
    
  return (
    <Box h="400px" mt="20" mb="10" fontFamily={`"Montserrat Regular",sans-serif`} color="#12284C">
      <Stack ml={"40%"}>

      <Heading size={"md"}letterSpacing="2px"  fontSize="24px" fontWeight={400} p="10">SIMILAR PRODUCTS</Heading>
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
        {sliderData.map((item)=>
        {
          return  <SwiperSlide key={item.id}>
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
