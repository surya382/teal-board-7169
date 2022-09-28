
import { useState } from "react";
import { createContext } from "react";

export const Authcontext=createContext();

function AuthcontextProvider({children}){

    const [state,setstate]=useState({auth:false,
        name:null
    })

    const togglestate=(nam)=>{
         
        setstate({auth:true,name:nam})
    }



    return <Authcontext.Provider value={{state,togglestate}}>{children}</Authcontext.Provider>
}

export default AuthcontextProvider;