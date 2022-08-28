import React, { useContext } from "react";
import { Flex, Link, Box, Collapse, useDisclosure, Hide, Text, Input } from "@chakra-ui/react";
import DropDown from "./DropDown";
import { AppContext } from "../context/AppContext";
import { NavLink } from "react-router-dom";
export default function SideBar() {
  const { isOpen, onToggle } = useDisclosure();
  const { darkMode } = useContext(AppContext);
  const checkActive = ({ isActive }) =>
    isActive ? { color: "#ffa500" } : { color: darkMode.color === 'white' ? 'white' : 'black' };
  return (
    <Box
      bg={darkMode.color === 'white' ?'#242526':'whitesmoke'}
      pos='absolute'top='60px'
      overflowY='scroll'
      h='93vh'
      w='300px'
      px='10px'
    >
        <Flex justifyContent='space-between' bg='white' color='black'>
            <Flex alignItems='center' gap='5px'>
            <Box color='white' bg='red' p='3px' borderRadius='50%' className="material-symbols-outlined">
                person
            </Box>
            <NavLink to='/login'>Login</NavLink>
            </Flex>
            <Flex alignItems='center' bg='whitesmoke'>
                <Box px='3px' className="material-symbols-outlined">mic</Box>
                <Input w='130px' placeholder="Enter search keyword"/>
                <Box px='3px' className="material-symbols-outlined">search</Box>
            </Flex>
        </Flex>
      <Flex flexDirection='column' gap='12px'>
        <Box borderBottom="1px">
        <NavLink style={checkActive} to="/">
            HOME
          </NavLink>
        </Box>
        <Box borderBottom="1px">
        <NavLink to="/">
            <Flex alignItems='center' gap='5px'>
            <Box
              fontSize='20px'
              className="material-symbols-outlined"
            >
              edit
            </Box>
            <Text>MY FEED</Text>
            </Flex>
          </NavLink>
        </Box>
          
          <Box borderBottom="1px">
          <NavLink style={checkActive} to="/india">
            INDIA
          </NavLink>
          </Box>
          <Box borderBottom="1px">
          <NavLink style={checkActive} to="/world">
            WORLD
          </NavLink>
          </Box>
          <Box borderBottom="1px">
          <NavLink style={checkActive} to="/business">
            BUSINESS
          </NavLink>
          </Box>
          <Box borderBottom="1px">
          <NavLink style={checkActive} to="/tech">
            TECH
          </NavLink>
          </Box>
          <Box borderBottom="1px">
          <NavLink style={checkActive} to="/movies">
            MOVIES
          </NavLink>
          </Box>
          <Box borderBottom="1px">
          <NavLink style={checkActive} to="/sports">
            SPORTS
          </NavLink>
          </Box>
          <Box borderBottom="1px">
          <NavLink style={checkActive} to="/science">
            SCIENCE
          </NavLink>
          </Box>
          <Box borderBottom="1px">
          <NavLink style={checkActive} to="best-universities">
            BEST UNIVERSITIES
          </NavLink>
          </Box>
      </Flex>
      <DropDown/>
    </Box>
  );
}
