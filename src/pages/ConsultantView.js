import Collapsible from "react-collapsible"
import { useNavigate } from "react-router-dom"
import laptop from "../assets/fdm-laptop.jpg"
import { DB, logout } from "../data/db"

import "../styles/ConsultantView.css"




export const ConsultantView = () => {
  let navigate = useNavigate();
  return (

    <div className="mainPage">
      <div className="leftColumn">
        <img src={laptop} alt="laptop" className="laptopImg" />
        <div className="userDetails">
          <h3>Hey there {DB.currentUser?.name}! </h3>
          <h4> ID: {DB.currentUser?.ID}</h4>
        </div>
        <div className="buttons">
          <h3 onClick={() => navigate("/addtimesheet")} className="button">
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
            <div className="timesheetList">
              {DB.currentUser?.timesheets.filter(timesheet => timesheet.status === "pending").map((timesheet, index) => (
                <div key={index} className="timesheet pending">
                  <h3 className="timesheetDetails">Date: {timesheet.date.toLocaleDateString("en-US")} | Hours: {timesheet.hours} | Status: {timesheet.status}</h3>
                </div>
              ))}
            </div>
          </div>
        </Collapsible>
        <Collapsible trigger={<h3 className="collapsibleHeader">Approved Timesheets</h3>} className="collapsibleDiv">
          <div className="collapsibleBody">
            <div className="timesheetList">
              {DB.currentUser?.timesheets.filter(timesheet => timesheet.status === "approved").map((timesheet, index) => (
                <div key={index} className="timesheet approved">
                  <h3 className="timesheetDetails">Date: {timesheet.date.toLocaleDateString("en-US")} | Hours: {timesheet.hours} | Status: {timesheet.status}</h3>
                </div>
              ))}
            </div>
          </div>
        </Collapsible><Collapsible trigger={<h3 className="collapsibleHeader">Rejected Timesheets</h3>} className="collapsibleDiv">
          <div className="collapsibleBody">
            <div className="timesheetList">
              {DB.currentUser?.timesheets.filter(timesheet => timesheet.status === "rejected").map((timesheet, index) => (
                <div key={index} className="timesheet rejected">
                  <h3 className="timesheetDetails">Date: {timesheet.date.toLocaleDateString("en-US")} | Hours: {timesheet.hours} | Status: {timesheet.status}</h3>
                </div>
              ))}
            </div>
          </div>
        </Collapsible>


      </div>
    </div>
  )
}
