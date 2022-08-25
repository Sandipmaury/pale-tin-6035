import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import {Text, Container, Box, Flex} from "@chakra-ui/react"
import TopNews from '../components/TopNews';
import TopStories from '../components/TopStories';
import VisualStories from '../components/VisualStories';
export default function Home() {
    const {state, dispatch, darkMode} = useContext(AppContext);
  return (
    <>
    {state.isLoding? <Text fontSize="1xl" textAlign="center">..Loding</Text>:state.isError?
    <Text textAlign="center" fontSize="5xl">Something went wrong</Text>:
    <Flex w='65vw' flexWrap='wrap' margin='auto' h='auto' gap='2rem' {...darkMode}>
      <TopNews/>
      <TopStories/>
      <VisualStories/>
    </Flex>
    }
    </>
  )
}
