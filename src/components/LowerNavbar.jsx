import React from 'react'
import {Flex, Link} from "@chakra-ui/react";
import {NavLink,} from "react-router-dom";
export default function LowerNavbar() {
    const feedStyle = {
        display:"flex",
        alignContent:"center",
        justifyContent:"space-between"
    };
    const checkActive = (({isActive})=>isActive ? {color:"yellow"}:{color:"white"})
  return (
    <Flex alignContent="center" justifyContent="center" bg="#a00606">
      <Flex alignContent="center" justifyContent="space-between" w="65vw" border="1px"
      paddingTop="5px" paddingBottom="5px" fontSize="1xl" color="white">
        <Flex gap="20px">
            <NavLink style={checkActive} to="/">HOME</NavLink>
            <NavLink  to="/" style={feedStyle} >
                <span style={{fontSize:"20px"}} className="material-symbols-outlined">
                    edit
                </span>MY FEED</NavLink>
            <NavLink style={checkActive} to="/india">INDIA</NavLink>
            <NavLink style={checkActive} to="/world">WORLD</NavLink>
            <NavLink style={checkActive} to="/business">BUSINESS</NavLink>
            <NavLink style={checkActive} to="/tech">TECH</NavLink>
            <NavLink style={checkActive} to="/movies">MOVIES</NavLink>
            <NavLink style={checkActive} to="/sports">SPORTS</NavLink>
            <NavLink style={checkActive} to="/science">SCIENCE</NavLink>
            <NavLink style={checkActive} to="/best_universities">BEST UNIVERSITIES</NavLink>
        </Flex>
        <Flex gap="15px" flexDirection="row-reverse" >
        <NavLink  to="/" >
            <span className="material-symbols-outlined">
                person
            </span>
        </NavLink>
        <NavLink  to="/" >
            <span className="material-symbols-outlined">
                search
            </span>
        </NavLink>
        <NavLink  to="/" >
            <span className="material-symbols-outlined">
                share
            </span>
        </NavLink>
        <NavLink  to="/" >
            <span  className="material-symbols-outlined">
                tv
            </span>
        </NavLink>
        <NavLink  to="/" >
            <span  className="material-symbols-outlined">
            currency_bitcoin
            </span>
        </NavLink>
        <NavLink  to="/" >
            <span  className="material-symbols-outlined">
            menu
            </span>
        </NavLink>
    </Flex>
    </Flex>
    </Flex>
  )
}