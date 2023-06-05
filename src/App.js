import React from 'react';
import './App.css';
import NavBare from "./components/NavBare.js";
import Menu from "./components/Menu.js"
import Workshop from "./components/Workshop.js"
import Tags from "./components/Tags.js"
import Elements from "./components/Elements.js";
import { useSelector } from 'react-redux';
import Hints from "./components/Hints.js";

function App() {
  const { settings } = useSelector((state) => state.alchemy);
  let obj = settings;
  
 if (obj.darkMode) {
    document.querySelector(':root').style =
      ' --mode-color: white;--mode-background-color: black;';
  } else {
    document.querySelector(':root').style =
    ' --mode-color: black;--mode-background-color: white;';
  }
  document.documentElement.style.setProperty('--color', `${obj.color}`);
  return (
    <div className="App">
      <NavBare />
      <Menu />
      <Workshop />
      <Tags />
      <Elements />
      <Hints />
    </div>
  );
}

export default App;
