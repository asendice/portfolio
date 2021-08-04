import React from "react";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import About from "./components/About";
import Tech from "./components/Tech";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Landing />
      <About />
      <Projects />
      <Tech />
      <Contact />
    </div>
  );
};

export default App;
