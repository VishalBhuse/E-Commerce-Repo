import React, { useEffect, useMemo, useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { Filter } from "./FillterData";
import { useParams, useSearchParams } from "react-router-dom";
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
    <Box mt={5} w="25%" color={"#657fa1"}>
      <Heading size="sm" mb={2}>
        FILTER BY
      </Heading>
      <Accordion allowToggle>
        {Filter.map((obj, index) => (
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
              <InputGroup size="sm" my={2}>
                <Input placeholder="Search" />
                <InputRightAddon>
                  <SearchIcon />
                </InputRightAddon>
              </InputGroup>
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
                {obj.Sub.map((item, index) => (
                  <Checkbox
                    color={"#657fa1"}
                    defaultChecked={Fillter?.includes(item) ? true : false}
                    colorScheme="#657fa1"
                    size="lg"
                    key={index}
                    onChange={() => handleAddFilter(item)}
                  >
                    {item}
                  </Checkbox>
                ))}
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};
