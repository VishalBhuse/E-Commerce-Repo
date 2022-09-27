import React, { useEffect } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Filter } from "./FillterData";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_FILLTER } from "../../Redux/FillterReducer/actionType";

export const LeftSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const Fillter = useSelector((store) => store.Fillters.Fillter);

  const dispatch = useDispatch();
  // const { category } = useParams();

  const handleAddFilter = (category) => {
    let newFillter = [...Fillter];

    if (newFillter.includes(category)) {
      newFillter.splice(newFillter.indexOf(category), 1);
    } else {
      newFillter.push(category);
    }

    dispatch({ type: ADD_FILLTER, payload: newFillter });
  };

  useEffect(() => {
    if (Fillter) {
      setSearchParams({ category: Fillter });
    }
  }, [setSearchParams, Fillter]);

  useEffect(() => {
    dispatch({ type: ADD_FILLTER, payload: searchParams.getAll("category") });
  }, []);

  return (
    <Box mt={5} color={"#657fa1"}>
      <Heading size="sm" mb={2}>
        FILTER BY
      </Heading>
      <Accordion allowToggle>
        {Filter?.map((obj, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontSize="lg" color={"#657fa1"}>
                    {obj.Name}
                  </Text>
                  <Text fontSize="xs" color={"#657fa1"}>
                    {obj.subtitle}
                  </Text>
                </Box>
                <AddIcon style={{ color: "#657fa1", fontSize: "15px" }} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <hr />
              <Stack
                spacing={2}
                direction="column"
                h={"200px"}
                overflowX="auto"
                sx={{
                  "::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
              >
                {obj.Sub?.map((item, index) => (
                  <HStack spacing={"10px"}>
                    <Box>
                      <input
                        style={{
                          height: "18px",
                          width: "18px",
                          display: "flex",
                          alignItems: "center",
                        }}
                        type={"checkbox"}
                        checked={Fillter.includes(item)}
                        key={index}
                        onClick={() => handleAddFilter(item)}
                      />
                    </Box>
                    <Box>{item}</Box>
                  </HStack>
                ))}
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};
