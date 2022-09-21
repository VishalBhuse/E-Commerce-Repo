import { useAuth0 } from "@auth0/auth0-react";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Checkbox,
  Input,
  Text,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckOutSmallDiv } from "./CheckOutSmallDiv";

export const CheckOutPage = () => {
  const { loginWithRedirect, user } = useAuth0();
  const AddtoCart = useSelector((state) => state.Cartreducer.AddtoCart);
  const [adress, setAdress] = useState({});
  console.log(adress);
  const dispatch = useDispatch();

  let totalPrice = 0;

  const handleChange = (e) => {
    const inputName = e.target.name;
    setAdress({
      ...adress,
      [inputName]: e.target.value,
    });
  };
  const isError = adress === {};

  const handleOrder = () => {
    var options = {
      key: "rzp_test_EYtq2efJzkB7wg",
      key_secret: "c9uBIusanwftwxBqkTbSsazR",
      amount: totalPrice * 100,
      currency: "INR",
      name: "E-Shop",
      description: "for testing purpose",
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        // name: user?.nickname,
        // email: user?.email,
        // contact:"7904425033"
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: "#12284c",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <>
      <Box bg="#EDF2F7"></Box>
      <Box>
        <SimpleGrid
          padding="50px"
          columns={[1, 1, 2, 2]}
          spacing={"50px"}
          w="90%"
          m="auto"
          bg="#fff"
        >
          <Box>
            <Flex justifyContent={"space-between"}>
              <FormLabel htmlFor="email">Contanct Information</FormLabel>
              <FormLabel onClick={() => loginWithRedirect()}>
                Already have an account? Log in
              </FormLabel>
            </Flex>

            <Input variant="filled" bg="#F7F7F7" placeholder="Email" />

            <Checkbox mt="2" defaultChecked color={"#dcdcdc"}>
              Email me with news and offers
            </Checkbox>
            <Box mt={"20px"}>
              <FormLabel>Shipping Adress</FormLabel>
              <form
                variant="filled"
                bg="#F7F7F7"
                name="myForm"
                isInvalid={isError}
                required
              >
                <Input
                  variant="filled"
                  bg="#F7F7F7"
                  placeholder="First Name"
                  type={"text"}
                  name="Firstname"
                  onChange={handleChange}
                  size="md"
                />

                <Input
                  variant="filled"
                  bg="#F7F7F7"
                  placeholder="Last Name"
                  size="md"
                  mt={"30px"}
                  type={"text"}
                  name="Lastname"
                  onChange={handleChange}
                />

                <Input
                  variant="filled"
                  bg="#F7F7F7"
                  placeholder="Contry"
                  size="md"
                  mt={"30px"}
                  width={"98%"}
                  type={"text"}
                  name="contry"
                  onChange={handleChange}
                />

                <Input
                  placeholder="Adress"
                  size="md"
                  variant="filled"
                  bg="#F7F7F7"
                  mt={"30px"}
                  width={"98%"}
                  type={"text"}
                  name="Adress"
                  onChange={handleChange}
                />
                <Flex justifyContent={"space-around"} width={"98%"}>
                  <Input
                    placeholder="City"
                    size="md"
                    mt={"30px"}
                    width={"30%"}
                    type={"text"}
                    variant="filled"
                    bg="#F7F7F7"
                    name="City"
                    onChange={handleChange}
                  />
                  <Input
                    placeholder="State"
                    size="md"
                    mt={"30px"}
                    variant="filled"
                    bg="#F7F7F7"
                    width={"30%"}
                    ml="3"
                    type={"text"}
                    name="State"
                    onChange={handleChange}
                  />
                  <Input
                    placeholder="PIN code"
                    variant="filled"
                    bg="#F7F7F7"
                    size="md"
                    mt={"30px"}
                    width={"31%"}
                    ml="4"
                    type={"text"}
                    name="PIN"
                    onChange={handleChange}
                  />
                </Flex>

                <Input
                  placeholder="Phone"
                  size="md"
                  mt={"30px"}
                  width={"98%"}
                  variant="filled"
                  bg="#F7F7F7"
                  type={"number"}
                  name="Phone"
                  onChange={handleChange}
                />

                <Button
                  colorScheme={"#12284c"}
                  borderRadius={"0px"}
                  // type="submit"
                  mt={"30px"}
                  ml={"37%"}
                  bg="#12284c"
                  color={"white"}
                  width={"60%"}
                  onClick={handleOrder}
                >
                  Order Now
                </Button>
              </form>
            </Box>
          </Box>

          <Box>
            <FormLabel>Your Order</FormLabel>

            <Divider
              w="90%"
              orientation="horizontal"
              m="auto"
              size="10px"
              border="2"
              opacity={8}
            />
            <Box>
              {AddtoCart.map((item) => {
                totalPrice += item.price * item.quantity;
                return <CheckOutSmallDiv key={item.id} {...item} />;
              })}
            </Box>
            <Divider
              w="90%"
              orientation="horizontal"
              m="auto"
              size="10px"
              border="2"
              opacity={8}
            />
            <Box
              w="90%"
              m={"auto"}
              display={"flex"}
              my="5"
              gap={"10px"}
              justifyContent="space-between"
            >
              <Input placeholder="Apply Coupen Code" size="md" width={"60%"} />
              <Button
                w={"30%"}
                size={"lg"}
                borderRadius="0px"
                colorScheme={"#12284c"}
                bg="#12284c"
                fontFamily={"Roboto, sans-serif"}
                color={"white"}
              >
                Apply
              </Button>
            </Box>
            <Divider
              w="90%"
              orientation="horizontal"
              m="auto"
              size="10px"
              border="2"
              opacity={8}
            />
            <Box color="gray" my="10px" w="90%" m={"auto"}>
              <Flex justifyContent={"space-between"} p="5">
                <Text>Subtotal</Text>
                <Text> ₹ {totalPrice.toLocaleString("hi-IN")}</Text>
              </Flex>
            </Box>
            <Divider
              w="90%"
              orientation="horizontal"
              m="auto"
              size="10px"
              border="2"
              opacity={8}
            />
            <Flex
              w="90%"
              m={"auto"}
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
        </SimpleGrid>
      </Box>
    </>
  );
};
