import React from "react";
import { Box, Flex, Img, Link, List, ListItem, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import FooterDropDown from "./FooterDropDown";

export default function Footer() {
  const [footer, setFooter] = useState(false);
  return (
    <Box bg="#000000">
      <Flex
        margin="auto"
        alignContent="center"
        justifyContent="space-between"
        w="65vw"
        fontSize="1xl"
        color="white"
      >
        <Text>INDIATODAY.IN</Text>
        <Flex
          gap="2rem"
          flexDirection="row-reverse"
          alignContent="center"
          justifyContent="center"
        >
          <Box
            fontWeight="bold"
            cursor="pointer"
            onClick={() => setFooter(!footer)}
            className="material-symbols-outlined"
          >
            {!footer ? "expand_less" : "close"}
          </Box>
          <Box
            _hover={{ color: "yellow" }}
            to="#"
            cursor="pointer"
            className="material-symbols-outlined"
          >
            search
          </Box>
          <Box _hover={{ color: "yellow" }}>
            <NavLink to="#" className="material-symbols-outlined">
              rss_feed
            </NavLink>
          </Box>
          <Box _hover={{ color: "yellow" }}>
            <NavLink
              style={{ fontSize: "20px" }}
              to="#"
              className="fa fa-twitter"
            />
          </Box>
          <Box _hover={{ color: "yellow" }}>
            <NavLink
              style={{ fontSize: "20px" }}
              to="#"
              className="fa fa-facebook"
            />
          </Box>
        </Flex>
      </Flex>
      {footer ? <FooterDropDown /> : null}
      <Flex
        flexDirection="column"
        margin="auto"
        padding="5px 0px"
        justifyContent="center"
        w="65vw"
        color="white"
      >
        <Text textAlign="center">Download App</Text>
        <Flex alignSelf="center" gap="1rem">
          <NavLink to="#">
            <Img
              alt="play store"
              src="data:image/png;base64,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"
            />
          </NavLink>
          <NavLink to="#">
            <Img
              alt="app store"
              src="data:image/png;base64,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"
            />
          </NavLink>
          <NavLink to="#">
            <Img
              alt="android tv app"
              src="data:image/png;base64,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"
            />
          </NavLink>
        </Flex>
      </Flex>
      <Flex
        margin="auto"
        padding="5px 0px"
        fontSize="15px"
        borderTop="1px solid grey"
        alignContent="center"
        justifyContent="center"
        color="grey"
      >
        <Text>
          Copyright © 2022 Living Media India Limited. For reprint rights:
          <Link _hover={{ color: "red" }} to="#">
            Syndications Today
          </Link>
        </Text>
      </Flex>
    </Box>
  );
}
