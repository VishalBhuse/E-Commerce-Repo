import { Box, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styles from "./Slider.module.css";
import { bestSeller } from "./SliderData";

export const SliderComponent = () => {
  return (
    <div style={{marginBottom: "200px"}}>
      <Box h="350px" mt="10" mb="10" className={styles.box} >
        <div className={styles.nav_e}>
          ESSENTIAL SUMMER CANDLES
        </div>

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
          {bestSeller.map((item) => {
            return (
              <SwiperSlide style={{height: "290px"}}>
                {/* style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} */}
                <Stack fontSize={"14px"}>
                  <Image color={"#12284c"} h="30px" src={item.image} />
                  <Text>{item.brand}</Text>
                  <Text color={"gray"}>{item.name}</Text>
                  <Text color={"gray"}>$ {item.price}</Text>
                </Stack>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </div>
  );
};
