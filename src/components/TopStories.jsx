import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function TopStories() {
  const { state, darkMode } = useContext(AppContext);
  const top30Stories = state.data;
  top30Stories.length = 30;
  return (
    <Box w={['100%', '100%', '20%']}  border="1px solid grey" >
      <Text pl="7px" fontWeight="bold" mb="10px" fontSize="2xl">
        Top Stories
      </Text>
      <Box overflowY={['visible', 'scroll', 'scroll']} h={['auto', "500px", "500px"]}>
        {top30Stories?.map((el) => {
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
