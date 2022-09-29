import {useNavigate,Link} from "react-router-dom";
import { Authcontext } from "../context/authcont";
import "./nav.css"
import { Box, Flex, Text, Button, Stack, HStack,Image, InputGroup, InputLeftElement, Input, Divider } from "@chakra-ui/react";
import {Search2Icon} from "@chakra-ui/icons"
import { FaStoreAlt,FaMapMarkerAlt,FaPeopleCarry,FaOpencart } from 'react-icons/fa';
import { useContext } from "react";


function Navbar(){
 const {state,togglestate}=useContext(Authcontext);

  const navigate=useNavigate();

  let handlelogin=()=>{
    navigate("/login")
  }

  return( 
    <Box style={{border:"1px solid black", height:"100px"}}>
      
      <Flex>
           <HStack>
        <Box style={{width:"200px" , height:"100%"}}><Image src="https://logos-world.net/wp-content/uploads/2022/02/Sephora-Logo.png" alt="logo" style={{width:"70%",height:"100%",padding:"10px"}}/></Box>
         <Box>
         <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<Search2Icon color='gray.500' />}
    />
    <Input type='text'  placeholder='Search' style={{backgroundColor:"rgba(0, 0, 0, 0.04)", borderRadius:"20px",border:"none",width:"400px"}}/>
  </InputGroup>


         </Box>
         <Box className="store_main">
         <Box className="store">
           <Box><FaStoreAlt style={{height:"100%",width:"40px"}} /></Box>
         
         <Box>
          <p>Store & Services</p>
          <p style={{fontSize:"12px",color:"grey"}}>Choose your Store</p>
          </Box>
          </Box>

          <Box className="dropdown">
            <button style={{marginLeft:"80px", borderRadius:"20px",color:"white",backgroundColor:"black",padding:"0px 5px 0px 5px"}}>Choose your store</button>
            <Divider style={{marginTop:"10px"}}/>

            <Box style={{display:"flex",gap:"15px",marginTop:"10px"}}>
               <h3><FaMapMarkerAlt style={{height:"100%"}}/></h3> 
                <h3>Find a Sephora</h3>
            </Box>
            <Divider style={{marginTop:"10px"}}/>

            <Box>
              <Box style={{display:"flex",justifyContent:"space-between",marginTop:"10px"}}>
                <h2><b>Happening at Sephora</b></h2>
                <Link style={{color:"blue"}}>View All</Link>
              </Box>
               
              <Box className="happening">
                 <Image src="https://www.sephora.com/contentimages/meganav/icons/happening_services.jpg" width="50px"/>
                <Box>
                  <Text>Services</Text>
                 <p style={{color:"grey",fontSize: "12px"}}>Personalized makeup, skincare, and brow services</p>
                 </Box> 

              </Box>
              <Divider style={{marginTop:"10px"}}/>


              <Box className="happening">
                 <Image src="https://www.sephora.com/contentimages/meganav/icons/happening_events_2.jpg" width="50px"/>
                <Box>
                  <Text>Store Events</Text>
                 <p style={{color:"grey",fontSize: "12px"}}>Exciting launches, parties, and more!</p>
                 </Box> 

              </Box>

              <Divider style={{marginTop:"10px"}}/>

              <Box className="happening">
                 <Image src="https://www.sephora.com/contentimages/meganav/icons/happening_new.jpg" width="50px"/>
                <Box>
                  <Text>What's New in Store</Text>
                 <p style={{color:"grey",fontSize: "12px"}}>Explore what's hot in your store</p>
                 </Box> 

              </Box>


            </Box>


          </Box>

          </Box>

          <Box className="community">
          
           <Box><FaPeopleCarry style={{height:"100%",width:"40px"}} /></Box>
         
         <Box>
          <p>Community</p>
          
          </Box>
            
          


          </Box>
         
          <Divider orientation='vertical' style={{height:"50px"}}/>
                 
                 
          <Box className="login" onClick={handlelogin}>
            <Box className="log_img"><Image src="https://www.sephora.com/img/ufe/icons/me-active.svg" width="100%"/></Box>
           
           {state.auth?<Box><b>Welcome {state.name}</b></Box>:

            <Box style={{fontSize: "12px"}}>
              <Text>Sign In</Text>
              <p >for FREE shipping</p>
            </Box>}

            
          </Box>
            
          <Box ><FaOpencart style={{height:"100%",width:"40px",marginLeft:"200px"}} /></Box>
          
          
         </HStack>
      </Flex>
      
    </Box>

    
  )
}

export default Navbar