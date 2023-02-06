import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Select,
  SimpleGrid,
  Skeleton,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/react";
import { Pagination } from "./Pagination";
import { ProductCard } from "./ProductCard";
// import axios from "axios";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ADD_FILLTER } from "../../Redux/FillterReducer/actionType";
import { getProductsAPI } from "../../Redux/AppReducer/action";

export const RightSection = () => {
  // const [loading, setloading] = useState(true);
  // const [products, setproducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const Fillter = useSelector((store) => store.Fillters.Fillter);
  const { data, loading } = useSelector((store) => store.Appreducer);
  const [curretpage, setcurretpage] = useState(
    Number(searchParams.get("page")) || 1
  );
  const [sort, setsort] = useState("");
  const dispatch = useDispatch();
  const { category } = useParams();

  const HandleSort = (str) => {
    switch (str) {
      case "PriceLowToHigh":
        data.sort((a, b) => a.offerPrice - b.offerPrice);
        setsort(str);
        break;

      case "PriceHighToLow":
        data.sort((a, b) => b.offerPrice - a.offerPrice);
        setsort(str);
        break;

      default:
        break;
    }
  };

  const onPageChange = (direction) => {
    if (direction === "Prev") {
      setcurretpage(curretpage - 1);
    } else if (direction === "Next") {
      setcurretpage(curretpage + 1);
    } else {
      setcurretpage(direction);
    }
  };

  const RemoveTag = (category) => {
    let newFillter = [...Fillter];
    if (Fillter.includes(category)) {
      newFillter.splice(newFillter.indexOf(category), 1);
    }
    dispatch({ type: ADD_FILLTER, payload: newFillter });
    // console.log(newFillter);
  };

  // const FetchDataFromServer = () => {
  //   setSearchParams({ curretpage });
  //   axios
  //     .get(`https://verceljson.vercel.app/${category}?page=${curretpage}`)
  //     .then((res) => {
  //       setproducts(res.data.data);
  //       // setloading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   };
  //   // FetchDataFromServer();

  useEffect(() => {
    setSearchParams({ curretpage });
    dispatch(getProductsAPI(category, curretpage));
    // setloading(true);
  }, [curretpage, category]);

  return (
    <Box color={"#5F6F94"}>
      <Box borderBottom={"1px solid"} h={"82px"}>
        <Stack direction="row" justifyContent={"space-between"}>
          <Heading textTransform={"uppercase"}>{category}</Heading>
          <Stack direction={"row"} align="center" pt={"5"}>
            <Heading size={"md"}>SORT BY</Heading>
            <Stack spacing={3}>
              <Select
                variant="outline"
                onChange={(e) => {
                  HandleSort(e.target.value);
                }}
              >
                <option value="BestSellers">Price</option>
                <option value="PriceLowToHigh"> Low to High</option>
                <option value="PriceHighToLow"> High to Low</option>
              </Select>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Stack direction="row" justifyContent="space-between" mt="2" mb={5}>
        <Heading size={"sm"}>{Fillter.length} FILTERS APPLIED</Heading>
      </Stack>
      <Box my={2}>
        {Fillter?.map((item, index) => (
          <Tag
            m={2}
            size={"md"}
            key={index}
            borderRadius="full"
            variant="outline"
            colorScheme="gray"
          >
            <TagLabel>{item}</TagLabel>
            <TagCloseButton onClick={() => RemoveTag(item)} />
          </Tag>
        ))}
      </Box>
      {loading ? (
        <SimpleGrid columns={[1, 2, 2, 2, 4]} spacing={10}>
          <Box w="100%" h="270">
            <Skeleton height="270px" />
          </Box>
          <Box w="100%" h="270">
            <Skeleton height="270px" />
          </Box>
          <Box w="100%" h="270">
            <Skeleton height="270px" />
          </Box>
          <Box w="100%" h="270">
            <Skeleton height="270px" />
          </Box>

          <Box w="100%" h="270">
            <Skeleton height="270px" />
          </Box>
          <Box w="100%" h="270">
            <Skeleton height="270px" />
          </Box>
          <Box w="100%" h="270">
            <Skeleton height="270px" />
          </Box>
          <Box w="100%" h="270">
            <Skeleton height="270px" />
          </Box>
        </SimpleGrid>
      ) : (
        <SimpleGrid columns={[1, 1, 2, 3, 4]} gap={7}>
          {data?.map((item, index) => (
            <Box w="100%" h={category === "laptop" ? "350" : "450"} key={index}>
              <ProductCard item={item} category={category} />
            </Box>
          ))}
        </SimpleGrid>
      )}

      <Box w={"70%"} m={"20px auto"}>
        <Pagination
          total={7}
          selected={curretpage}
          onPageChange={onPageChange}
        />
      </Box>
    </Box>
  );
};
