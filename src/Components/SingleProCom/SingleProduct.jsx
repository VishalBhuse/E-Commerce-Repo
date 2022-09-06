import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./SingleProduct.module.css";
import axios from "axios";
import { Box, Button, Image, Img, Spinner, Text, useToast } from "@chakra-ui/react";
import { ProductAbout } from "./ProductAbout";
import { SliderComponent } from "./SliderComponent";
import { addtocart, getCart } from "../../Redux/CartReducer/action";
import { useDispatch } from "react-redux";


export const SingleProduct = () => {
  const toast = useToast()
  const [isLoading,setIsloading]=useState(true)
  const { id } = useParams();
  const { category } = useParams();
  const [currentProduct, setcurrentProduct] = useState({});
  const [currentImage1, setcurrentImage1] = useState("");
  const [currentImage2, setcurrentImage2] = useState("");
  const [activeImage, setActiveImage] = useState(currentImage1);

  const getData = () => {
    axios
      .get(`http://localhost:8080/${category}/${id}`)
      .then((res) => {
        setcurrentProduct(res.data);
        setcurrentImage1(res.data.images[0].src);
        setcurrentImage2(res.data.images[1].src);
        setActiveImage(res.data.images[0].src)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  
  const dispatch=useDispatch()
  

const handdleSubmit=()=>
{
  toast({
    title: 'Product added to cart',
   position:"top",
    status: 'success',
    duration: 2000,
    isClosable: true,
  })

addtocart(
  {currentProduct,
    dispatch}
  ).then(() => {
    getCart(dispatch);
  });
}

  return (
    <div className={style.outerdiv}>
      <div className={style.mainDiv}>
        <div className={style.thumbnail} id="thumbnail-image">
          <div>
            <img
              className={style.thumbnail}
              onClick={()=>{setActiveImage(currentImage1)}}
              id="main-img"
              src={currentImage1}
              alt=""
            />
          </div>
          <div>
            <img
              className={style.thumbnail}
              onClick={()=>{setActiveImage(currentImage2)}}
              id="main-img-1"
              src={currentImage2}
              alt=""
            />
          </div>
        </div>

        <div className={style.imgDiv}>
        
          <img id={style.featured} className={style.img}  src={activeImage} alt="" />
        </div>

        <div className={style.info}>
          <h2 className={style.type}>{currentProduct.type}</h2>

          <h1 className={style.title}>{currentProduct.title}</h1>
          <p className={style.sell}>BEST SELLER CONCIOUS BEAUTY</p>
          <span style={{ fontWeight: "bold", fontSize: "22px" }}>
            ₹ {currentProduct.price}{" "}
          </span>
          <span className={style.text}>
            4 interest-free payments of $20.50 with Klarna.
          </span>
          <p className={style.desc}>
            A hydrating, oil-free gel foundation with a refreshing and
            lightweight texture.<strong> BlueRewards Exclusive!</strong>5-piece
            deluxe sample bag free with any ₹1400+ purchase
          </p>

          <div className={style.giftBox}>
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-656509807154-1_64x.jpg?v=1653615606"
                alt=""
              />
            </div>
            <div style={{ letterSpacing: "1px" }}>
              <p style={{ color: "grey", fontSize: "14px" }}>
                Free Gift with Purchase
              </p>
              <p style={{ fontSize: "15px" }}>Summer Skincare Essentials</p>
              <p style={{ color: "grey", fontSize: "14px" }}>
                Free with any ₹2000+ Chantecaille purchase
              </p>
            </div>
          </div>

          <div className={style.btnDiv}>
           
        <Button variant={"ghosht"} m="auto" onClick={handdleSubmit} >Add to Cart ₹ {currentProduct.price}</Button>
         

            <div>
              <p>  </p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.aboutDiv}>
        <ProductAbout />
      </div>
      <div className={style.sliderDiv}>
      <SliderComponent />
      </div>
    </div>
  );
};
