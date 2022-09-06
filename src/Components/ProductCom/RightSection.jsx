import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Select,
  Stack,
  Switch,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { Pagination } from "./Pagination";
import { ProductCard } from "./ProductCard";
import axios from "axios"

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ADD_FILLTER } from "../../Redux/FillterReducer/actionType";


export const RightSection = () => {
  const Fillter = useSelector((store)=>store.Fillters.Fillter)
  const [curretpage, setcurretpage] = useState(1);
  const [products, setproducts] = useState([])
  const [sort, setsort] = useState("")
  const dispatch = useDispatch();
  const {category} = useParams()
  
  const HandleSort =(str) =>{
    switch (str) {
      case "PriceLowToHigh":
        setproducts(products.sort((a,b)=>a.price - b.price))
        setsort(str)
      break;
    
      case "PriceHighToLow":
        setproducts(products.sort((a,b)=>b.price - a.price))
        setsort(str)
      break;

      default:
        break;
    }
    console.log(products,str);

  }

  const onPageChange = (direction) => {
    if (direction === "Prev") {
      setcurretpage(curretpage - 1);
    } else if (direction === "Next") {
      setcurretpage(curretpage + 1);
    }else{
      setcurretpage(direction);
    }
  };

  const RemoveTag=(category)=>{
    let newFillter = [...Fillter];
    if (Fillter.includes(category)) {
      newFillter.splice(newFillter.indexOf(category), 1);
    }
    dispatch({type:ADD_FILLTER, payload:newFillter})
    console.log(newFillter);
  }

  const FetchDataFromServer = () =>{
    axios.get(`http://localhost:8080/${category}?_page=${curretpage}&_limit=50`)
    .then((res)=>{ 
      console.log(res.data);
      setproducts(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  }
  useEffect(() => {
    FetchDataFromServer()
  }, [curretpage])
  

  return (
    <Box w="72%" color={"#657fa1"}>
      <Box borderBottom={"1px solid"} h={"82px"}>
        <Stack direction="row" justifyContent={"space-between"}>
          <Heading textTransform={"uppercase"}>{category}</Heading>
          <Stack direction={"row"} align="center" pt={"5"}>
            <Heading size={"md"}>SORT BY</Heading>
            <Stack spacing={3}>
              <Select variant="outline" onChange={(e)=>{HandleSort(e.target.value)}}>
                <option value="BestSellers">Best Sellers</option>
                <option value="PriceLowToHigh">Price, Low to High</option>
                <option value="PriceHighToLow">Price, High to Low</option>    
              </Select>
            </Stack>
          </Stack>
        </Stack>
      </Box>

      <Stack direction="row" justifyContent="space-between" mt="2" mb={5} >
        <Heading size={"sm"}>{Fillter.length} FILTERS APPLIED</Heading>
        <Stack direction="row" align="center" gap="10px">
          <Text fontSize="sm" color={"#888c92"}>
            Show out of stock items
          </Text>
          <Switch colorScheme="gray" />
          <Text fontSize="sm" color={"#888c92"}>
            1463 results
          </Text>
        </Stack>
      </Stack>
      <Box my={2} >
        {Fillter?.map((item, index)=>(
         <Tag
         m={2}
         size={"md"}
         key={index}
         borderRadius='full'
         variant='outline'
         colorScheme='gray'
       >
         <TagLabel>{item}</TagLabel>
         <TagCloseButton 
         onClick={()=>RemoveTag(item)}
         />
       </Tag>   
        ))}
      </Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={5} >
        {products?.map((item, index)=>(
        <GridItem w="100%" h="350" key={index}>
           <ProductCard item={item} category={category}/> 
        </GridItem>
          ))}
      </Grid>

      <Box w={"70%"} m={"20px auto"}>
        <Pagination
          total={10}
          selected={curretpage}
          onPageChange={onPageChange}
        />
      </Box>
    </Box>
  );
};
