import React, { useEffect } from "react";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import About from "./components/About";
import Tech from "./components/Tech";

const App = () => {
  return (
    <div>
      <Landing />
      <About />
      <Projects />
      <Tech />
    </div>
  );
};

export default App;
