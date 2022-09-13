import React from "react";
import { Box, Center, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import "swiper/css/autoplay";
import "./Home.css";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Firstslider = () => {
  return (
    <>
      <Swiper
        className={styles.vishalswiper}
        navigation={true}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Autoplay]}
      >
        <SwiperSlide>
          <img
            src="https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-book-pro/section01s.jpg"
            alt="slide1"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-book-pro/section03s.jpg"
            alt="slide2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-book-pro/section08s.jpg"
            alt="slide3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest/b2c-bluefest-mseries-1920x545-010922.jpg"
            alt="slide4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-vector/realistic-phones-different-views_52683-28436.jpg?size=626&ext=jpg&ga=GA1.2.564934570.1662384569"
            alt="slide5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.samsung.com/is/image/samsung/assets/in/offer/online/samsung-fest/b2c-bluefest-television-1920x545-010922.jpg"
            alt="slide6"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-11t-5g/section10.jpg"
            alt="slide7"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i02.appmifile.com/204_operator_sg/29/11/2021/36d661f93fead82bc3c7443f1c137f39.jpg"
            alt="slide8"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

const Mid1 = () => {
  return (
    <>
      <Center mt={"80px"}>
        <VStack>
          <Text fontWeight={"600"} fontSize={"25px"}>
            Featured Brands
          </Text>
          <Text color={"#7A8496"} fontSize={"20px"} fontWeight={"400"}>
            Compare across our 500+ partner stores to find the products you want
            at the best price.
          </Text>
        </VStack>
      </Center>
    </>
  );
};

const Secondslider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        autoplay={{ delay: 5000 }}
        modules={[Navigation, Autoplay]}
      >
        <SwiperSlide>
          <img
            className={styles.img222}
            src="https://i02.appmifile.com/519_operator_sg/01/12/2021/d6c18479fd17cc24fb7c1e0e0d0d31e1.jpg"
            alt="slide1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={styles.img222}
            src="https://i02.appmifile.com/992_operator_sg/05/08/2021/9faf7a2855a33748a91e4a374c32d1c0.jpg"
            alt="slide2"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className={styles.img222}
            src="https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-book-e-learning-edition/section05.jpg"
            alt="slide3"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

const Thirdslider = () => {
  return (
    <>
      <div className={styles.mid2text}>
        <h2>
          <span>Special Offers</span>
        </h2>
      </div>
      <div>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          // slidesPerView={3}
          // spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 5000 }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
        >
          <SwiperSlide>
            <img
              className={styles.thirslsiderimg}
              src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-g781bzggins/gallery/in-galaxy-s20-fe-5g-g781-sm-g781bzggins-405304988?$PD_GALLERY_L_JPG$"
              alt="img1"
            />

            <Center className={styles.flexcssswiper}>
              <VStack>
                <Text fontSize={"22px"} fontWeight={"600"}>
                  Galexy S20 FE 5G
                </Text>
                <Text fontWeight={"600"}>
                  ₹ 23999 <i>₹ 28999</i>
                </Text>
                <Link to="/mobiles">
                  <button className={styles.blackbuttonhover}>BUY NOW</button>
                </Link>
              </VStack>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.thirslsiderimg}
              src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-g990elviinu/gallery/in-galaxy-s21-fe-g990-sm-g990elviinu-530606544?$PD_GALLERY_L_JPG$"
              alt="img2"
            />
            <Center className={styles.flexcssswiper}>
              <VStack>
                <Text fontSize={"22px"} fontWeight={"600"}>
                  Galexy S21 FE 5G
                </Text>
                <Text fontWeight={"600"}>
                  ₹ 33999 <i>₹ 38999</i>
                </Text>
                <Link to="/mobiles">
                  <button className={styles.blackbuttonhover}>BUY NOW</button>
                </Link>
              </VStack>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.thirslsiderimg}
              src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-m135fznpins/gallery/in-galaxy-m13-sm-m135-431575-sm-m135fznpins-533230571?$650_519_PNG$"
              alt="img3"
            />
            <Center className={styles.flexcssswiper}>
              <VStack>
                <Text fontSize={"22px"} fontWeight={"600"}>
                  Galexy M13 (4GB)
                </Text>
                <Text fontWeight={"600"}>
                  ₹ 33999 <i>₹ 38999</i>
                </Text>
                <Link to="/mobiles">
                  <button className={styles.blackbuttonhover}>BUY NOW</button>
                </Link>{" "}
              </VStack>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.thirslsiderimg}
              src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-e236bzggins/gallery/in-galaxy-f23-4gb-ram-sm-e236bzggins-531512373?$2052_1641_PNG$"
              alt="img4"
            />
            <Center className={styles.flexcssswiper}>
              <VStack>
                <Text fontSize={"22px"} fontWeight={"600"}>
                  Galexy M23 (4GB | 128GB)
                </Text>
                <Text fontWeight={"600"}>
                  ₹ 14999 <i>₹ 20999</i>
                </Text>
                <Link to="/mobiles">
                  <button className={styles.blackbuttonhover}>BUY NOW</button>
                </Link>{" "}
              </VStack>
            </Center>
          </SwiperSlide>

          <SwiperSlide>
            <img
              className={styles.thirslsiderimg}
              src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-a135flbgins/gallery/in-galaxy-a13-sm-a135-sm-a135flbgins-531576524?$2052_1641_PNG$"
              alt="img5"
            />
            <Center className={styles.flexcssswiper}>
              <VStack>
                <Text fontSize={"22px"} fontWeight={"600"}>
                  Galexy A13 5G (8GB | 128Gb)
                </Text>
                <Text fontWeight={"600"}>
                  ₹ 13999 <i>₹ 18999</i>
                </Text>
                <Link to="/mobiles">
                  <button className={styles.blackbuttonhover}>BUY NOW</button>
                </Link>{" "}
              </VStack>
            </Center>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.thirslsiderimg}
              src="https://images.samsung.com/is/image/samsung/p6pim/in/sm-m526bzkiinu/gallery/in-galaxy-m52-5g-m526-404058-sm-m526bzkiinu-514948644?$2052_1641_PNG$"
              alt="img6"
            />
            <Center className={styles.flexcssswiper}>
              <VStack>
                <Text fontSize={"22px"} fontWeight={"600"}>
                  Galexy M52 5G (8GB | 128Gb)
                </Text>
                <Text fontWeight={"600"}>
                  ₹ 26999 <i>₹ 36999</i>
                </Text>
                <Link to="/mobiles">
                  <button className={styles.blackbuttonhover}>BUY NOW</button>
                </Link>{" "}
              </VStack>
            </Center>
          </SwiperSlide>
        </Swiper>
      </div>

      <Center>
        <Link to="/laptop">
          <button className={styles.blackbuttonhover}>VIEW MORE</button>
        </Link>
      </Center>
    </>
  );
};

