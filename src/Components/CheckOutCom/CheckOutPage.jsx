import {
  Box,
  Button,
  Flex,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Checkbox,
  Heading,
  Image,
  Input,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAdress, getAdress } from "../../Redux/Adress/action";
import { CheckoutHeader } from "./CheckoutHeader";

import { CheckOutSmallDiv } from "./CheckOutSmallDiv";

export const CheckOutPage = () => {
  const AddtoCart = useSelector((state) => state.Cartreducer.AddtoCart);

    const uniqueIds = [];
console.log(AddtoCart)
const unique = AddtoCart.filter(element => {
  const isDuplicate = uniqueIds.includes(element.id);

  if (!isDuplicate) {
    uniqueIds.push(element.id);

    return true;
  }

  return false;
});
  let totalPrice = 0;
  const [adress,setAdress]=useState({})
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const inputName = e.target.name;
    setAdress({
      ...adress,
      [inputName]: e.target.value,
    });
  };
  const isError = adress === {}
  const haddleSubmit = (e) => {
    e.preventDefault();
    var value = adress;
console.log(value);
    if (value) {
      addAdress({
        value,
        dispatch,
      }).then(() => {
        getAdress(dispatch);
      });;
    }
    var x = document.forms["myForm"]["Firstname"]["Lastname"]["City"]["State"]["PIN"]["Phone"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  };
  let navigate=useNavigate()
  const handdleClick=()=>
  {
 
  }
  const toast = useToast();
  return (
    <Box>
      <Box>
        <Flex>
          <Box width="50%" p="4">
           <CheckoutHeader />
            <Flex justifyContent={"space-between"}>
              <FormLabel htmlFor="email">Contanct Information</FormLabel>
              <FormLabel onClick={()=>navigate("/login")}>
                {" "}
                Already have an account?Log in
              </FormLabel>
            </Flex>

            <Input placeholder="Email" size="lg" width={"100%"} />
            <Checkbox defaultChecked color={"#dcdcdc"} >Email me with news and offers</Checkbox>
            <Box mt={"20px"}>
              <FormLabel>Shipping Adress</FormLabel>

              <form name="myForm" onSubmit={haddleSubmit} isInvalid={isError} required>
              <Input
                  placeholder="contry"
                  size="lg"
                  mt={"10px"}
                  width={"98%"}
                  type={"text"}
            name="contry"
            onChange={handleChange}
  
                />

                <Input placeholder="First Name"   type={"text"}
            name="Firstname"
            onChange={handleChange} size="lg" width={"48%"} />

                <Input
                  placeholder="Last Name"
                  size="lg"
                  mt={"10px"}
                  ml="4"
                  width={"48%"}
                  type={"text"}
            name="Lastname"
            onChange={handleChange}
                />

                <Input
                  placeholder="Adress"
                  size="lg"
                  mt={"10px"}
                  width={"98%"}
                  type={"text"}
            name="Adress"
            onChange={handleChange}
                />
                <Flex justifyContent={"space-around"} width={"98%"}>
                  <Input
                    placeholder="City"
                    size="lg"
                    mt={"10px"}
                    width={"30%"}
                    type={"text"}
                    name="City"
                    onChange={handleChange}
                  />
                  <Input
                    placeholder="State"
                    size="lg"
                    mt={"10px"}
                    width={"30%"}
                    ml="3"
                    type={"text"}
                    name="State"
                    onChange={handleChange}
                  />
                  <Input
                    placeholder="PIN code"
                    size="lg"
                    mt={"10px"}
                    width={"31%"}
                    ml="4"
                    type={"text"}
                    name="PIN"
                    onChange={handleChange}
                  />
                </Flex>

                <Input
                  placeholder="Phone"
                  size="lg"
                  mt={"10px"}
                  width={"98%"}
                  type={"text"}
                  name="Phone"
                  onChange={handleChange}
                />
                <Input
                borderRadius={"0px"}
                  type="submit"
                  placeholder="Phone"
                  size="lg"
                  mt={"10px"}
                  value="CONTINUE TO SHIPPING METHOD"
                  ml={"37%"}
                  bg="#12284c"
                  color={"white"}
                  width={"60%"}
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}
                  onClick={() =>
                    handdleClick(
                      toast({
                        position: "top",
                        isClosable: true,

                        bg: "blue",
                        duration: 3000,
                        render: () => (
                          <Box borderRadius={"50px"}>
                            <Box
                              color="white"
                              textAlign={"center"}
                              width={"500px"}
                              p={3}
                          
                            
                            >
                              <Heading>Order Successfull</Heading>
                       <Image src={"https://assets.materialup.com/uploads/9157d69a-f77a-4dd7-8efa-0dbcf2dca0f5/preview.gif"}/>
                          
                            </Box>
                            
                          </Box>
                        ),
                 
                      })
                    )
                  }
                />
              </form>
            </Box>
      
          </Box>
      
          <Box bg="#f5f5f5" width="50%" p="6">
            <Box>
              {unique.map((item) => {
            totalPrice+=item.priceMax
                return <CheckOutSmallDiv key={item.id} {...item} />;
              })}
            </Box>
            <Box bg="gray" h={"1px"} width={"80%"}></Box>
            <Box display={"flex"} p="2" mt="10px" mr={"10%"} gap={"10px"}>
              <Input placeholder="Apply Coupen Code" size="lg" width={"60%"} />
              <Button  w={"30%"}
     
          size={"lg"}
         borderRadius="0px"
          bg="#12284c"
          fontFamily={"Roboto, sans-serif"}
          color={"white"}
          >Apply</Button>
            </Box>
            <Box bg="gray" h={"1px"} mt="10px" width={"80%"}></Box>
            <Box color="gray" mt="10px" width={"80%"}>
              <Flex justifyContent={"space-between"}>
                <Text>Subtotal</Text>
                <Text> ₹.{(totalPrice).toLocaleString("hi-IN")} .00</Text>
              </Flex>
              <Flex justifyContent={"space-between"}>
                <Text>Shipping</Text>
                <Text fontSize={"13px"}>Calculated at next step</Text>
              </Flex>
            </Box>
            <Box bg="gray" h={"1px"} mt="10px" width={"80%"}></Box>
            <Flex mt="10px" fontSize={"20px"} fontWeight={800} justifyContent={"space-between"} width={"80%"}>
                <Text>Total</Text>
                <Text> ₹.{(totalPrice).toLocaleString("hi-IN")} .00</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
