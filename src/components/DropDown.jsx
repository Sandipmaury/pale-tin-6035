import React from "react";
import { Box, Button, Flex, List, ListItem } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { isDarkMode } from "../context/ActionCreater";
import { NavLink } from "react-router-dom";
export default function DropDown() {
  const { darkMode, state, dispatch } = useContext(AppContext);
  return (
    <Flex
      paddingTop="10px"
      paddingBottom="10px"
      w="100%"
      alignContent="center"
      justifyContent="center"
      position={['unset', "absolute", "absolute"]}
      top="38px"
      left='0px'
      shadow='lg'
      bg ={darkMode.color === 'white' ?'#242526':'whitesmoke'}
    >
      <Flex w={['95vw', '95vw', '1200px']} gap="15%" flexDirection={['column', 'row', 'row']} flexWrap='wrap'>
        <List spacing="4" mb='10px'>
          <ListItem borderBottom="1px">
            <NavLink to="#">HEALTH</NavLink>
          </ListItem>
          <ListItem borderBottom="1px">
            <NavLink to="#">TRENDING</NavLink>
          </ListItem>
          <ListItem borderBottom="1px">
            <NavLink to="#">VIDEOS</NavLink>
          </ListItem>
          <ListItem borderBottom="1px">
            <NavLink to="#">EDUCATION</NavLink>
          </ListItem>
          <ListItem borderBottom="1px">
            <NavLink to="#">AUTO</NavLink>
          </ListItem>
          <ListItem borderBottom="1px">
            <NavLink to="#">CRYPTOCURRENCY</NavLink>
          </ListItem>
        </List>
        <List  mb='10px' spacing="4">
          <ListItem borderBottom="1px">
            <NavLink to="#">AUTO</NavLink>CITIES
          </ListItem>
          <ListItem borderBottom="1px">
            <NavLink to="#">CRIME</NavLink>
          </ListItem>
          <ListItem borderBottom="1px">
            <NavLink to="#">LIFESTYLE</NavLink>
          </ListItem>
          <ListItem borderBottom="1px">
            <NavLink to="#">BINGE WATCH</NavLink>
          </ListItem>
          <ListItem borderBottom="1px">
            <NavLink to="#">TELEVISION</NavLink>
          </ListItem>
          <ListItem borderBottom="1px">
            <NavLink to="#">INTERACTIVES</NavLink>
          </ListItem>
        </List>
        <List  mb='10px' spacing="4">
          <ListItem borderBottom="1px">
            <NavLink to="#">VISUAL STORIES</NavLink>
          </ListItem>
          <ListItem borderBottom="1px">
            <NavLink to="#">HOROSCOPES</NavLink>
          </ListItem>
          <ListItem borderBottom="1px">
            <NavLink to="#">FACT CHECK</NavLink>
          </ListItem>
          <ListItem borderBottom="1px">
            <NavLink to="#">DIU</NavLink>
          </ListItem>
          <ListItem borderBottom="1px">
            <NavLink to="#">NEWSMO</NavLink>
          </ListItem>
          <ListItem borderBottom="1px">
            <NavLink to="#">SHOPPING</NavLink>
          </ListItem>
        </List>
        <List  mb='10px' spacing="4">
          <ListItem borderBottom="1px">
            <NavLink to="#">GAMING</NavLink>
          </ListItem>
          <ListItem borderBottom="1px">
            <NavLink to="#">CODE OF ETHICS</NavLink>
          </ListItem>
          <ListItem borderBottom="1px">
            <Button
              onClick={() => dispatch(isDarkMode(!state.isDarkMode))}
              colorScheme="facebook"
              leftIcon={
                <Box className="material-symbols-outlined">
                  {state.isDarkMode ? "dark_mode" : "light_mode"}
                </Box>
              }
            >
              Theme
            </Button>
          </ListItem>
        </List>
      </Flex>
    </Flex>
  );
}