const Product1 = () => {
  const productdata1 = [
    {
      lapyurl:
        "https://www.samsung.com/in/monitors/gaming/odyssey-g3-24-inch-144hz-1ms-freesync-lf24g35tfwwxxl/",
      disc: "36% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/p6pim/in/lf24g35tfwwxxl/gallery/in-odyssey-g3-24g35tf-lf24g35tfwwxxl-467158852?$2052_1641_PNG$",
      descr: 'Gaming Monitor with AMD freeSync (24") LF24G35TFWWXXL',
      price: "₹ 16599",
      offer: "₹ 25870",
    },
    {
      lapyurl:
        "https://www.samsung.com/in/monitors/gaming/odyssey-g5-27-inch-144hz-curved-qhd-1440p-lc27g55tqwwxxl/",
      disc: "36% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/in-gaming-monitor-c27g55tqww-lc27g55tqwwxxl-frontblack-335280359?$2052_1641_PNG$",
      descr: 'Curved Gaming Monitor with WQHD resolution (27") LC27G55TQWWXXL',
      price: "₹ 24299",
      offer: "₹ 38000",
    },
    {
      lapyurl:
        "https://www.samsung.com/in/monitors/gaming/curved-gaming-monitor-27-inch-lc27rg50fqwxxl/",
      disc: "56% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/in-gaming-monitor-c27rg50fqw-lc27rg50fqwxxl-frontblack-248905874?$2052_1641_PNG$",
      descr: 'Curved Gaming Monitor (27") LC27RG50FQWXXL',
      price: "₹ 19999",
      offer: "₹ 45000",
    },
    {
      lapyurl:
        "https://www.samsung.com/in/monitors/gaming/odyssey-g5-34-inch-165hz-curved-ultra-wqhd-lc34g55twwwxxl/",
      disc: "23% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/p6pim/in/lc34g55twwwxxl/gallery/in-odyssey-g5-34g5-lc34g55twwwxxl-467164472?$684_547_PNG$",
      descr: 'Gaming Monitor with WQHD resolution (34") LC34G55TWWWXXL',
      price: "₹ 46499",
      offer: "₹ 60000",
    },
    {
      lapyurl:
        "https://www.samsung.com/in/monitors/gaming/odyssey-g9-49-inch-240hz-1ms-curved-lc49g95tsswxxl/",
      disc: "45% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/in-gaming-monitor-c49g95tssw-lc49g95tsswxxl-frontwhite-335279681?$684_547_PNG$",
      descr:
        'Gaming Monitor with 32:9 aspect ratio display (49") LC49G95TSSWXXL',
      price: "₹ 138399",
      offer: "₹ 250000",
    },
    {
      lapyurl:
        "https://www.samsung.com/in/monitors/gaming/odyssey-g30a-27-inch-144hz-freesync-ls27ag304nwxxl/",
      disc: "15% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/p6pim/in/ls27ag304nwxxl/gallery/in-odyssey-g3-g30a-ls27ag304nwxxl-530836775?$2052_1641_PNG$",
      descr:
        '68.9cm (27") Gaming Monitor with 144Hz refresh rate and AMD FreeSync\n                                            Premium',
      price: "₹ 19899",
      offer: "₹ 23500",
    },
    {
      lapyurl:
        "https://www.samsung.com/in/monitors/gaming/odyssey-g7-32-inch-240hz-1ms-curved-lc32g75tqswxxl/",
      disc: "34% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/p6pim/in/lc32g75tqswxxl/gallery/in-64-8cm-27-gaming-monitor-with-wqhd-resolution-240hz-refresh-rate-lc32g75tqswxxl-501390268?$684_547_PNG$",
      descr: 'Gaming Monitor with WQHD resolution (32") LC32G75TQSWXXL',
      price: "₹ 47499",
      offer: "₹ 72000",
    },
    {
      lapyurl:
        "https://www.samsung.com/in/monitors/gaming/odyssey-crg5-24-inch-lc24rg50fzwxxl/",
      disc: "54% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/p6pim/in/lc24rg50fzwxxl/gallery/in-c24rg5-lc24rg50fzwxxl-531703293?$2052_1641_PNG$",
      descr: '59.8cm (23.5") Curved Gaming Monitor LC24RG50FZWXXL',
      price: "₹ 14899",
      offer: "₹ 32300",
    },
    {
      lapyurl:
        "https://www.samsung.com/in/monitors/gaming/odyssey-g70a-28-inch-ls28ag700nwxxl/",
      disc: "38% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/p6pim/in/ls28ag700nwxxl/gallery/in-odyssey-g7-g70a-ls28ag700nwxxl-531705536?$2052_1641_PNG$",
      descr:
        '71.1cm (28") Gaming Monitor With UHD resolution and 144hz refresh rate\n                                            LS28AG700NWXXL',
      price: "₹ 46399",
      offer: "₹ 75000",
    },
    {
      lapyurl:
        "https://www.samsung.com/in/monitors/gaming/odyssey-neo-g7-g75nb-32-inch-ls32bg750nwxxl/",
      disc: "38% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/p6pim/in/ls32bg750nwxxl/gallery/in-odyssey-neo-g7-g75nb-ls32bg750nwxxl-533184849?$1300_1038_PNG$",
      descr:
        '81.3cm (32") UHD Gaming monitor with Quantum Mini-LED and 165Hz refresh rate LS32BG750NWXXL',
      price: "₹ 71799",
      offer: "₹ 115000",
    },
    {
      lapyurl:
        "https://www.samsung.com/in/monitors/gaming/odyssey-neo-g8-g85nb-32-inch-ls32bg850nwxxl/",
      disc: "34% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/p6pim/in/ls32bg850nwxxl/gallery/in-odyssey-neo-g8-g85nb-ls32bg850nwxxl-533188031?$1300_1038_PNG$",
      descr:
        '81.3cm (32") UHD Gaming monitor with Quantum Mini-LED and 240Hz refresh rate LS32BG850NWXXL',
      price: "₹ 82899",
      offer: "₹ 125000",
    },
    {
      lapyurl:
        "https://www.samsung.com/in/monitors/gaming/odyssey-g4-g40b-25-inch-ls25bg400ewxxl/",
      disc: "51% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/p6pim/in/ls25bg400ewxxl/gallery/in-odyssey-g4-25g40b-ls25bg400ewxxl-532970873?$1300_1038_PNG$",
      descr:
        '63.5cm (25") FHD Gaming Monitor With IPS panel, 240Hz refresh rate LS25BG400EWXXL',
      price: "₹ 22099",
      offer: "₹ 45000",
    },
  ];
  return (
    <>
      <div className={styles.mid2text}>
        <h2>
          <span>Trending Now In Lappy</span>
        </h2>
      </div>
      <Box w="95%" m="auto">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 5000 }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {productdata1?.map((el, index) => (
            <SwiperSlide className={styles.product1img} key={index}>
              <span>♡</span>
              <img src={el.imgUrl} alt={"slide" + el.descr} />
              <div className={styles.product1quckview}>
                <Link to="/laptop">
                  <h2>QUICK VIEW</h2>
                </Link>
              </div>
              <Center>
                <VStack>
                  <Text
                    fontWeight={"600"}
                    fontSize={"15px"}
                    mt={"1rem"}
                    noOfLines={2}
                  >
                    {el.descr}
                  </Text>
                  <Text
                    color={"#A3A3A3"}
                    textAlign={"center"}
                    fontSize={"12px"}
                    noOfLines={1}
                  >
                    {el.offer}
                  </Text>
                  <Text fontSize={"15px"} fontWeight={"500"}>
                    {el.price}
                  </Text>
                  <Text mb={"20px"} fontSize={"12px"}>
                    {el.disc}
                  </Text>
                </VStack>
              </Center>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Center>
        <Link to="/laptop">
          <button className={styles.blackbuttonhover}>VIEW MORE</button>
        </Link>
      </Center>
    </>
  );
};

const Product2 = () => {
  const productdata1 = [
    {
      disc: "18% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/p6pim/in/sm-m136bdbdins/gallery/in-galaxy-m13-5g-4gb-sm-m136bdbdins-533154468?$1300_1038_PNG$",
      descr: "Galaxy M13 5G (4GB | 64GB)",
      price: "₹ 13999",
      offer: "₹ 16999",
    },
    {
      disc: "20% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/p6pim/in/sm-m536bzbeinu/gallery/in-galaxy-m53-5g-sm-m536-sm-m536bzbeinu-532180211?$2052_1641_PNG$",
      descr: "Galaxy M53 5G (6GB | 128GB)",
      price: "₹ 26499",
      offer: "₹ 32999",
    },
    {
      disc: "24% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/p6pim/in/sm-m336bzbpins/gallery/in-galaxy-m33-5g-6gb-ram-sm-m336bzbpins-531839740?$2052_1641_PNG$",
      descr: "Galaxy M33 5G (6GB | 128GB)",
      price: "₹ 18999",
      offer: "₹ 24999",
    },
    {
      disc: "20% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/p6pim/in/sm-e135fiddins/gallery/in-galaxy%C2%A0f13-4gb-sm-e135fiddins-532880446?$1300_1038_PNG$",
      descr: "Galaxy F13 (4GB | 64GB)",
      price: "₹ 11999",
      offer: "₹ 14999",
    },
    {
      disc: "25% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/p6pim/in/sm-e426bzbgins/gallery/in-galaxy-f42-5g-6gb-ram-sm-e426bzbgins-514539974?$2052_1641_PNG$",
      descr: "Galaxy F42 5G (6GB | 128GB)",
      price: "₹ 17999",
      offer: "₹ 23999",
    },
    {
      disc: "19% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/p6pim/in/sm-m536bzbfinu/gallery/in-galaxy-m53-5g-sm-m536-421705-sm-m536bzbfinu-532181615?$2052_1641_PNG$",
      descr: "Galaxy M53 5G (8GB | 128GB)",
      price: "₹ 28499",
      offer: "₹ 34999",
    },
    {
      disc: "21% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/p6pim/in/sm-m336bzgrins/gallery/in-galaxy-m33-5g-8gb-ram-sm-m336bzgrins-531842525?$2052_1641_PNG$",
      descr: "Galaxy M33 5G (8GB | 128GB)",
      price: "₹ 20499",
      offer: "₹ 25999",
    },
    {
      disc: "12% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/p6pim/in/sm-f127glbgins/gallery/in-galaxy-f12-4gb-ram-sm-f127glbgins-419015707?$684_547_PNG$",
      descr: "Galaxy F12 (4GB | 64GB)",
      price: "₹ 11499",
      offer: "₹ 12999",
    },
    {
      disc: "23% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/p6pim/in/sm-e426bzahins/gallery/in-galaxy-f42-5g-8gb-ram-sm-e426bzahins-514504593?$2052_1641_PNG$",
      descr: "Galaxy F42 5G (8GB | 128GB)",
      price: "₹ 19999",
      offer: "₹ 25999",
    },
    {
      disc: "12% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/p6pim/in/sm-a736bzaginu/gallery/in-galaxy-a73-5g-a736-sm-a736bzaginu-531831004?$PD_GALLERY_L_JPG$",
      descr: "Galaxy A73 5G (8GB | 128GB)",
      price: "₹ 41999",
      offer: "₹ 47490",
    },
    {
      disc: "23% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/p6pim/in/2202/gallery/in-galaxy-a53-5g-a536-sm-a536elbdins-531436087?$PD_GALLERY_L_JPG$",
      descr: "Galaxy A53 5G (6GB | 128GB)",
      price: "₹ 31499",
      offer: "₹ 40999",
    },
    {
      disc: "23% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/p6pim/in/sm-a336elbpins/gallery/in-galaxy-a33-5g-a336-sm-a336elbpins-531437082?$PD_GALLERY_L_JPG$",
      descr: "Galaxy A33 5G (6GB | 128GB)",
      price: "₹ 25499",
      offer: "₹ 32999",
    },
    {
      disc: "22% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/p6pim/in/2202/gallery/in-galaxy-a53-5g-a536-416923-sm-a536elbgins-531436247?$PD_GALLERY_L_JPG$",
      descr: "Galaxy A53 5G (8GB | 128GB)",
      price: "₹ 32999",
      offer: "₹ 42499",
    },
    {
      disc: "23% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/p6pim/in/sm-a336ezkrins/gallery/in-galaxy-a33-5g-a336-416930-sm-a336ezkrins-531437280?$PD_GALLERY_L_JPG$",
      descr: "Galaxy A33 5G (8GB | 128GB)",
      price: "₹ 26999",
      offer: "₹ 34999",
    },
    {
      disc: "23% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/p6pim/in/sm-a235flbhins/gallery/in-galaxy-a23-sm-a235-sm-a235flbhins-531577286?$2052_1641_PNG$",
      descr: "Galaxy A23 (6GB | 128GB)",
      price: "₹ 18499",
      offer: "₹ 23990",
    },
    {
      disc: "",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/p6pim/in/sm-a035fzbdins/gallery/in-galaxy-a03-a035m-sm-a035fzbdins-531298431?$2052_1641_PNG$",
      descr: "Galaxy A03 (3GB | 32GB)",
      price: "₹ 10499",
      offer: "",
    },
    {
      disc: "10% off",
      imgUrl:
        "https://images.samsung.com/is/image/samsung/p6pim/in/sm-a736blghinu/gallery/in-galaxy-a73-5g-a736-sm-a736blghinu-531830984?$PD_GALLERY_L_JPG$",
      descr: "Galaxy A73 5G (8GB | 256GB)",
      price: "₹ 44999",
      offer: "₹ 49990",
    },
  ];
  return (
    <>
      <div className={styles.mid2text}>
        <h2>
          <span>Trending Viewed In Mobile</span>
        </h2>
      </div>
      <Box w="95%" m="auto">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 5000 }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {productdata1?.map((el, index) => (
            <SwiperSlide className={styles.product1img} key={index}>
              <span>♡</span>
              <img src={el.imgUrl} alt={"slide" + el.descr} />
              <div className={styles.product1quckview}>
                <Link to="/mobiles">
                  <h2>QUICK VIEW</h2>
                </Link>
              </div>
              <Center>
                <VStack>
                  <Text
                    fontWeight={"600"}
                    fontSize={"15px"}
                    mt={"1rem"}
                    noOfLines={2}
                  >
                    {el.descr}
                  </Text>
                  <Text
                    color={"#A3A3A3"}
                    textAlign={"center"}
                    fontSize={"12px"}
                    noOfLines={1}
                  >
                    {el.offer}
                  </Text>
                  <Text fontSize={"15px"} fontWeight={"500"}>
                    {el.price}
                  </Text>
                  <Text mb={"20px"} fontSize={"12px"}>
                    {el.disc}
                  </Text>
                </VStack>
              </Center>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Center>
        <Link to="/mobiles">
          <button className={styles.blackbuttonhover}>VIEW MORE</button>
        </Link>
      </Center>
    </>
  );
};

const Lastslider = () => {
  return (
    <>
      <div className={styles.mid2text}></div>
      <Image src="https://i02.appmifile.com/951_operator_sg/05/08/2021/b18c28f62fdfb784ed90eece534c91d6.jpg" />
      <Image src="https://i02.appmifile.com/336_operator_sg/05/08/2021/61bc0ccb604da41e5c10a669b8071224.jpg" />
      <Image src="https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-book-e-learning-edition/section08.jpg" />
      <Image src="https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-book-e-learning-edition/talktet-pc.jpg" />
    </>
  );
};

const Secondlastsection = () => {
  return (
    <>
      <Box
        backgroundColor={"#F8F7F6"}
        color={"black"}
        w="100%"
        mt={"100px"}
        p={15}
      >
        <SimpleGrid columns={[1, 1, 2]} spacing={10}>
          <Box w={"100%"} p={10}>
            <Center>
              <VStack>
                <Text textAlign={"center"} fontWeight={"600"} fontSize={"23px"}>
                  Download the <br />
                  ModeSens App
                </Text>
                <Text textAlign={"center"} fontWeight={"500"} fontSize={"15px"}>
                  A seamless experience that takes your style <br /> to the next
                  level.
                </Text>
                <button className={styles.lastdownloadbutton}>
                  Download Alpha
                </button>
                <Image
                  height={"400px"}
                  width={"200px"}
                  alt="downl"
                  src="https://cdn.modesens.com/static/img/20220420AppDownloaden.png"
                ></Image>
              </VStack>
            </Center>
          </Box>
          <Box w={"100%"} p={10}>
            <Center>
              <VStack>
                <Text textAlign={"center"} fontWeight={"600"} fontSize={"23px"}>
                  Install the ModeSens <br /> Browser Extension
                </Text>
                <Text fontWeight={"500"} fontSize={"15px"} textAlign={"center"}>
                  Get timely, accurate product information <br /> every time you
                  browse.
                </Text>
                <button className={styles.lastdownloadbutton}>
                  Install Now
                </button>
                <Image
                  height={"400px"}
                  width={"390px"}
                  src="https://cdn.modesens.com/static/img/20211109downloadright.png"
                  alt="downl"
                ></Image>
              </VStack>
            </Center>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export {
  Firstslider,
  Mid1,
  Secondslider,
  Thirdslider,
  Lastslider,
  Secondlastsection,
  Product1,
  Product2,
};
