import React, { useContext } from "react";
import { Flex, Link, Box, Collapse, useDisclosure, Hide } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import DropDown from "./DropDown";
import { AppContext } from "../context/AppContext";
export default function LowerNavbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { darkMode } = useContext(AppContext);
  const feedStyle = {
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between",
  };
  const borderBottom = ['1px solid gray', 'none', 'none'];
  const checkActive = ({ isActive }) =>
    isActive ? { color: "yellow" } : { color: "white" };
  return (
    <Flex
      position="relative"
      alignContent="center"
      justifyContent="center"
      bg={[ 'transparent', "#a00606", "#a00606"]}
    >
      <Flex
        alignContent="center"
        justifyContent="space-between"
        w={['95vw', '95vw', '1200px']}
        paddingTop="5px"
        paddingBottom="5px"
        fontSize="1xl"
        color={['transparent', "white","white"]}
        overflow={['scroll', 'scroll', 'auto']}
      >
        <Flex gap="20px" flexDirection={['column', 'row', 'row']}>
          <NavLink style={checkActive} to="/">
            HOME
          </NavLink>
          <NavLink to="/" style={feedStyle}>
            <Box
              style={{ fontSize: "20px" }}
              className="material-symbols-outlined"
            >
              edit
            </Box>
            MY FEED
          </NavLink>
          <NavLink style={checkActive} to="/india">
            INDIA
          </NavLink>
          <NavLink style={checkActive} to="/world">
            WORLD
          </NavLink>
          <NavLink style={checkActive} to="/business">
            BUSINESS
          </NavLink>
          <NavLink style={checkActive} to="/tech">
            TECH
          </NavLink>
          <NavLink style={checkActive} to="/movies">
            MOVIES
          </NavLink>
          <NavLink style={checkActive} to="/sports">
            SPORTS
          </NavLink>
          <NavLink style={checkActive} to="/science">
            SCIENCE
          </NavLink>
          <NavLink style={checkActive} to="/best_universities">
            BEST UNIVERSITIES
          </NavLink>
        </Flex>
        <Hide below="sm">
        <Flex gap="15px" flexDirection="row-reverse">
          <Box _hover={{ color: "yellow" }}>
            <NavLink to="/login" className="material-symbols-outlined">
              person
            </NavLink>
          </Box>
          <Box _hover={{ color: "yellow" }}>
            <NavLink to="#" className="material-symbols-outlined">
              search
            </NavLink>
          </Box>
          <Box _hover={{ color: "yellow" }}>
            <NavLink to="#" className="material-symbols-outlined">
              share
            </NavLink>
          </Box>
          <Box _hover={{ color: "yellow" }}>
            <NavLink to="#" className="material-symbols-outlined">
              tv
            </NavLink>
          </Box>
          <Box _hover={{ color: "yellow" }}>
            <NavLink to="#" className="material-symbols-outlined">
              currency_bitcoin
            </NavLink>
          </Box>
          <Box
            {...(isOpen ? darkMode : null)}
            {...(isOpen
              ? { marginBottom: "-5px", borderRadius: "3px 3px 0px 0px" }
              : null)}
            cursor="pointer"
            onClick={onToggle}
            className="material-symbols-outlined"
          >
            {!isOpen ? "menu" : "close"}
          </Box>
        </Flex>
        </Hide>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <DropDown />
      </Collapse>
    </Flex>
  );
}
