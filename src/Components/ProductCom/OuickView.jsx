import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { SingleProduct } from '../SingleProCom/SingleProduct'
import { QuickPro } from './QuickPro'

export const  OuickView = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button borderRadius={0} onClick={onOpen} w="98%" variant='outline'>
          Quick View
        </Button>

        <Modal
        size={"4xl"}
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <br/>
            <br/>
            {/* <ModalHeader>Create your account</ModalHeader> */}
            <ModalCloseButton  />
            <ModalBody pb={6}>
              <QuickPro item={props.item}/>
            </ModalBody>
  
          </ModalContent>
        </Modal>
      </>
    )
  }


