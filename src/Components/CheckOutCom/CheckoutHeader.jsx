import React from 'react'
import { Box, Heading, Image, Stack, Text,  Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator, } from '@chakra-ui/react'
    import { ChevronRightIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { PaypalPayment } from './PaypalPayment'
export const CheckoutHeader = () => {
  return (
    <Box>
       <Stack ml={"40%"} mt={10}>
        
        <Image width={"60%"} src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/blm-checkout-logo.png?110142"/>
        </Stack> 
        <Box mt={5} mb={5} ml="10%" >
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
  <BreadcrumbItem>
    <BreadcrumbLink as={Link} to='/mainCartBag'>Cart</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink as={Link} to='#'>Customer information</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem >
    <BreadcrumbLink as={Link} to='#'>Shipping method</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbItem >
    <BreadcrumbLink as={Link} to='#'>Payment method</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
        </Box>
        <Box>
          <PaypalPayment />
        </Box>
    </Box>
  )
}
