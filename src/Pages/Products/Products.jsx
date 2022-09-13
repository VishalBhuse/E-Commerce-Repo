import {
  Box,
  HStack
} from "@chakra-ui/react";
import Breadcrum from "../../Components/ProductCom/Breadcrumb";
import { LeftSection } from "../../Components/ProductCom/LeftSection";
import { RightSection } from "../../Components/ProductCom/RightSection";


export const Products = () => {
    return (
    <Box w="95%" m="auto">
      <Breadcrum />
      <HStack w="100%" flexWrap={"wrap"} alignItems={"flex-start"}>
        <Box w={["100%", "100%", "25%", "25%"]}><LeftSection /></Box>
        <Box w={["100%", "100%", "73%", "74%"]}><RightSection /></Box>
      </HStack>
    </Box>
  );
};

