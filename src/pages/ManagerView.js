import office from "../assets/fdm-office.png"
import Collapsible from "react-collapsible"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { DB, logout } from "../data/db"
import BackgroundParticles from "../components/BackgroundParticles"

import "../styles/ManagerView.css"

const ManagerView = () => {

  let navigate = useNavigate();
  const [timesheets, setTimesheets] = useState(null);
  function handleApprove(id) {
    let item = timesheets.filter((item) => item.ID === id)[0];
    item.status = "approved";
    const newList = timesheets;
    setTimesheets(newList);
    DB.currentUser.timesheets = newList;

  }

  return (
    <div className="managerPage">
      <BackgroundParticles />
      <div className="manageTimesheets">
        <img src={office} alt="office" className="officeImgManager" />
        <div className="menuandtimesheets">
          <div className="menu">
            <div className="managerDetails">
              <h3>Hey there, </h3>
              <svg className="nameSvg">
                <text className="svgText" x="50%" y="50%" fill="" textAnchor='middle'>
                  {DB.currentUser?.name}
                </text>
              </svg>
              <h4> ID: {DB.currentUser?.ID}</h4>
            </div>
            <h3 onClick={() => { navigate("/"); logout() }} className="managerButton">
              Logout
            </h3>
          </div>
          <div className="managerTimesheets">

            
            {DB.users.filter(user => user.type === "consultant").map((user, index) => (

              <Collapsible trigger={<h3 className="managerCollapsibleHeader">{user.name}</h3>} className="managerCollapsibleDiv">
                <div className="managerCollapsibleBody">
jhkjhkjh
                </div>
              </Collapsible>


            ))}


          </div>

        </div>

      </div>
    </div>
  )
}

export default ManagerView