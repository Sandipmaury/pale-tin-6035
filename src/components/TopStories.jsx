import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function TopStories() {
  const { state, darkMode } = useContext(AppContext);
  const top10Stories = state.data;
  top10Stories.length = 30;
  return (
    <Box w="20%"  border="1px solid grey" >
      <Text pl="7px" fontWeight="bold" mb="10px" fontSize="2xl">
        Top Stories
      </Text>
      <Box overflow="scroll" h="500px">
        {top10Stories?.map((el) => {
          return (
            <Box
              borderBottom="1px solid grey"
              p="7px"
              _hover={darkMode.color === "black"?{ bg: "whitesmoke"}:{color:'red'}}
            >
              <Text  cursor="pointer">{el.title}</Text>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
