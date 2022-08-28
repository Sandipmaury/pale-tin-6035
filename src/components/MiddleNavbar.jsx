import React, { useContext } from "react";
import {
  Box,
  Collapse,
  Flex,
  Hide,
  Img,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import SideBar from "./SideBar";
export default function MiddleNavbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { darkMode } = useContext(AppContext);

  return (
    <Flex
      alignContent="center"
      justifyContent="center"
      {...darkMode}
      shadow="lg"
      pos={["sticky", "static", "static"]}
      top={["-1px", "0px", "0px"]}
      flexDirection={['column', 'row', 'row']}
    >
      <Flex
        px="6px"
        alignItems="center"
        justifyContent={["center", "center", "center"]}
        w={["95vw", "95vw", "1200px"]}
        paddingTop="10px"
        paddingBottom="10px"
        gap={["10px", "20px", "50px"]}
        fontSize={["13px", "2xl", "2xl"]}
      >
        <Hide above="sm">
          <Box
            {...(isOpen ? darkMode : null)}
            cursor="pointer"
            onClick={onToggle}
            className="material-symbols-outlined"
          >
            {!isOpen ? "menu" : "close"}
          </Box>
        </Hide>
        <Box _hover={{ color: "yellow" }}>
          <NavLink to="/">NEWS</NavLink>
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
        <Hide above="sm">
          <NavLink to='#'>
          <Box 
            borderLeft='2px solid grey' 
            pl='4px'
            fontSize='16px'
            className="material-symbols-outlined"
          >
            currency_bitcoin
          </Box>
          </NavLink>
          
        </Hide>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Hide above="sm">{isOpen ? <SideBar /> : null}</Hide>
      </Collapse>
    </Flex>
  );
}
