import fdmLogo from "../assets/fdm-logo.png";

import "../styles/Login.css"

import { useNavigate } from "react-router-dom"

import BackgroundParticles from "../components/BackgroundParticles";
import {DB, login } from "../data/db";
import { useState } from "react";





export const Login = () => {

    const [state, setState] = useState({
        username: "",
        password: "",
    })
    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });

    }



    let navigate = useNavigate();
    return (

        <div className="page">

            <BackgroundParticles className="particles" />
            <div className="login-section">

                <img alt="FDM Logo" src={fdmLogo} className="fdmLogo" />
                <div className="form" >
                    <input type="text" name="username" value={state.username} onChange={handleChange} placeholder="Username" className="form-textbox" required />

                    <input type="text" name="password" value={state.password} onChange={handleChange} placeholder="Password" className="form-textbox" required />

                    <input type="submit" value="Submit" className="button" onClick={()=>{
                        if (DB.users.filter(user => state.username === user.username)[0].password === state.password) {

                            navigate(login(state.username, state.password))
                        }

                    }} />

                </div>
            </div>



        </div>

    )
}
