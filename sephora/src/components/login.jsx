import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../context/authcont";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
 
  
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useContext } from "react";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const initlog={
  email:"",
  password:""
}

const Login = () => {
  const navigate=useNavigate();

const {state,togglestate}=useContext(Authcontext)  

  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const [login,setlogin]=useState(initlog);

  const userdata=JSON.parse(localStorage.getItem("userdata"));

  const handlechange=(e)=>{
 const {value,name}=e.target;

 setlogin({...login,[name]:value})
  }

  const handleclick=(e)=>{
    e.preventDefault();

    if(userdata.email==login.email && userdata.password==login.password){
      alert("Login Successfull")
      togglestate(userdata.name)
      navigate("/")

    }

    else{
      alert("Credentials Not Matched")
    }


  }



  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="email address" value={login.email} name="email" onChange={handlechange}/>
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={login.password} 
                    name="password" 
                    onChange={handlechange}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={handleclick}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link color="teal.500" href="/signin">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;
