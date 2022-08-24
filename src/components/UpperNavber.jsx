import React from 'react'
import {Flex} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
export default function UpperNavbar() {
  const checkActive = (({isActive})=>isActive ? {color:"black"}:{color:"darkGrey"})
  return (
    <Flex alignContent="center" justifyContent="center" borderBottom="1px solid grey">
      <Flex w="65vw" gap="20px" fontSize="1xl" fontWeight="500">
        <NavLink style={checkActive} to="/">India Today</NavLink>
        <NavLink style={checkActive} to="/a">Malayalam</NavLink>
        <NavLink style={checkActive} to="/b">India TodayNE</NavLink>
        <NavLink style={checkActive} to="/c">Business Today</NavLink>
        <NavLink style={checkActive} to="/s">DailyO</NavLink>
        <NavLink style={checkActive} to="/de">Aaj Tak</NavLink>
        <NavLink style={checkActive} to="/e">LallanTop</NavLink>
        <NavLink style={checkActive} to="/f">Bangla</NavLink>
        <NavLink style={checkActive} to="/w">GNTTV</NavLink>
        <NavLink style={checkActive} to="/h">iChowk</NavLink>
        <NavLink style={checkActive} to="/n">Reader's Digest</NavLink>
    </Flex>
    </Flex>
  )
}
