import { useState } from "react";
import { CDN_LOGO } from "../utils/constants";

const Header = () =>{
    const [btnName, btnNameUpdated] = useState("login");
    return(<div className="header">
        <div className="logo-container">
            <img className="logo"
            src = {CDN_LOGO}/>
              </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>contacts</li>
                    <li>cart</li>
                    <button className="login" onClick={()=>{
                      btnName ==="login"? btnNameUpdated("logout"):btnNameUpdated("login");
                        
                    }}>{btnName}</button>
                </ul>
          

        </div>
    </div>)
}

export default Header;