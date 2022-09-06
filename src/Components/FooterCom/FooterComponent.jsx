import { ReactNode } from 'react';
import {
  Box,

  Stack,
  SimpleGrid,
 
  Link,
  Input,
  Text,
  Heading,
 
  InputRightElement,
  InputGroup
} from '@chakra-ui/react';
import {  blueMercury,myAccount,customerSupport,Resources} from './footerLinks';
import { ArrowForwardIcon} from '@chakra-ui/icons'

// The default icon size is 1em (16px)

import { BsTwitter ,BsInstagram,BsYoutube} from "react-icons/bs";
import { FaPinterest,FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <Box textDecoration={"none solid rgb(18, 40, 76)"} fontSize={"12px"} borderTop="1px solid #dcdcdc" fontFamily={`"Montserrat Regular",sans-serif`} color="gray" lineHeight={"20px"}>
    <Box
  p={10}  
  as={Stack}
   >
      
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={3}>
        <Stack align={'flex-start'}>
            <Heading size={"xs"}>Get Expert Beauty Insight & Offers</Heading>
            <Stack spacing={4}>
 

  <InputGroup>
  
    <Input placeholder='Email Address'  border={"0px"} borderBottom={"1px solid"} />
    <InputRightElement children={<ArrowForwardIcon color='gray.500' w="100px"/>} />
  </InputGroup>
  <Text>By continuing, you agree to Bluemercury's Privacy Practices.</Text>

  
<Stack direction={"row"} color='black' >
<BsTwitter />
    
 <FaPinterest />
 <FaFacebookF />
 <BsInstagram />
 <BsYoutube />
</Stack>
  <Text fontSize={"10px"}>Copyright 2022 bluemercury. All Rights Reserved.</Text>
</Stack>
          </Stack>
        
          <Stack align={'flex-start'}  ml="40px">
            <Heading size={"xs"}>BLUEMERCURY</Heading>
            {
              blueMercury.map((item)=>
              {
                return <Link href={'#'}>{item.lablename}</Link>
              })
            }
          </Stack>


          <Stack align={'flex-start'}>
            <Heading size={"xs"}>MY ACCOUNT</Heading>
           {
            myAccount.map((item)=>
            {
              return <Link href={'#'}>{item.lablename}</Link>
            })
           }
          </Stack>

          <Stack align={'flex-start'}>
            <Heading size={"xs"}>CUSTOMER SUPPORT</Heading>
            {
            customerSupport.map((item)=>
            {
              return <Link href={'#'}>{item.lablename}</Link>
            })
           }
          </Stack>
          <Stack align={'flex-start'}>
            <Heading size={"xs"}>RESOURCES</Heading>
            {
              Resources.map((item)=>
              {
                return <Link href={'#'}>{item.lablename}</Link>
              })
            }
          </Stack>

        
          
        </SimpleGrid>
        <Box>

</Box>
     

     
    </Box>
    </Box>
  );
}