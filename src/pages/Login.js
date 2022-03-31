import fdmLogo from "../assets/fdm-logo.png";

import "../styles/Login.css"


import BackgroundParticles from "../components/BackgroundParticles";





export const Login = () => {
    return (
        <div className="page">
            <BackgroundParticles className="particles" />
            <div className="login-section">
                <img alt="FDM Logo" src={fdmLogo} className="fdmLogo" />
                <form className="form" >
                    <input type="text" placeholder="Username" className="form-textbox" required />
                    <input type="text" placeholder="Password" className="form-textbox" required/>
                    <input type="submit" value="Submit" className="button" />
                </form>
            </div>



        </div>

    )
}
