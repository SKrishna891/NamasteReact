import { useState } from "react";
import { CDN_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";

const Header = () =>{
    const [btnName, btnNameUpdated] = useState("login");
    const onlineStatus = useOnlinestatus();
    return(<div className="header">
        <div className="logo-container">
            <img className="logo"
            src = {CDN_LOGO}/>
              </div>
            <div className="nav-items">
                <ul>
                  <li>onlineStatus:{onlineStatus?"🟩":"🔴"}</li>
                    <li>
                      <Link to ="/">Home</Link></li>
                    <li>
                      <Link to ="/about">About</Link></li>
                    <li>
                      <Link to="/contact">contacts</Link></li>
                    <li> <Link to="/grocary">Grocery</Link></li>
                    <li>cart</li>
                    <button className="login" onClick={()=>{
                      btnName ==="login"? btnNameUpdated("logout"):btnNameUpdated("login");
                        
                    }}>{btnName}</button>
                </ul>
          

        </div>
    </div>)
}

export default Header;