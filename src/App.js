import React,{useState} from "react";
import useDarkMode from "./use-dark-mode";
import Toggle from "./Toggle";
import Content from "./Content";
import "./App.scss";
import { motion } from "framer-motion"
import Motions from './Motion/Motions'
import { wrap } from "@popmotion/popcorn";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}


function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const list = { hidden: { opacity: 0 } }
  const item = { hidden: { x: -10, opacity: 0 } }
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div className="navbar">
        <div> Home</div>
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <Content />

      <div>

      <Motions/>



      </div>
 

<div>


</div>
      
    </div>
  );
}

export default App;
