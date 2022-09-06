import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import styles from  "./HomePage.module.css"

import {bestSeller} from "./SliderData"
import {newArrival} from "./SliderData"
import {tranding} from "./SliderData"
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from '@chakra-ui/react'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import {  Navigation } from "swiper";
import { Box, Image, Stack, Text } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <div className={styles.Main_1}>
      <div className={styles.nav_1}>
      <div className={styles.free}>
        
<h3>FREE SAMPLES WITH ALL ORDERS </h3>
      </div>

      {/* ## slider */}

<AliceCarousel autoPlay autoPlayInterval="3000">
  
<img className={styles.sliderimg} src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/fos-2022-july-hero-des_1600x.jpg?v=1657144325"
             alt=""   />
        <img className={styles.sliderimg} src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/hero-des_7a459285-a1a6-4c17-8383-f26887d149ba_1600x.jpg?v=1656625184"
             alt=""   />
                <img className={styles.sliderimg} src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/coop-dyson-july-2022-hero-des_1600x.jpg?v=1657144840"
               alt="" />
                <img className={styles.sliderimg} src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/coop-moroccanoil-july-hp-hero-des-2_1600x.jpg?v=1657227342"
              alt=""  />        
      
</AliceCarousel>


</div>



 {/* First coursal------------------------------------------------------- */}


 <Box h="350px"  mb="20">
  <div className={styles.nav_e} >
  <h2>NEW ARRIVAL</h2>
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
        {newArrival.map((item)=>
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



       
{/* line3-------------------------------------------------------- */}


<div className={styles.main3}>
<div className={styles.nav_e}>
  <h2>OCEAN EYES</h2>
  </div>
  
       
      

      <div className={styles.nav_c}>
        <p>This high-performance treatment resurfaces and reinforces your skin’s
        moisture barrier in one easy step to reveal smooth, radiant skin.</p>
        
      </div>

      <div className={styles.nav}>
        <div className={styles.nav_x}>
          <a class="menu-cards" href=" ">
            <img
              class="image"
              style={{ width: 250, height: 300 }}
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/OSEA_shop_the_collection_600x.progressive.jpg?v=1657661079"
              alt=""
              data-testid=""
            />
          </a>
        </div>


        
        <div className={styles.main_1}>
          <a class="menu-cards" href=" ">
            <img
              class="image"
              style={{ width: 150, height: 180 , marginLeft:51}}
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-675468101738-1_235x235_crop_center.jpg?v=1658261512"
              alt=""
              data-testid=""
            />
          </a>
          <div nav5>
            <p>OSER</p>
            <p>Seaglow Overnigth serum</p>
            <p>$63</p>
          </div>
        </div>
      </div>
    </div>



{/* coursal 2------------------------------------------------------------ */}



<Box h="350px" mt="15" mb="20">
  <div className={styles.nav_e}>
  <h2>ESSENTIAL SUMMER CANDLES</h2>
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
        {bestSeller.map((item)=>
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



{/* line5------------------------------------------------------------------------------ */}



<div className={styles.main4}>
      




<div className={styles.nav_1a}>
<a class="menu-cards" href=" "><img class='image' style = {{ width : 570, height : 370, marginTop : 20 }}

    src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bader_side_by_side_640x.jpg?v=1658339677"
    alt="" data-testid="" />
     
</a>
<div className={styles.nav_c}><h1>The Light Cream</h1> </div>

<div className={styles.nav_c}><p>A refreshing, weightless gel emulsion with a matte-like finish from Augustinus Bader. This cream deeply nourishes, combats signs of ageing and targets the root cause of overactive sebum</p> </div> 
  

<Link  className={styles.nav_b}     href= ' ' isExternal>
    SHOP NOW
</Link>

    
</div>
<div className={styles.nav_2a}>
<a class="menu-cards" href=" "><img class='image'  style = {{ width : 570, height : 370, marginTop : 20 }}

    src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/BAL_side_by_side_FINAL_640x.jpg?v=1652904545"
    alt="" data-testid="" />
     
</a>
<div className={styles.nav_c}> <h2>Beauty Alfresco</h2>  </div>
    <div className={styles.nav_c}> This summer is all about the outdoors, and we're here for it. You can find everything you need to make your summer outside a success in our curated collection of seasonal essentials. </div>
    
    
    
    <Link  className={styles.nav_b}     href= ' ' isExternal>
    SHOP SUMMER MUST-HAVES
</Link>
</div>
   
    </div>


{/* coursal 3--------------------------------------------------------- */}


<Box h="350px" mt="5" mb="20">
  <div className={styles.nav_e}>
  <h2>BEST SELLERS</h2>
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
        {tranding.map((item)=>
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



{/* line7-------------------------------------------------------------------------------------------------- */}

<div className={styles.main_4a}>
      




      <div className={styles.nav_1c}>
      <a class="menu-cards" href=" "><img class='image' style = {{ width : 600, height : 450, marginTop : 20 }}
      
          src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/samples-content_block_705x705.jpg?v=1604551537"
          alt="" data-testid="" />
           
      </a>
      </div>
      <div className={styles.nav_2c}>
        <div className={styles.nav_b}><h2>Midnight Recovery Omega Rich Cloud Cream</h2>  </div>
      
      <div className={styles.nav_c}><p>Whipped into a lightweight cloud-like texture, this renewing botanical face cream sinks right into the skin, delivering visible radiance. Wake up with plumper, more youthful-looking skin by morning.</p>  </div>
          
      <Link  className={styles.nav_b}     href= ' ' isExternal>
SHOP NOW
</Link>
           
           
      </div>
      </div>




      {/* last-line------------------------------------------------- */}



      <div className={styles.main_4b}>
      




      <div className={styles.nav_1d}>
      <a class="menu-cards" href=" "><img class='image' style = {{ width : 380, height : 330, marginTop : 20 }}
      
          src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/samples-content_block_705x705.jpg?v=1604551537"
          alt="" data-testid="" />
           
      </a>
      <div className={styles.nav_c}style = {{ marginTop:20  }} ><h2>FREE GIFTS WITH PURCHASE</h2>  </div>
          <div className={styles.nav_c} > Stock up all, then try somthing new on us</div>
          <Link  className={styles.nav_b}     href= ' ' isExternal>
BROWSES NOW
</Link>
          
          
      </div>
      <div className={styles.nav_2d}>
      <a class="menu-cards" href=" "><img class='image'  style = {{ width : 380, height : 330, marginTop : 20 }}
      
          src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/consultation_promo_nav_1_705x705.jpg?v=1657733426"
          alt="" data-testid="" />
           
      </a>
      <div className={styles.nav_c} style = {{ marginTop:20  }}><h2>$20 OFF $100 WITH AN IN-STORE CONSULTATION!</h2></div>
      
      
          <div className={styles.nav_c} > Stock up all , try somthing new on us</div>
          
          
          
          <Link  className={styles.nav_b}     href= ' ' isExternal>
BOOK NOW
</Link>
          
      </div> 
         
  
      <div className={styles.nav_3d}>
      <a class="menu-cards" href=" "><img class='image'  style = {{ width : 380, height : 330, marginTop : 20 }}
      
          src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/BAL_side_by_side_FINAL_640x.jpg?v=1652904545"
          alt="" data-testid="" />
           
      </a>
      <div className={styles.nav_c} style = {{ marginTop:20  }}> <h2>BLUEMERCURY SPA</h2>  </div>
      <div className={styles.nav_c} >
          <p> Stock up all your favorite brands , then try somthing new on us</p>
          
          
    
</div>


<Link  className={styles.nav_b}     href= ' ' isExternal>
BROWSE NOW
</Link>


{/* <Text as='u'>Underline</Text> */}
  <br />
         
          </div>
</div>
    </div>
  )
}

export default HomePage