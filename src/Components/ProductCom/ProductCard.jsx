import {
  Box,
  Img,
  Text,
  Stack,
  VStack,
  Center,
  HStack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { AiFillHeart, AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_TO_WISH_LIST_SUCCESS } from "../../Redux/WishListReducer/actionType";
import { OuickView } from "./OuickView";
import styles from "./Quick.module.css";

export const ProductCard = (props) => {
  const dispatch = useDispatch();
  const WithListData = useSelector((store) => store.WishList.WishListData);
  const ProId = useSelector((store) => store.WishList.ProId);

  const AddToFevrate = () => {
    let newWishList = [...WithListData];
    let newProId = [...ProId];
    if (ProId.includes(props.item.src)) {
      newProId.splice(newProId.indexOf(props.item.src), 1);
      newWishList.splice(ProId.indexOf(props.item.src), 1);
    } else {
      newProId = [...ProId, props.item.src];
      newWishList = [...WithListData, props.item];
    }

    const payload = {
      WithListData: newWishList,
      ProId: newProId,
    };
    dispatch({ type: ADD_TO_WISH_LIST_SUCCESS, payload });
  };
  return (
    <Box
      p={2}
      boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      borderRadius={"5px"}
      className={styles.product1img}
    >
      <HStack justify={"space-between"} my="4">
        <Button size="xs" colorScheme={"green"} cursor={"text"}>
          {props.item.discount}
        </Button>
        <Box
          w="30px"
          h="30px"
          mr={1}
          align="center"
          onClick={() => AddToFevrate()}
          cursor={"pointer"}
        >
          {ProId.includes(props.item.src) ? (
            <AiFillHeart style={{ fontSize: "30px", color: "red" }} />
          ) : (
            <AiOutlineHeart style={{ fontSize: "30px" }} />
          )}
        </Box>
      </HStack>

      <Link to={`/${props.category}/${props.item._id}`}>
        <Img
          id="ImageClass"
          cursor={"pointer"}
          src={props.item.src}
          m="auto"
          w={props.category == "laptop" ? "100%" : "80%"}
          h={props.category == "laptop" ? "150px" : "270px"}
          alt={props.title}
        />
      </Link>
      <Box align="center" mt={"-5"}>
        <br />
        <OuickView item={props.item} />

        <Text
          textAlign={"justify"}
          textTransform={"capitalize"}
          noOfLines={3}
          fontWeight={"500"}
          fontSize={"15px"}
          mt={"1rem"}
        >
          {props.item.title}
        </Text>
        <HStack my="2" justifyContent={"space-between"}>
          <Box>
            <HStack>
              <Text fontSize={"15px"} fontWeight={"500"}>
                ₹ {props.item.offerPrice}
              </Text>
              <Text
                textDecoration={"line-through"}
                fontSize={"12px"}
                fontWeight={"500"}
              >
                ₹ {props.item.price}
              </Text>
            </HStack>
          </Box>
          <Box>
            <Button
              size="xs"
              colorScheme={"yellow"}
              fontSize={"9px"}
              color="blue"
              fontWeight={"700"}
              cursor={"text"}
            >
              {props.item.ratings.split(" ")[0]} &nbsp; <AiFillStar />
            </Button>
          </Box>
        </HStack>

        <Stack direction={"row"} justify="center">
          {/* <AiFillStar color="gold"/>
          <AiFillStar color="gold"/>
          <AiFillStar color="gold"/>
          <AiFillStar color="gold"/>
          <AiFillStar color="gold"/> */}
        </Stack>
      </Box>
    </Box>
  );
};
