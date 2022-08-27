import { Flex, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function FooterDropDown() {
  return (
    <Flex
      justifyContent="space-between"
      w={['95vw', '95vw','95vw','95vw', '1200px']}
      margin="auto"
      fontSize="15px"
      color="white"
    >
      <List spacing="2">
        <Text fontSize="18px" padding="5px 0px">
          PUBLICATIONS:
        </Text>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Business Today</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Cosmopolitan</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">India Today-Hindi</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">India Today</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Mail Today</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Money Today</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Reader's Digest</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Time</NavLink>
        </ListItem>
      </List>
      <List spacing="2">
        <Text fontSize="18px" padding="5px 0px">
          TELEVISION:
        </Text>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Aaj Tak</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Delhi Aaj Tak</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Good News Today</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">India Today TV</NavLink>
        </ListItem>
        <Text fontSize="18px" padding="5px 0px">
          RADIO:
        </Text>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Ishq FM</NavLink>
        </ListItem>
        <Text fontSize="18px" padding="5px 0px">
          GAMING:
        </Text>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">India Today Gaming</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">World Esports Cup</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Esports Premier League</NavLink>
        </ListItem>
      </List>
      <List spacing="2">
        <Text fontSize="18px" padding="5px 0px">
          EDUCAION:
        </Text>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">India Today Education</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Vasant Valley</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Best Colleges India 2018</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Best Universities India 2018</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Aaj Tak Campus National</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Aptitude test</NavLink>
        </ListItem>
        <Text fontSize="18px" padding="5px 0px">
          ONLINE SHOPPING:
        </Text>
      </List>
      <List spacing="2">
        <Text fontSize="18px" padding="5px 0px">
          EVENTS:
        </Text>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Agenda Aaj Tak</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">India Today Conclave</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Robb Report India 2018</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Sahitya Aaj Tak</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">The Red Lab</NavLink>
        </ListItem>
      </List>
      <List spacing="2">
        <Text fontSize="18px" padding="5px 0px">
          PRINTING:
        </Text>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Thomson Press</NavLink>
        </ListItem>
        <Text fontSize="18px" padding="5px 0px">
          WELFARE:
        </Text>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Care Today</NavLink>
        </ListItem>
        <Text fontSize="18px" padding="5px 0px">
          MUSIC:
        </Text>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Music Today</NavLink>
        </ListItem>
      </List>
      <List spacing="2">
        <Text fontSize="18px" padding="5px 0px">
          SYNDICATIONS:
        </Text>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">India content</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Headline Today</NavLink>
        </ListItem>
        <Text fontSize="18px" padding="5px 0px">
          DISTRIBUTION:
        </Text>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Rate Card</NavLink>
        </ListItem>
        <Text fontSize="18px" padding="5px 0px">
          USEFUL LINKS:
        </Text>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Partners</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Press Release</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Sitemap</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">News</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Newsletter</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="#">Privacy Policy</NavLink>
        </ListItem>
        <ListItem _hover={{ color: "yellow" }}>
          <NavLink to="#">Correction Policy</NavLink>
        </ListItem>
      </List>
    </Flex>
  );
}
