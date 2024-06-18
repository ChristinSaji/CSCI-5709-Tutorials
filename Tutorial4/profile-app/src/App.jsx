import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProfileListing from "./pages/ProfileListing";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile-listing" element={<ProfileListing />} />
      </Routes>
    </Router>
  );
};

export default App;
