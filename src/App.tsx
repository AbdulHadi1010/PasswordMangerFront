import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
import PasswordManager from "./components/PasswordManager";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  return (
    <Router>
    <Navbar isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/passwordManager" element={<PasswordManager />} />
        </Routes>
      </Router>

  );
}

export default App;
