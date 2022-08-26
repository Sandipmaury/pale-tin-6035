import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Text, Container, Box, Flex } from "@chakra-ui/react";
import TopNews from "../components/TopNews";
import TopStories from "../components/TopStories";
import VisualStories from "../components/VisualStories";
import Opinion from "../components/Opinion";
import SpecialToday from "../components/SpecialToday";
import Movies from "../components/Movies";
import Technology from "../components/Technology";
import Sport from "../components/Sport";
import LifeStyle from "../components/LifeStyle";
import Trending from "../components/Trending";
import India from "../components/India";
import Business from "../components/Business";
import Television from "../components/Television";
import World from "../components/Wolrd";
export default function Home() {
  const { state, dispatch, darkMode } = useContext(AppContext);
  return (
    <>
      {state.isLoding ? (
        <Text fontSize="1xl" textAlign="center">
          ..Loding
        </Text>
      ) : state.isError ? (
        <Text textAlign="center" fontSize="5xl">
          Something went wrong
        </Text>
      ) : (
        <>
          <Flex
            pb="20px"
            w={["95vw", "40vw", "1200px"]}
            flexWrap="wrap"
            margin="auto"
            h="auto"
            gap="2rem"
            {...darkMode}
          >
            <TopNews />
            <TopStories />
            <Opinion />
          </Flex>
          <Flex
            pb="20px"
            w={["95vw", "95vw", "1200px"]}
            flexWrap="wrap"
            margin="auto"
            h="auto"
            gap="2rem"
            {...darkMode}
          >
            <VisualStories />
            <SpecialToday />
          </Flex>
          <Flex
            pb="20px"
            w={["95vw", "95vw", "1200px"]}
            justifyContent="space-between"
            flexWrap="wrap"
            margin="auto"
            h="auto"
            gap="2rem"
            {...darkMode}
          >
            <Movies />
            <Technology />
            <Sport />
          </Flex>
          <Flex
            pb="20px"
            w={["95vw", "95vw", "1200px"]}
            justifyContent="space-between"
            flexWrap="wrap"
            margin="auto"
            h="auto"
            gap="2rem"
            {...darkMode}
          >
            <LifeStyle />
            <Trending />
            <India />
          </Flex>
          <Flex
            pb="20px"
            w={["95vw", "95vw", "1200px"]}
            justifyContent="space-between"
            flexWrap="wrap"
            margin="auto"
            h="auto"
            gap="2rem"
            {...darkMode}
          >
            <Business />
            <Television />
            <World />
          </Flex>
        </>
      )}
    </>
  );
}
