import React from "react";
import useDarkMode from "./use-dark-mode";
import Toggle from "./Toggle";
import Content from "./Content";
import "./App.scss";

function App() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div>
      <div className="navbar">
        <div> Home</div>
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <Content />
    </div>
  );
}

export default App;
