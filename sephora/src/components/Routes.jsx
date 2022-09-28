import {Routes,Route,Link} from "react-router-dom"
import Sign from "./sign"
import Login from "./login"
import Navbar from "./navbar"
function Router(){

    return (
        <div>
          
        <Routes>
            <Route path="/" element={<Navbar/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signin" element={<Sign/>}></Route>
            
        </Routes>
        </div>
    )
}
export default Router;