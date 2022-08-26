import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
export default function TopNews() {
    const {state} = useContext(AppContext);
    const topNews1 = state.data[0];
    const topNews2 = state.data[1];
    const topNews3 = state.data[2];
  return (
    <Box w={['100%', '100%', '40%']} h='auto' border='1px solid grey' p='10px'>
        <Box _hover={{cursor:'pointer'}}>
            <Image _hover={{scale:'1.1'}} src= {topNews1.urlToImage} />
            <Text fontSize='2xl'>{topNews1.title}</Text>
        </Box>
        <Flex gap='7px' mt='10px'>
            <Box>
            <Image w='100%' src= {topNews2.urlToImage} />
            <Text fontSize='2xl'>{topNews2.title}</Text>
            </Box>
            <Box _hover={{cursor:'pointer'}}>
            <Image w='100%' src= {topNews3.urlToImage} />
            <Text fontSize='2xl'>{topNews3.title}</Text>
            </Box>
        </Flex>
    </Box>
  )
}
