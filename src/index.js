import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Hardware from "./Components/Hardware";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Hardware from "./pages/Hardware";
import Software from "./pages/Software";
import Login from "./pages/Login";
import Login_SignUp2 from "./pages/Login_SignUp2";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        {/* <App /> */}
      </Route>
      <Route path="/Hardware" element={<Hardware></Hardware>}></Route>
      <Route path="/Software" element={<Software></Software>}></Route>
      <Route path="/Login" element={<Login_SignUp2></Login_SignUp2>}></Route>
    </Routes>
  </Router>
);
