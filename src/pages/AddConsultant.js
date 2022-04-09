import office from "../assets/fdm-office2.png"
import "../styles/AddTimesheet.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom"



import BackgroundParticles from "../components/BackgroundParticles"
import { DB, addConsultant } from "../data/db";
const AddConsultant = () => {
  const [state, setState] = useState({

    name: "",
    username: "",
    password: "",
    BAN: "",
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
    <div className="mainPage">
      <div className="addform">
        <img src={office} alt="office" className="officeImg" />
        <div className="inputFields">

          <input type="text" name="name" value={state.name} onChange={handleChange} placeholder="First Name" className="form-textbox" required />

          {/* // constructor(ID, type, name, username, password, BAN, timesheets, rate)  */}
          <input type="text" name="username" value={state.username} onChange={handleChange} placeholder="Username" className="form-textbox" required />
          <input type="text" name="password" value={state.password} onChange={handleChange} placeholder="Password" className="form-textbox" required />
          <input type="number" name="BAN" value={state.BAN} onChange={handleChange} placeholder="Bank Account Number" className="form-textbox" required />


          <input type="submit" value="Submit" className="button" onClick={() => {
            if (state.name == "" || state.username == "" || state.password==""|| state.BAN=="") {
              alert("Please Fill the Form");
            }
            else if ( DB.users.filter(user => state.username === user.username)[0]!=null){
              alert("User already exists");
            }
            else {
              if (window.confirm("Are you sure you want to register as a new consultant, " +state.name + "?")){
              addConsultant(state.name, state.username, state.password, state.BAN);
              navigate("/");
            }
            }
          }} />
        </div>
      </div>
      <BackgroundParticles />
    </div>
  )
}

export default AddConsultant