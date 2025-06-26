import Navbar from "./components/navbar";
import PictureAndPara from "./components/picture-para";
import About from "./components/about";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Connect from "./components/connect";
import Footer from "./components/footer";
import React from "react";

const App = () => {
  return (
    <div className="bg-offWhite">
      <Navbar />
      <div className="px-6 sm:px-28 pb-20 flex flex-col items-center justify-center gap-20">
        <PictureAndPara />
        {/* <div className="w-full h-1 bg-gradient-to-r from-transparent via-black to-transparent mb-16"></div> */}
        <About />
        {/* <div className="w-full h-1 bg-gradient-to-r from-transparent via-black to-transparent mb-16"></div> */}
        <Experience />
        {/* <div className="w-full h-1 bg-gradient-to-r from-transparent via-black to-transparent mb-16"></div> */}
        <Projects />
        {/* <div className="w-full h-1 bg-gradient-to-r from-transparent via-black to-transparent mb-16"></div> */}
        <Skills />
        {/* <div className="w-full h-1 bg-gradient-to-r from-transparent via-black to-transparent mb-16"></div> */}
        <Connect />
      </div>
      <Footer />
    </div>
  );
};

export default App;
