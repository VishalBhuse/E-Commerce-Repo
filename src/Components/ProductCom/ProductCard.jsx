import {
  Box,
  Button,
  Img,
  Text,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { AiFillStar, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_TO_WISH_LIST_SUCCESS } from "../../Redux/WishListReducer/actionType";
import { OuickView } from "./OuickView";

export const ProductCard = (props) => {
  const dispatch = useDispatch();
  const WithListData = useSelector((store)=>store.WishList.WishListData);
  const ProId = useSelector((store)=>store.WishList.ProId);

  const AddToFevrate = () => {
    let newWishList=[...WithListData]
    let newProId=[...ProId]
    if(ProId.includes(props.item.id)){
      newProId.splice(newProId.indexOf(props.item.id),1)
      newWishList.splice(ProId.indexOf(props.item.id),1)
    }else{
      newProId=[...ProId,props.item.id]
      newWishList = [...WithListData,props.item]
    }

    const payload ={
      WithListData:newWishList,
      ProId:newProId
    }
    dispatch({type:ADD_TO_WISH_LIST_SUCCESS, payload})
  }
  return (
    <Box  py={2}>
      <Box mt={1} align="right">
        <Box w="30px" h="30px" mr={1} align="center" onClick={()=>AddToFevrate()} cursor={"pointer"}>
          {ProId.includes(props.item.id)?
          <AiFillHeart style={{ fontSize: "30px", color:"red" }}/>:
          <AiOutlineHeart style={{ fontSize: "30px" }} />
          }
        </Box>
      </Box>
      <Link
       to={`/${props.category}/${props.item.id}`}>
      <Img
        id="ImageClass"
        cursor={"pointer"}
        src={props.item.images[0].src}
        w="100%"
        h="200px"
        alt=""
        srcSet=""
        />
        </Link>
      <Box align="center" mt={"-5"}>
        <OuickView item={props.item}/>
        <Text noOfLines={1} fontSize={"lg"} fontWeight={"600"}>
        {props.item.type}
        </Text>
        <Text noOfLines={1} fontSize={"md"} fontWeight={"200"}>
        {props.item.title}
        </Text>
        <Text noOfLines={1} fontSize={"md"} fontWeight={"600"}>
        ₹ {props.item.price}
        </Text>
        <Stack direction={"row"} justify="center">
          <AiFillStar color="gold"/>
          <AiFillStar color="gold"/>
          <AiFillStar color="gold"/>
          <AiFillStar color="gold"/>
          <AiFillStar color="gold"/>
        </Stack>
      </Box>
    </Box>
  );
};
