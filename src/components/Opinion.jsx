import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function Opinion() {
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
          OPINION
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

      <Grid
        w={["95vw", "400px", "400px"]}
        gap="10px"
        overflow="hidden"
        templateColumns='300px 1fr'
      >
        {data?.map((el) => {
          return (
            <Box w='270px' h='300px' textAlign='center' p='20px'
             borderRadius="5px" border="1px solid grey"
              _hover={darkMode.color === 'white' ? {color:'red'} : {color:'blue'}}>
              <NavLink to="#">
                <Image ml='65px' alignSelf='center' w='100px' h='100px' borderRadius="50%" border="5px solid yellow"  src={el.urlToImage} />
                <Text borderBottom='1px solid grey' mt='20px' pb='50px'>{el.title}</Text>
              </NavLink>
              <Text color='gray' fontStyle='oblique' mt='15px'>Sandip Maurya</Text>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
}
