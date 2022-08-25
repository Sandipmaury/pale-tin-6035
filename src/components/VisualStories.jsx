import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function VisualStories() {
    const [data, setData] = useState([]);
  const { state, darkMode } = useContext(AppContext);
  const slideData = state.data;
    slideData.length = 5;
    useEffect(()=>{
        setData(slideData);

    },[data])
  let i=0;
  const handleSlide = (move)=>{
  }
  return (
    <Box>
      <Text fontSize="2xl" fontWeight="500">
        VISUAL STORIES
      </Text>
      <Flex pos="relative" w="60%" border="1px" h="200px" gap="5px">
        {data?.map((el) => {
          return (
            <Box border="1px solid grey">
              <Image src={el.urlToImage} />
              <Text>{el.title}</Text>
            </Box>
          );
        })}
        <Button
          onClick={()=>handleSlide('left')}
          disabled={data[0]=== state.data[0]}
          borderRadius="50%"
          bg="none"
          border="1px"
          pos="absolute"
          top="40%"
          left="-30px"
          className="material-symbols-outlined"
        >
          arrow_left{" "}
        </Button>
        <Button
          onClick={()=>handleSlide('right')}
          borderRadius="50%"
          bg="none"
          border="1px"
          right="-30px"
          top="40%"
          pos="absolute"
          className="material-symbols-outlined"
        >
          arrow_right{" "}
        </Button>
      </Flex>
    </Box>
  );
}
