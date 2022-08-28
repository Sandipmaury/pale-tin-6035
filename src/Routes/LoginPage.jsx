import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  Grid,
  Hide,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import { EmailIcon, UnlockIcon } from "@chakra-ui/icons";
import { useState } from "react";

const getResponse = async(data)=>{
    return fetch("https://reqres.in/api/login",{
        method:"POST",
        body:JSON.stringify(data),
        headers:{"Content-Type":"application/json"}
    })
    .then((res)=> res.json());
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setAuth] = useState(false);
  const clickHandler = () => {
    console.log(email, password);
    const data = {
        email: email,
        password: password
    }
    getResponse(data).then((res)=>{
        setAuth(true); 
        console.log(res);
    })
    .catch((rej)=>{
        console.log(rej);
    })
  };
  return (isAuth ? <Navigate to={"/"}/>:
    <Box>
      <Box bg="#151515" py="10px">
        <Flex
          w={["95vw", "95vw", "1200px"]}
          margin="auto"
          justifyContent="space-between"
          pos="relative"
        >
          <NavLink to="/">
            <Flex color="gray.400" gap="10px" alignItems="center">
              <Box fontSize="30px" className="material-symbols-outlined">
                arrow_circle_left
              </Box>
              <Text>Back to India Today</Text>
            </Flex>
          </NavLink>
          <Box pos="absolute" right="0px" top="-10px">
            <Image
              alt="logo"
              src="https://auth.indiatoday.in/sites/all/themes/itg/images/span_itg_group.png"
            />
          </Box>
        </Flex>
      </Box>
      <Box bg="white">
        <Flex
          flexDirection="column"
          alignItems="center"
          color="black"
          fontSize="30px"
          py="20px"
          margin="auto"
          gap="6px"
          w={["95vw", "95vw", "1200px"]}
        >
          <Box>
            <Text fontWeight="500">Sign in to India Today</Text>
            <Flex fontWeight="500" fontSize="16px">
              Don't have an account?
              <NavLink to="#">
                <Text color="red">Sign Up Now »</Text>
              </NavLink>
            </Flex>
          </Box>
          <Box>
            <Text color="gray" fontSize="20px">
              Sign in via
            </Text>
          </Box>
          <Flex color="white" gap="10px" fontWeight='500' fontSize='18px'>
            <NavLink to="#">
                <Flex alignItems='center' borderRadius='5px' bg='#1daee3' gap='10px'>
                <Box  bg='#1ca4d6' borderRadius='5px' py='7px' px='10px' fontSize='25px' className="fa fa-twitter" />
                <Hide below="sm" ><Text w='100px'>Twitter</Text></Hide>
                </Flex>
            </NavLink>
            <NavLink to="#">
                <Flex alignItems='center' borderRadius='5px' bg='#3b5998' gap='10px'>
                <Box  bg='#37528c' borderRadius='5px' py='7px' px='10px' fontSize='25px' className="fa fa-facebook" />
                <Hide below="sm"><Text  w='100px'>Facebook</Text></Hide>
                </Flex>
            </NavLink>
            <NavLink to="#">
                <Flex alignItems='center' borderRadius='5px' bg='#f1f1f1' gap='10px'>
                <Box  bg='grey' borderRadius='5px' py='7px' px='10px' fontSize='25px' className="fa fa-google" />
                <Hide below="sm" ><Text color='black' w='100px'>Google</Text></Hide>
                </Flex>
            </NavLink>
            
          </Flex>
          <Text color="gray" fontSize={['16px', "20px", "20px"]}>
            Or sign in using your email or mobile no.
          </Text>
          <Stack w={['95vw', "500px", "500px"]} spacing={4}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<EmailIcon color="gray.300" />}
              />
              <Input
                required
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Enter your Email/mobile"
              />
            </InputGroup>

            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1rem"
                children={<UnlockIcon />}
              />
              <Input
                required
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
              />
            </InputGroup>
            <Checkbox colorScheme="blue" defaultChecked>
              Remember me
            </Checkbox>
            <Flex fontSize="16px" color="blue" justifyContent="space-between">
              <NavLink to="#">Forgot password?</NavLink>
              <NavLink to="#">Login via OTP</NavLink>
            </Flex>
            <Flex justifyContent="center">
              <Button
                onClick={clickHandler}
                w="200px"
                color="white"
                bg="#195cc6"
                _hover={{ bg: "#195cc6" }}
              >
                Login
              </Button>
            </Flex>
            <Grid
              p="10px"
              bg="#e9e9e9"
              w={['95vw', '95vw', "500px"]}
              gap="10px"
              templateColumns="1fr 1fr"
            >
              <Flex flexDirection="row-reverse" alignItems="center">
                <Text fontSize="16px">One Network One Account</Text>
              </Flex>
              <Grid gap="5px" templateColumns="1fr 1fr 1fr">
                <NavLink to='#'>
                <Box borderRadius="3px" border="1px solid gray" p="10px">
                  <Image
                    alt="Aaj tak"
                    src="https://smedia2.intoday.in/aajtak/aajtakhd/images/aajtakHd_logo.png?bypass=true"
                  />
                </Box>
                </NavLink>
                <NavLink to='/'>
                <Box borderRadius="3px" border="1px solid gray" p="10px">
                  <Image
                    alt="India Today"
                    src="https://akm-img-a-in.tosshub.com/sites/all/themes/itg/logo.png?576"
                  />
                </Box>
                </NavLink>
                <NavLink to='#'>
                <Box borderRadius="3px" border="1px solid gray" p="10px">
                  <Image
                    alt="BT"
                    src="https://akm-img-a-in.tosshub.com/sites/btmt/businesstoday/resources/css/images/btnav-newlogo.png?size=48:21"
                  />
                </Box>
                </NavLink>
              </Grid>
            </Grid>
          </Stack>
        </Flex>
      </Box>
      <Flex
        margin="auto"
        padding="5px 0px"
        fontSize="15px"
        borderTop="1px solid grey"
        alignContent="center"
        justifyContent="center"
        color="grey"
      >
        <Text textAlign="center">
          Copyright © 2022 Living Media India Limited. For reprint rights:
          <Link _hover={{ color: "red" }} to="#">
            Syndications Today
          </Link>
        </Text>
      </Flex>
    </Box>
);
}
