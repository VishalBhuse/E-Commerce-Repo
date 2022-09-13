import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./SingleProduct.module.css";
import axios from "axios";
import { Box, Button, Image, Img, Spinner, Text, useToast } from "@chakra-ui/react";
import { ProductAbout } from "./ProductAbout";
import { SliderComponent } from "./SliderComponent";
import { addtocart, getCart } from "../../Redux/CartReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TOCART_SUCCESS, GET_CART_SUCCESS } from "../../Redux/CartReducer/actionTypes";


export const SingleProduct = () => {
  const toast = useToast()
  const [isLoading,setIsloading]=useState(true)
  const { id } = useParams();
  const { category } = useParams();
  const [currentProduct, setcurrentProduct] = useState({});
  const [currentImage1, setcurrentImage1] = useState("");
  const [currentImage2, setcurrentImage2] = useState("");
  const [activeImage, setActiveImage] = useState(currentImage1);
  const dispatch = useDispatch()
  const CartItem = useSelector(state=>state.Cartreducer.AddtoCart)
  console.log(CartItem,"use Selactor"); 

  const getData = () => {
    axios
      .get(`https://ecommercecombine.herokuapp.com/${category}/${id}`)
      .then((res) => {
        // console.log(res.data);
        setcurrentProduct(res.data);
        setcurrentImage1(res.data.src);
        setcurrentImage2(res.data.src2);
        setActiveImage(res.data.src)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  
  

const handdleSubmit=()=>{
  toast({
    title: 'Product added to cart',
    position:"top",
    status: 'success',
    duration: 2000,
    isClosable: true,
  })

  dispatch({ type: GET_CART_SUCCESS, payload:[...CartItem, currentProduct]});

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
          
       

          <div className={style.btnDiv}>
           
        <Button variant={"ghosht"} m="auto" onClick={handdleSubmit} >Add to Cart ₹ {currentProduct.price}</Button>
         

            <div>
              <p>  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
