import React, { useContext } from "react";
import { Box, Flex, Img } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";
export default function MiddleNavbar() {
  const { darkMode } = useContext(AppContext);

  return (
    <Flex alignContent="center" justifyContent="center" {...darkMode}>
      <Flex
        alignContent="center"
        justifyContent="center"
        w={['95vw', '95vw', '1200px']}
        paddingTop="10px"
        paddingBottom="10px"
        gap={["10px", "20px", "50px"]}
        fontSize={["1xl", "2xl", "2xl"]}
      >
        <Box _hover={{ color: "yellow" }}>
          <NavLink to="/news">NEWS</NavLink>
        </Box>
        <Box _hover={{ color: "yellow" }}>
          <NavLink to="/live">LIVE TV</NavLink>
        </Box>
        <Box>
          <NavLink to="/">
            <Img src="https://akm-img-a-in.tosshub.com/sites/all/themes/itg/logo.png?v=1.52" />
          </NavLink>
        </Box>
        <Box _hover={{ color: "yellow" }}>
          <NavLink to="/app">APP</NavLink>
        </Box>
        <Box _hover={{ color: "yellow" }}>
          <NavLink to="/magazine">MAGAZINE</NavLink>
        </Box>
      </Flex>
    </Flex>
  );
}
