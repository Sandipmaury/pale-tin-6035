import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function TopStories() {
    const {state} = useContext(AppContext);
    const top10Stories = state.data;
    top10Stories.length = 10;
  return (
    <Box w='40%' h='auto' border='1px solid grey'>
        {top10Stories?.map((el)=>{
            return <Box p=''>
                <Text>{el.title}</Text>
            </Box>
        })}
    </Box>
  )
}
