import { Box, Button, Circle, color, Flex, Image, ListIcon, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function Sport() {
  const { state, darkMode } = useContext(AppContext);
  return (
    <Box>
        <Text mb="10px" fontSize="20px" fontWeight="500">
          SPORTS
        </Text>
      <Box
        w={["95vw", "370px", "370px"]}
        gap="10px"
        overflow="hidden"
        fontSize='17px'
      >
        <NavLink to='#'><Image src={state.data[4].urlToImage} /></NavLink>
        <NavLink to='#'><Text _hover={darkMode.color === 'white' ? {color:'red'} : {color:'blue'}} fontSize='25px'>{state.data[0].title}</Text></NavLink>
        <UnorderedList>
            <ListItem _hover={darkMode.color === 'white' ? {color:'red'} : {color:'blue'} }
             py='10px' borderTop='1px solid grey'>
            <NavLink to='#' color='white'>{state.data[5].title}</NavLink>
            </ListItem>
            <ListItem _hover={darkMode.color === 'white' ? {color:'red'} : {color:'blue'}} py='10px' borderTop='1px solid grey'>
            <NavLink to='#' color='white'>{state.data[6].title}</NavLink>
            </ListItem>
        </UnorderedList>
        <Flex color={darkMode.color === 'white' ? 'red': "blue"}
         fontSize='13px' flexDirection='row-reverse'><NavLink to='#'>MORE FROM SPORTS > </NavLink></Flex>
      </Box>
    </Box>
  );
}
