import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import {DB} from "./data/db";



export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={DB.loggedIn? <div></div> : <Login /> } />

            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));