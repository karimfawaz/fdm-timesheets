import office from "../assets/fdm-office2.png"
import "../styles/AddTimesheet.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom"



import BackgroundParticles from "../components/BackgroundParticles"
import { DB , addtimesheet } from "../data/db";
const AddTimesheet = () => {

    const [state, setState] = useState({
        date: null,
        hours: "",
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

                    <input type="date" name="date" value={state.date} onChange={handleChange} placeholder="Date" className="form-textbox" required />

                    <input type="number" name="hours" value={state.hours} onChange={handleChange} placeholder="Hours" className="form-textbox" required />

                    <input type="submit" value="Submit" className="button" onClick={() => {
                        
                        if(state.date ==null || state.hours==""){
                            alert("Please Fill the Form");
                        }
                        else{

                            addtimesheet(state.date, state.hours);
                            navigate("/consultant");
                        }
                        
                    }} />
                </div>
            </div>
            <BackgroundParticles />
        </div>
    )
}

export default AddTimesheet