import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Heading,
  IconButton,
  Img,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { AiFillStar, AiTwotoneHeart } from "react-icons/ai";
import {GrFormAdd, GrSubtract} from "react-icons/gr"


export const QuickPro = (props) => {
  const {category} = useParams()
  return (
    <Box >
      <Stack direction={"row"}>
        <Box w={"50%"} >
          <Img
            cursor={"pointer"}
            src={props.item.images[0].src}
            w="100%"
            h="300px"
            alt=""
            srcSet=""
          />
        </Box>
        <Box w={"50%"} px={2} >
          <Stack direction={"column"}>
            <Text fontSize={"xl"} textTransform="uppercase" fontWeight={"600"}>
              {props.item.type}
            </Text>
            <Text fontSize={"md"} fontWeight={"200"}>
              {props.item.title}
            </Text>
            <Text fontSize={"md"} fontWeight={"600"}>
              ₹ {props.item.price}
            </Text>
          </Stack>
          <Stack direction={"row"}>
            <AiFillStar color="gold" />
            <AiFillStar color="gold" />
            <AiFillStar color="gold" />
            <AiFillStar color="gold" />
            <AiFillStar color="gold" />
          </Stack>
          <Text fontSize={"md"} fontWeight={"600"}>
            CONSCIOUS BEAUTY
          </Text>

          <Text fontSize={"md"} fontWeight={"200"}>
            Skin improving & illuminating tint, the perfect complexion enhancing
            fusion of skincare and makeup.
          </Text>
          <Select placeholder="Select option" my={2}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Button borderRadius={0} w="100%" my={2} variant="outline">
            ONLY A FEW LEFT!
          </Button>
          <Stack direction={"row"} justify="space-evenly">

          <ButtonGroup size='md' isAttached variant='outline'>
  <Button><GrFormAdd /></Button>
  <Button disabled={true}>1</Button>
  {/* <IconButton aria-label='Add to friends'>{1}</IconButton> */}
  <Button><GrSubtract /></Button>
</ButtonGroup>

          <Button leftIcon={<AiTwotoneHeart  />} colorScheme='black' variant='outline' borderRadius={0}>
    ADD TO WISHLIST
  </Button>
          </Stack>

          <Button borderRadius={0} w="100%" my={2} variant="outline" colorScheme={"#12284c"}>
            ADD TO BAG
          </Button>
        </Box>
      </Stack>
      <Center>
        <Link to={`/${category}/${props.item.id}`}>
          <Text fontSize={"lg"} fontWeight={"600"}>
            VIEW FULL DETAILS
          </Text>
        </Link>
      </Center>
    </Box>
  );
};
