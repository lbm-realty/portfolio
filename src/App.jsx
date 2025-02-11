import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import PictureAndPara from "./components/picture-para";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Skills from "./components/skills";
import React from "react";

const App = () => {
  return (
    <div className="bg-offWhite">
        <Navbar />
          <PictureAndPara />
          <About />
          <Experience />
          <Projects />
          <Skills />
    </div>
  );
};

export default App;
