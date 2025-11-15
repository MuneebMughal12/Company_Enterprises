import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Components
// import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";




// Pages
import { Home } from "./Pages/Home.jsx";
import Extrior from "./Pages/extrior.jsx";
export default function App() {
  return (
    <>
      <Router>  
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exterior" element={<Extrior />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}
