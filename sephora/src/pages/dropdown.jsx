import {Box, Flex, HStack, Spacer,Text} from "@chakra-ui/react"
import "./drop.css"
import {New,Brands,MakeUp} from "./dropcontent"

function Dropdown(){

    return(
          <Box className="dropd">

            
                <Flex>
                   
                   <Box className="main">
                <Box className="new">
                 New
                  
                <Box className="ndta">
                <New/>
             </Box>
                </Box>

                </Box>
                <Spacer/>




                <Box className="main">
                <Box className="new">
                 Brands
                  
                <Box className="ndta">
                <Brands/>
             </Box>
                </Box>

                </Box>
                <Spacer/>

                <Box className="main">
                <Box className="new">
                 MakeUp
                  
                <Box className="ndta">
                <MakeUp/>
             </Box>
                </Box>

                </Box>
                <Spacer/>

                <Box>Skincare</Box>
                <Spacer/>

                <Box>Hair</Box>
                <Spacer/>

                <Box>Fragrance</Box>
                <Spacer/>

                <Box>Tools & Brushes</Box>
                <Spacer/>

                <Box>Bath & Body</Box>
                <Spacer/>

                <Box>Mini Size</Box>
                <Spacer/>

                <Box>Gifts</Box>
                <Spacer/>

                <Box>Beauty Under $20</Box>
                <Spacer/>

                <Box className="main">
                <Box className="new">
                 Sale & Offers
                  
                <Box className="ndta">
                <Brands/>
             </Box>
                </Box>

                </Box>
                <Spacer/>


                
                </Flex>

              
               
                
          </Box>
          
    )
}

export default Dropdown;