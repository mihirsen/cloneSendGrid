import React from "react";
import Navbar from "./Components/Navbar";
import "./Style.css";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route
            path="/SignIn"
            element={
              <>
                <SignIn />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
