import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

import NavBar from "./Componants/NavBar";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";
import ForgetPassword from "./Pages/ForgetPassword";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="/" element={<LogIn/>} />
          <Route path="register" element={<Register/>} />
          <Route path="forget-password" element={<ForgetPassword/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
