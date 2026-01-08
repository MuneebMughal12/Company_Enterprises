import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";





// Pages
import { Home } from "./Pages/Home.jsx";
import Extrior from "./Pages/extrior.jsx";
import Aboutus from "./Pages/Aboutus.jsx";
import Enquiry from "./Pages/enquiey.jsx"
import Fliperbook from "./Pages/Fliperbook.jsx";

export default function App() {
  return (
    <>
      <Router>  
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/3D_EXTERIOR_RENDERS" element={<Extrior />} />
          <Route path="/ABOUT_US" element={<Aboutus />} />
          <Route path="/ENQUIRY" element={<Enquiry />} />
          <Route path="/COPMANY_PROFILE" element={<Fliperbook />} />

        </Routes>
        <Footer/>
      </Router>
    </>
  );
}
