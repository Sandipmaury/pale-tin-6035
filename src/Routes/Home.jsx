import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Text, Flex } from "@chakra-ui/react";
import TopNews from "../components/TopNews";
import TopStories from "../components/TopStories";
import VisualStories from "../components/VisualStories";
import Opinion from "../components/Opinion";
import SpecialToday from "../components/SpecialToday";
import Constructor from "../components/Constructor";
export default function Home() {
  const { state, dispatch, darkMode } = useContext(AppContext);
  return (
    <>
      {state.isLoding ? (
        <Text fontSize="1xl" textAlign="center">
          ...Loding
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
            margin="auto"
            flexWrap='wrap'
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
            <Constructor name={"MOVIES"} num = {4} />
            <Constructor name={"TECHNOLOGY"} num = {9} />
            <Constructor name={"SPORT"} num = {21} />
            <Constructor name={"LIFESTYLE"} num = {2} />
            <Constructor name={"TRENDING"} num = {3} />
            <Constructor name={"INDIA"} num = {19} />
            <Constructor name={"BUSINESS"} num = {1} />
            <Constructor name={"TELEVISION"} num = {5} />
            <Constructor name={"WORLD"} num = {11} />
            <Constructor name={"AUTO"} num = {6} />
            <Constructor name={"EDUCATION TODAY"} num = {7} />
            <Constructor name={"CITIES"} num = {17} />
            <Constructor name={"HEALTH"} num = {23} />
            <Constructor name={"NEWS ANALYSIS"} num = {15} />
            <Constructor name={"INDIA TODAY INSIGHT"} num = {12} />
          </Flex>
        </>
      )}
    </>
  );
}
