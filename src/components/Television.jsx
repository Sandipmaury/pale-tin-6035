import { Box, Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function Television() {
  const { state, darkMode } = useContext(AppContext);
  return (
    <Box>
        <Text mb="10px" fontSize="20px" fontWeight="500">
          TELEVISION
        </Text>
      <Box
        w={["95vw", "370px", "370px"]}
        gap="10px"
        overflow="hidden"
        fontSize='17px'
      >
        <NavLink to='#'><Image src={state.data[3].urlToImage} /></NavLink>
        <NavLink to='#'><Text _hover={darkMode.color === 'white' ? {color:'red'} : {color:'blue'}} 
        fontSize='25px'>{state.data[3].title}</Text></NavLink>
        <UnorderedList>
            <ListItem _hover={darkMode.color === 'white' ? {color:'red'} : {color:'blue'} }
             py='10px' borderTop='1px solid grey'>
            <NavLink to='#' color='white'>{state.data[4].title}</NavLink>
            </ListItem>
            <ListItem _hover={darkMode.color === 'white' ? {color:'red'} : {color:'blue'}} py='10px' borderTop='1px solid grey'>
            <NavLink to='#' color='white'>{state.data[5].title}</NavLink>
            </ListItem>
        </UnorderedList>
        <Flex color={darkMode.color === 'white' ? 'red': "blue"}
         fontSize='13px' flexDirection='row-reverse'><NavLink to='#'>MORE FROM TELEVISION > </NavLink></Flex>
      </Box>
    </Box>
  );
}
