import { useState } from "react";
import {Heading} from "@chakra-ui/react"
import "./drop.css"

function Slider(){

    const [image,setimage]=useState({
        img1:"https://www.sephora.com/contentimages/homepage/092022/Homepage/RWD/2022-09-23-hp-slide-slotting-clean-makeup-us-rwd-slice.jpeg?imwidth=545",
        img2:"https://www.sephora.com/contentimages/homepage/092022/Homepage/RWD/2022-09-21-hp-slideshow-banner-sept-holiday-preview-value-sets-us-rwd-slice.jpeg?imwidth=545"
    });

    const handleclick1=()=>{
           setimage({img1:"https://www.sephora.com/contentimages/homepage/092022/Homepage/RWD/2022-09-23-hp-slide-slotting-clean-makeup-us-rwd-slice.jpeg?imwidth=545",
           img2:"https://www.sephora.com/contentimages/homepage/092022/Homepage/RWD/2022-09-21-hp-slideshow-banner-sept-holiday-preview-value-sets-us-rwd-slice.jpeg?imwidth=545"})

    }


    const handleclick2=()=>{
        setimage({img1:"https://www.sephora.com/contentimages/homepage/091322/Homepage/RWD/2022-09-18-hp-slide-bestsellers-v2-sept-us-ca-rwd-slice.jpeg?imwidth=545",
           img2:"https://www.sephora.com/contentimages/homepage/091322/Homepage/RWD/2022-09-14-hp-slide-just-arrived-us-rwd-slice.jpeg?imwidth=545"})
    }

    return(
        
        <div style={{display:"flex",gap:"5px",padding:"10px"}}>
           
           <div style={{width:'50%',cursor:"pointer"}}>
            <img src={image.img1} alt="pic" width="100%"/>
             
             <div className="prev" onClick={handleclick1}>{'<'}</div>
             <div style={{backgroundColor:"pink",padding:"5px"}}>
                <Heading  size='lg'>Can't-Miss New Clean Beauty</Heading>
                <p>New, Most Wanted Beauty Gifts Are Here</p>
                <Heading as='h3' size='sm' textDecoration='underline'>Shop Now</Heading>
             </div>
           </div>

           <div style={{width:"50%",cursor:"pointer"}}>
            <img src={image.img2} alt="pic" width="100%"/>
            <div className="next" onClick={handleclick2}>{'>'}</div>

            <div style={{backgroundColor:"violet",padding:"5px"}}>
                <Heading  size='lg'>Holiday Sets Just Landed</Heading>
                <p>New, Most Wanted Beauty Gifts Are Here</p>
                <Heading as='h3' size='sm' textDecoration='underline'>Shop Now</Heading>
             </div>
           </div>
           
        </div>

    )
}
export default Slider;