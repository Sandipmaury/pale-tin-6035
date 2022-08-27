import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
export default function UpperNavbar() {
  const { state } = useContext(AppContext);
  const checkActive = ({ isActive }) =>
    isActive
      ? state.isDarkMode
        ? { color: "white" }
        : { color: "black" }
      : { color: "darkGrey" };
  return (
    <Flex
      alignContent="center"
      padding="5px 0px"
      justifyContent="center"
      borderBottom="1px solid grey"
      px='10px'
    >
      <Flex w={['100vw', '1200px', '1200px']} scrollBehavior='smooth' overflowX={['scroll', 'scroll', 'auto']}
       gap="2rem" fontSize="0.8rem" fontWeight="500">
        <NavLink style={checkActive} to="/">
          <Text w='70px'>India Today</Text>
        </NavLink>
        <NavLink style={checkActive} to="/a">
        <Text>Malayalam</Text>
        </NavLink>
        <NavLink style={checkActive} to="/b">
        <Text w='90px'textAlign='center' >India TodayNE</Text>
        </NavLink>
        <NavLink style={checkActive} to="/c">
        <Text w='90px'textAlign='center'>Business Today</Text>
        </NavLink>
        <NavLink style={checkActive} to="/s">
        <Text>DailyO</Text>
        </NavLink>
        <NavLink style={checkActive} to="/de">
        <Text w='45px'textAlign='center'>Aaj Tak</Text>
        </NavLink>
        <NavLink style={checkActive} to="/e">
        <Text>LallanTop</Text>
        </NavLink>
        <NavLink style={checkActive} to="/f">
        <Text>Bangla</Text>
        </NavLink>
        <NavLink style={checkActive} to="/w">
        <Text>GNTTV</Text>
        </NavLink>
        <NavLink style={checkActive} to="/h">
        <Text>iChowk</Text>
        </NavLink>
        <NavLink style={checkActive} to="/n">
        <Text w='90px'textAlign='center'>Reader's Digest</Text>
        </NavLink>
      </Flex>
    </Flex>
  );
}
