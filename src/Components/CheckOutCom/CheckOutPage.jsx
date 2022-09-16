import { useAuth0 } from "@auth0/auth0-react";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Checkbox,
  Heading,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAdress, getAdress } from "../../Redux/Adress/action";
import { CheckOutSmallDiv } from "./CheckOutSmallDiv";

export const CheckOutPage = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  console.log(user);
  const AddtoCart = useSelector((state) => state.Cartreducer.AddtoCart);
  const [adress, setAdress] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  let totalPrice = 0;

  const handleChange = (e) => {
    const inputName = e.target.name;
    setAdress({
      ...adress,
      [inputName]: e.target.value,
    });
  };
  const isError = adress === {};

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
      });
    }
    var x =
      document.forms["myForm"]["Firstname"]["Lastname"]["City"]["State"]["PIN"][
        "Phone"
      ].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  };
  const handleOrder = () => {
    var options = {
      key: "rzp_test_Ir8rhszHzFG7Xg",
      key_secret:"ec3Q9O6SUrm9iNvEPqdKvlhN",
      amount: totalPrice * 100,
      currency:"INR",
      name:"E-Shop",
      description:"for testing purpose",
      handler: function(response){
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name:user?.nickname,
        email:user?.email,
        // contact:"7904425033"
      },
      notes:{
        address:"Razorpay Corporate office"
      },
      theme: {
        color:"#12284c"
      }
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <Box>
      <Box>
        <Flex>
          <Box width="50%" p="4">
            <Flex justifyContent={"space-between"}>
              <FormLabel htmlFor="email">Contanct Information</FormLabel>
              <FormLabel onClick={() => loginWithRedirect()}>
                Already have an account? Log in
              </FormLabel>
            </Flex>

            <Input placeholder="Email" size="lg" width={"100%"} />
            <Checkbox defaultChecked color={"#dcdcdc"}>
              Email me with news and offers
            </Checkbox>
            <Box mt={"20px"}>
              <FormLabel>Shipping Adress</FormLabel>

              <form
                name="myForm"
                onSubmit={haddleSubmit}
                isInvalid={isError}
                required
              >
                <Input
                  placeholder="First Name"
                  type={"text"}
                  name="Firstname"
                  onChange={handleChange}
                  size="lg"
                  width={"48%"}
                />

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
                  placeholder="Contry"
                  size="lg"
                  mt={"10px"}
                  width={"98%"}
                  type={"text"}
                  name="contry"
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
                  value="ORDER NOW"
                  ml={"37%"}
                  bg="#12284c"
                  color={"white"}
                  width={"60%"}
                  
                  onClick={handleOrder}     
                  />

              </form>
            </Box>
          </Box>

          <Box bg="#f5f5f5" width="50%" p="6">
            <Box>
              {AddtoCart.map((item) => {
                totalPrice += item.price*item.quantity;
                return <CheckOutSmallDiv key={item.id} {...item} />;
              })}
            </Box>
            <Box bg="gray" h={"1px"} width={"80%"}></Box>
            <Box display={"flex"} p="2" mt="10px" mr={"10%"} gap={"10px"}>
              <Input placeholder="Apply Coupen Code" size="lg" width={"60%"} />
              <Button
                w={"30%"}
                size={"lg"}
                borderRadius="0px"
                bg="#12284c"
                fontFamily={"Roboto, sans-serif"}
                color={"white"}
              >
                Apply
              </Button>
            </Box>
            <Box bg="gray" h={"1px"} mt="10px" width={"80%"}></Box>
            <Box color="gray" mt="10px" width={"80%"}>
              <Flex justifyContent={"space-between"}>
                <Text>Subtotal</Text>
                <Text> ₹ {totalPrice.toLocaleString("hi-IN")}</Text>
              </Flex>
              {/* <Flex justifyContent={"space-between"}>
                <Text>Shipping</Text>
                <Text fontSize={"13px"}>Calculated at next step</Text>
              </Flex> */}
            </Box>
            <Box bg="gray" h={"1px"} mt="10px" width={"80%"}></Box>
            <Flex
              mt="10px"
              fontSize={"20px"}
              fontWeight={800}
              justifyContent={"space-between"}
              width={"80%"}
            >
              <Text>Total</Text>
              <Text> ₹ {totalPrice.toLocaleString("hi-IN")}</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
