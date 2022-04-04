import fdmLogo from "../assets/fdm-logo.png";

import "../styles/Login.css"


import BackgroundParticles from "../components/BackgroundParticles";
import { login,DB } from "../data/db";
import { useEffect } from "react";





export const Login = () => {
    return (
        <div className="page">
            {console.log(DB.users[0].timesheets[0])}
            <BackgroundParticles className="particles" />
            <div className="login-section">
                
                <img alt="FDM Logo" src={fdmLogo} className="fdmLogo" />
                <div className="form" >
                    <input type="text" placeholder="Username" className="form-textbox" required />
                    <input type="text" placeholder="Password" className="form-textbox" required />
                    <input type="submit" value="Submit" className="button" onClick={useEffect(() => {
                        login()
                    })
                    } />

                </div>
            </div>



        </div>

    )
}
