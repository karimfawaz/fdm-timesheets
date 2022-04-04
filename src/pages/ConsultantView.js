import Collapsible from "react-collapsible"
import { useNavigate } from "react-router-dom"
import laptop from "../assets/fdm-laptop.jpg"

import "../styles/ConsultantView.css"





export const ConsultantView = () => {
  let navigate = useNavigate();
  return (
    <div className="mainPage">
      <div className="leftColumn">
        <img src={laptop} alt="laptop" className="laptopImg" />
        <div className="buttons">
          <div className="button">
            <h3 onClick={()=>navigate("/login")}>Add Timesheet</h3>
          </div>
          <div className="button">
            <h3 onClick={()=>navigate("/login")}>Logout</h3>
          </div>
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
