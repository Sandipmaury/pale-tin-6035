import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function VisualStories() {
  const [data, setData] = useState([]);
  const [left, setLeft] = useState(3);
  const [right, setRight] = useState(7);

  const visiblity =
    left === 3 ? { visibility: "hidden" } : { visibility: "visible" };
  const { state, darkMode } = useContext(AppContext);
  const slideData = [
    state.data[3],
    state.data[4],
    state.data[5],
    state.data[6],
    state.data[7],

  ];
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
      <Text mb="10px" fontSize="20px" fontWeight="500">
        VISUAL STORIES
      </Text>
      <Grid
        pos="relative"
        w={['95vw', '65%', '100%']}
        border="1px solid grey"
        borderRadius="10px"
        p="20px"
        gap="10px"
        overflow="hidden"
        templateColumns= 'repeat(5, 130px)'
      >
        {data?.map((el) => {
          return (
            <Box border="1px solid grey" borderRadius="5px">
              <NavLink to="#">
                <Image borderRadius="5px 5px 0px 0px" src={el.urlToImage} />
                <Text p="7px">{el.title}</Text>
              </NavLink>
            </Box>
          );
        })}
        <Button
          w="10px"
          onClick={() => handleSlide(-1)}
          {...visiblity}
          borderRadius="50%"
          bg="none"
          border="1px"
          pos="absolute"
          top="40%"
          left="2px"
          className="material-symbols-outlined"
        >
          arrow_left{" "}
        </Button>
        <Button
          w="10px"
          onClick={() => handleSlide(1)}
          borderRadius="50%"
          bg="none"
          border="1px"
          right="2px"
          top="40%"
          pos="absolute"
          className="material-symbols-outlined"
        >
          arrow_right{" "}
        </Button>
      </Grid>
    </Box>
  );
}
