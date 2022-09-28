import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

function Sign(){

    

    const initdata={
        name:"",
        email:"",
        password:""
    }

    const [data,setdata]=useState(initdata);

    const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);


  const handlechange=(e)=>{
   const {name,value}=e.target;

   setdata({...data,[name]:value})

  }

  const navigate=useNavigate();

  const handleclick=(e)=>{
e.preventDefault();

localStorage.setItem("userdata",JSON.stringify(data));
setdata(initdata);
  navigate("/login");


  }
console.log(data);
    return(
        <div>
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
        <Heading color="teal.400">Sign Up</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >

            <FormControl>
            <Heading as='h4' size='sm'>Enter Your Name</Heading>
                <InputGroup>
                
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                 
                  <Input type="text" name="name" placeholder="Enter Your Name" value={data.name} onChange={handlechange}/>
                </InputGroup>
              </FormControl>


              <FormControl>
              <Heading as='h4' size='sm'>Enter Email</Heading>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="email" name="email" placeholder="email address" value={data.email} onChange={handlechange}/>
                </InputGroup>
              </FormControl>
              <FormControl>
              <Heading as='h4' size='sm'>Enter Password</Heading>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    value={data.password}
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
                Sign Up
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      
    </Flex>

        </div>
    )
}

export default Sign;