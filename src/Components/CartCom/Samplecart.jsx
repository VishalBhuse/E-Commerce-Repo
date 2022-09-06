
import React, { useEffect } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Box,
    Text,
    Icon,
    Heading,
  } from "@chakra-ui/react";

  import { useDispatch, useSelector } from "react-redux";
  
 
  import { useNavigate } from "react-router-dom";
import { SideCartShow } from './SideCartShow';
import { getCart } from '../../Redux/CartReducer/action';
import { BagIcon } from './BagIcon';


export const Samplecart = () => {
    const navigate = useNavigate();
    const AddtoCart = useSelector((state) => state.Cartreducer.AddtoCart);
console.log(AddtoCart)
    const uniqueIds = [];

const unique = AddtoCart?.filter(element => {
  const isDuplicate = uniqueIds.includes(element.id);

  if (!isDuplicate) {
    uniqueIds.push(element.id);

    return true;
  }

  return false;
});
//console.log(unique)

    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleClick = (newSize) => {
      onOpen();
    };
    let dispatch=useDispatch()
    useEffect(() => {
      
      getCart(dispatch);
    }, [dispatch]);
    let countt=0
  
  
  let totalPrice=0
  return (
    <Box ml="">
    <Box   fontFamily="Montserrat Semi Bold" >
    <Button fontWeight={400}  onClick={() => handleClick("md")} key={"md"}  variant={"ghost"}   _hover={{
          
           variant:"ghost",
         
          }}>
            
     <BagIcon  />
        
     <Box

        pos={"absolute"}
        top="4"
        left={"24px"}
        
        textAlign="center"
      >
        <Text color={"white"} fontSize="12px" >
        {AddtoCart?.length}
        </Text>
      </Box>
           BAG
    </Button>
    <Drawer onClose={onClose} isOpen={isOpen} size={"md"} bgColor="#f8f8f8">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader display={"flex"}><Heading ml="3">{AddtoCart?.length} YOUR BAG</Heading> </DrawerHeader>
        <Box borderBottom={"0.1px solid gray"}></Box>
        <DrawerBody bgColor="#f8f8f8"  >
          <Box mt="2">
            <Text color="#61789c" fontFamily={`"Montserrat Semi Bold", sans-serif`} fontWeight="700" fontSize={"11"}>FREE RETURNS ON ALL ORDERS</Text>
          </Box>
          <Box mt="2">
              {
                  unique?.map((item)=>
                  {
                    totalPrice+=item.priceMax
                      return  <SideCartShow key={item.id} {...item} />
                  })
              }
         
          </Box>
          <Button
        
          w={"80%"}
          mt={8}
          size={"md"}
          py={"6"}
          bg="#12284c"
          fontFamily={"Roboto, sans-serif"}
          color={"white"}
          textTransform={"uppercase"}
          _hover={{
            transform: "translateY(2px)",
            boxShadow: "lg",
          }}
          
          onClick= {()=> navigate("/mainCartBag")} >
          VIEW BAG | ₹. {(totalPrice).toLocaleString("hi-IN")}
        </Button>
         
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </Box>
  </Box>
  )
}
