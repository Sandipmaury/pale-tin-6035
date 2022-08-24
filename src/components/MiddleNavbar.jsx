import React from 'react'
import {Flex, Img} from "@chakra-ui/react";
import {NavLink,} from "react-router-dom";
export default function MiddleNavbar() {
  return (
    <Flex alignContent="center" justifyContent="center" bg="white">
      <Flex alignContent="center" justifyContent="center" w="65vw"
       paddingTop="10px" paddingBottom="10px" gap="50px" fontSize="3xl" color="black">
        <NavLink to="/india">NEWS</NavLink>
        <NavLink to="/world">LIVE TV</NavLink>
        <NavLink to="/"><Img src="https://akm-img-a-in.tosshub.com/sites/all/themes/itg/logo.png?v=1.52" /></NavLink>
        <NavLink to="/movies">APP</NavLink>
        <NavLink to="/sports">MAGAZINE</NavLink>
      </Flex>
    </Flex>
  )
}
