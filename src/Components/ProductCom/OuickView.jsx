import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { QuickPro } from "./QuickPro";
import styles from "./Quick.module.css";

export const OuickView = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <div>
      <div className={styles.product1quckview}>
        <button className={styles.button6} onClick={onOpen}>
          Quick View
        </button>
      </div>
      <Modal
        size={"4xl"}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay 
         bg='none'
         backdropFilter='auto'
         backdropInvert='60%'
         backdropBlur='2px'
        />
        <ModalContent>
          <br />
          <br />
          <ModalCloseButton />
          <ModalBody pb={6}>
            <QuickPro item={props.item} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};
