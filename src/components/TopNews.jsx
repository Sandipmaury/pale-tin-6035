import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
// author: "https://www.facebook.com/bbcnews"
// content: "A woman has been found dead at flats in Aberdeen.\r\nPolice said her body was discovered at the rear of Linksfield Court on Regent Walk at about 05:10.\r\nA police spokesman said: \"Inquiries are ongoing … [+160 chars]"
// description: "Police said the discovery was made at the rear of the city's Linksfield Court early on Thursday."
// publishedAt: "2022-05-05T10:13:16Z"
// source: {id: 'bbc-news', name: 'BBC News'}
// title: "Woman's body found at flats in Aberdeen"
// url: "https://www.bbc.co.uk/news/uk-scotland-north-east-orkney-shetland-61333697"
// urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/E990/production/_124429795_linksfield.jpg"
export default function TopNews() {
    const {state} = useContext(AppContext);
    const topNews1 = state.data[0];
    const topNews2 = state.data[1];
    const topNews3 = state.data[2];
  return (
    <Box w='40%' h='auto' border='1px solid grey' p='10px'>
        <Box>
            <Image src= {topNews1.urlToImage} />
            <Text fontSize='2xl'>{topNews1.title}</Text>
        </Box>
        <Flex gap='7px' mt='10px'>
            <Box>
            <Image w='100%' src= {topNews2.urlToImage} />
            <Text fontSize='2xl'>{topNews2.title}</Text>
            </Box>
            <Box>
            <Image w='100%' src= {topNews3.urlToImage} />
            <Text fontSize='2xl'>{topNews3.title}</Text>
            </Box>
        </Flex>
    </Box>
  )
}
