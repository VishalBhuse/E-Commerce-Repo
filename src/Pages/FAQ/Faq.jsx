import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const faqarr = [
  {
    text1: " 1. Is the memory and storage expandable?",
    text2:
      "No, the RedmiBook e-Learning Edition comes with fixed storage and RAM. It offers 8 GB DDR4 3200 MHz and offers two storage options to choose from, 256 GB SATA SSD /512 GB NVMe SSD.",
  },
  {
    text1:
      "2. What does the RedmiBook e-Learning Edition come preloaded with? ",
    text2:
      "Every RedmiBook e-learning comes preloaded with Windows 10 Home, licensed version of MS Office Home and Student Edition 2019, Mi SmartShare and DTS Audio Processing App.",
  },
  {
    text1: "3. What is the clock speed of RedmiBook e-Learning?",
    text2:
      " This laptop uses an 11th Gen Intel® TigerLake Core™ i3-1115G4 processor, which has a base clock of 3.0 GHz and can boost upto 4.1 GHz ensuring a smooth performance at low and high work loads.",
  },
  {
    text1: "4. How many hours of battery life can I expect? ",
    text2:
      "The RedmiBook e-Learning is equipped with approximately 10 hours of battery life on a regular usage- mix of daily productivity tasks.",
  },
  {
    text1: "5. Does the RedmiBook e-Learning offer fast charging?",
    text2:
      "The RedmiBook e-Learning comes with a 65W and provides upto 10 hours of battery backup and charges up to 50% in just 33 mins.",
  },
  {
    text1:
      "6. Does this laptop have a fingerprint sensor and backlit keyword as some answers?    ",
    text2:
      "No, the fingerprint reader and backlit feature is not available on this laptop.  ",
  },
  {
    text1: "7.  Can I play games on this notebook? ",
    text2:
      "The RedmiBook e-Learning comes with Integrated UHD graphics which is perfect for productivity applications but is not suited for gaming.",
  },
  {
    text1: "8.  Can we use this for coding?    ",
    text2:
      " Yes, our RedmiBook e-Learning Edition has a fast 11th gen processor which can be used for coding requirements of students.     ",
  },
  {
    text1: "9. What is the warranty on the RedmiBook e-Learning Edition?    ",
    text2: "We are offering 1 year of warranty on product and accessories.   ",
  },
  {
    text1: "10. How to resolve service queries?",
    text2:
      "  One can avail Walk-in Service or Home Service for resolving any of their service queries. We have a strong 700+ dedicated laptops ASC Network in India  across 603 cities and 522 districts covering 19K+ Pincodes.",
  },
  {
    text1:
      "11.  I  would like to update the drivers for my laptop. Where are the latest drivers available?    ",
    text2:
      "You can find the latest drivers for your laptop at this location: https://www.mi.com/in/service/support/redmibookdrivers.html Important: Please download and install only drivers for your laptop model.",
  },
  {
    text1:
      "12. How do I activate the pre-installed Microsoft Office Home & Student 2019 on my RedmiBook e-learning Edition?    ",
    text2:
      "You can activate the pre-installed MS Office Home & Student 2019 on your device through simple process as shown here- https://youtu.be/zetZh7zGgOA    ",
  },
];

export const Faq = () => {
  return (
    <Box>
      <Box
        backgroundImage={
          "https://i01.appmifile.com/webfile/globalimg/in/service/faq-banner.png"
        }
        height="200px"
        color="#fff"
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
      >
        <Heading fontSize={"40px"}>Frequently Asked Questions</Heading>
      </Box>
      <Box w="80%" m="50px auto">
        {faqarr?.map((text) => (
          <Accordion allowToggle mt="5px" border="white">
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: "grey", color: "white" }}>
                  <Box flex="1" textAlign="left">
                    {text.text1}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel textAlign={"left"} color="#B3B1A8">{text.text2}</AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};
