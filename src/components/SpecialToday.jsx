import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function SpecialToday() {
  const [data, setData] = useState([]);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(1);
  const { state, darkMode } = useContext(AppContext);
  const slideData = [state.data[0], state.data[1]];
  useEffect(() => {
    setData(slideData);
  }, []);
  const handleSlide = (move) => {
    let newData = [...data];
    if (move === 1) {
      newData.shift();
      newData.push(state.data[right + 1]);
      setRight(right + 1);
      setLeft(left + 1);
      setData(newData);
    } else {
      newData.unshift(state.data[left - 1]);
      newData.pop();
      setLeft(left - 1);
      setRight(right - 1);
      setData(newData);
    }
  };
  return (
    <Box>
      <Flex  justifyContent='space-between'>
        <Text mb="10px" fontSize="20px" fontWeight="500">
          TODAY'S SPECIAL
        </Text>
        <Flex>
          <Button
            w="10px"
            onClick={() => handleSlide(-1)}
            disabled={left === 0}
            borderRadius="50%"
            bg="none"
            border="1px"
            className="material-symbols-outlined"
          >
            arrow_left{" "}
          </Button>
          <Text fontSize='2xl'>{left + 1}/6</Text>
          <Button
            w="10px"
            disabled={right === 5}
            onClick={() => handleSlide(1)}
            borderRadius="50%"
            bg="none"
            border="1px"
            className="material-symbols-outlined"
          >
            arrow_right{" "}
          </Button>
        </Flex>
      </Flex>

      <Flex
        w={["95vw", "400px", "400px"]}
        border="1px solid grey"
        borderRadius="10px"
        p="20px"
        gap="10px"
        overflow="hidden"
      >
        {data?.map((el) => {
          return (
            <Box w="200px" borderRadius="5px">
              <NavLink to="#">
                <Image borderRadius="5px 5px 0px 0px" src={el.urlToImage} />
                <Text p="7px">{el.title}</Text>
              </NavLink>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
}
