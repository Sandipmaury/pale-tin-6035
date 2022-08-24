import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import {Text, Container} from "@chakra-ui/react"
import UpperNavbar from '../components/UpperNavber';
import LowerNavbar from '../components/LowerNavbar';
import MiddleNavbar from '../components/MiddleNavbar';
export default function Home() {
    const {state, dispatch} = useContext(AppContext);
  return (
    <>
    {state.isLoding? <Text fontSize="1xl" textAlign="center">..Loding</Text>:state.isError?<Text textAlign="center" fontSize="5xl">Something went wrong</Text>:
    <>
    <UpperNavbar/>
    <MiddleNavbar/>
    <LowerNavbar/>
    </>
    }
    </>
  )
}
