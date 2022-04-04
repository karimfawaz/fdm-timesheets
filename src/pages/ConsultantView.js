import Collapsible from "react-collapsible"
import { useNavigate } from "react-router-dom"
import laptop from "../assets/fdm-laptop.jpg"
import { DB, logout } from "../data/db"

import "../styles/ConsultantView.css"





export const ConsultantView = () => {
  let navigate = useNavigate();
  return (

    <div className="mainPage">
      {console.log(DB.currentUser)}
      <div className="leftColumn">
        <img src={laptop} alt="laptop" className="laptopImg" />
        <div className="userDetails">
          <h3>Hey there {DB.currentUser?.name}! </h3>
          <h4> ID: {DB.currentUser?.ID}</h4>
        </div>
        <div className="buttons">
          <h3 onClick={() => navigate("/login")} className="button">
            Add Timesheet
          </h3>
          <h3 onClick={() => { navigate("/"); logout() }} className="button">
            Logout
          </h3>
        </div>
      </div>
      <div className="rightColumn">
        <Collapsible trigger={<h3 className="collapsibleHeader">Open Timesheet Submissions</h3>} className="collapsibleDiv">
          <div className="collapsibleBody">
            <h3>Test</h3>
          </div>
        </Collapsible>
        <Collapsible trigger={<h3 className="collapsibleHeader">Approved Timesheets</h3>} className="collapsibleDiv">
          <div className="collapsibleBody">
            <h3>Test</h3>
          </div>
        </Collapsible><Collapsible trigger={<h3 className="collapsibleHeader">Rejected Timesheets</h3>} className="collapsibleDiv">
          <div className="collapsibleBody">
            <h3>Test</h3>
          </div>
        </Collapsible>


      </div>
    </div>
  )
}
