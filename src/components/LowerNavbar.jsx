import React, { useContext } from "react";
import { Flex, Link, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import DropDown from "./DropDown";
import { AppContext } from "../context/AppContext";
export default function LowerNavbar() {
  const { darkMode } = useContext(AppContext);
  const [menu, setMenu] = React.useState(true);
  const feedStyle = {
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between",
  };
  const checkActive = ({ isActive }) =>
    isActive ? { color: "yellow" } : { color: "white" };
  return (
    <Flex
      position="relative"
      alignContent="center"
      justifyContent="center"
      bg="#a00606"
    >
      <Flex
        alignContent="center"
        justifyContent="space-between"
        w="65vw"
        paddingTop="5px"
        paddingBottom="5px"
        fontSize="1xl"
        color="white"
      >
        <Flex gap="20px">
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
        <Flex gap="15px" flexDirection="row-reverse">
          <Box _hover={{ color: "yellow" }}>
            <NavLink to="#" className="material-symbols-outlined">
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
            {...(!menu ? darkMode : null)}
            {...(!menu
              ? { marginBottom: "-5px", borderRadius: "3px 3px 0px 0px" }
              : null)}
            cursor="pointer"
            onClick={() => setMenu(!menu)}
            className="material-symbols-outlined"
          >
            {menu ? "menu" : "close"}
          </Box>
        </Flex>
      </Flex>
      {!menu ? <DropDown /> : null}
    </Flex>
  );
}
