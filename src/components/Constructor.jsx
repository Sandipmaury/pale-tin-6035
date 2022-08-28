import { Box, Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function Constructor({name, num}) {
  const { state, darkMode } = useContext(AppContext);
  return (
    <Box>
        <NavLink to='#'>
        <Text _hover={darkMode.color === 'white' ? {color:'red'} : {color:'blue'}} mb="10px" fontSize="20px" fontWeight="500"> {name}</Text>
        </NavLink>
      <Box
        w={["95vw", "370px", "370px"]}
        gap="10px"
        overflow="hidden"
        fontSize='17px'
      >
        <NavLink to='#'><Image src={state.data[num].urlToImage} /></NavLink>
        <NavLink to='#'><Text _hover={darkMode.color === 'white' ? {color:'red'} : {color:'blue'}}
         fontSize='25px'>{state.data[num].title}</Text></NavLink>
        <UnorderedList>
            <ListItem _hover={darkMode.color === 'white' ? {color:'red'} : {color:'blue'} }
             py='10px' borderTop='1px solid grey'>
            <NavLink to='#' color='white'>{state.data[num+1].title}</NavLink>
            </ListItem>
            <ListItem _hover={darkMode.color === 'white' ? {color:'red'} : {color:'blue'}} py='10px' borderTop='1px solid grey'>
            <NavLink to='#' color='white'>{state.data[num+2].title}</NavLink>
            </ListItem>
        </UnorderedList>
        <Flex alignItems='center' color={darkMode.color === 'white' ? 'red': "blue"}
         fontSize='13px' flexDirection='row-reverse'>
         <Box className="material-symbols-outlined">chevron_right</Box>
            <NavLink to='#'>MORE FROM {name} </NavLink>
         </Flex>
      </Box>
    </Box>
  );
}
