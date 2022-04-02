import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { DB } from "./data/db";
import ConsultantView from "./pages/ConsultantView";



export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ConsultantView/>} />

            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));