import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import {ConsultantView} from "./pages/ConsultantView";
import ManagerView from "./pages/ManagerView";
import FinanceView from "./pages/FinanceView";
import AddTimesheet from "./pages/AddTimesheet";
import AddConsultant from "./pages/AddConsultant";




export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/consultant" element={<ConsultantView/>}/>
                <Route path="/manager" element={<ManagerView/>}/>
                <Route path="/finance" element={<FinanceView/>}/>
                <Route path="/addtimesheet" element={<AddTimesheet/>}/>
                <Route path="/addconsultant" element={<AddConsultant/>}/>
                
            </Routes>
        </BrowserRouter>
    );
}

// ReactDOM.render(<App />, document.getElementById("root"));