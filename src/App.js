import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<PrivateRoute><Home/></PrivateRoute>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route exact path="/signup" element={<SignUp/>} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
