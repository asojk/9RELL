import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';

import About from "./Pages/about";
import DuroLast from "./Pages/duro-last";
import Glossary from "./Pages/glossary";
import Home from "./Pages/home";
import Maintenance from "./Pages/maintenance";
import NewRoof from "./Pages/new-roof";
import Projects from "./Pages/projects";
import Repair from "./Pages/repair";
import Replacement from "./Pages/replacement";
import Warranty from "./Pages/warranty";
import Nav from './Components/hoc/Nav';
import Footer from './Components/hoc/footer';
import Wave from "./SVGs/Wave.js";

const App = () => {
  return (
    <Router>
    <div style={{ zIndex: "9999" }}>
    <Nav /></div> 
    <Wave />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/duro-last" element={<DuroLast />} />
      <Route path="/glossary" element={<Glossary />} />
      <Route path="/new-roof" element={<NewRoof />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/repair" element={<Repair />} />
      <Route path="/replacement" element={<Replacement />} />
      <Route path="/warranty" element={<Warranty />} />
      <Route path="/maintenance" element={<Maintenance />} />
    </Routes>
    <div style={{ zIndex: "9999" }}>
    <Footer />
    </div>
  </Router>
  );
  };

ReactDOM.render(<App />, document.getElementById("app"));