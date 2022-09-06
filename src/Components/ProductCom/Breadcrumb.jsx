import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React from "react";
import {ChevronRightIcon} from "@chakra-ui/icons"
import { useParams } from "react-router-dom";

const Breadcrum = () => {
  const {category} = useParams();
  return (
    <Breadcrumb spacing="8px"  separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#" textTransform={"capitalize"}>{category}</BreadcrumbLink>
      </BreadcrumbItem>

    </Breadcrumb>
  );
};

export default Breadcrum;
