import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';

import About from "./views/about";
import DuroLast from "./views/duro-last";
import Glossary from "./views/glossary";
import Home from "./views/home";
import Maintenance from "./views/maintenance";
import NewRoof from "./views/new-roof";
import Projects from "./views/projects";
import Repair from "./views/repair";
import Replacement from "./views/replacement";
import Warranty from "./views/warranty";

const App = () => {
  return (
    <Router>
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
  </Router>
  );
  };

ReactDOM.render(<App />, document.getElementById("app"));