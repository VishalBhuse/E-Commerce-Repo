import {
  Box,
  Stack,
} from "@chakra-ui/react";
import Breadcrum from "../../Components/ProductCom/Breadcrumb";
import { LeftSection } from "../../Components/ProductCom/LeftSection";
import { RightSection } from "../../Components/ProductCom/RightSection";


export const Products = () => {
    return (
    <Box w="95%" m="auto">
      <Breadcrum />
      <Stack direction={"row"} justifyContent={"space-between"}>
        <LeftSection />
        <RightSection />
      </Stack>
    </Box>
  );
};

