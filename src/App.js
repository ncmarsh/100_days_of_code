import React from "react";
import NavBar from "./components/NavBar";
import ProgressCard from "./components/ProgressCard";
import ProgressTable from "./components/ProgressTable";
import ToggleViewBtn from "./components/ToggleViewBtn";
import codeProgress from "./code2019.json";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <h1>100 days of code</h1>
        <h2>Creating a way to keep track of my progress through the 
          <a href="https://www.100daysofcode.com/"> #100DaysOfCode </a> 
          Challenge
        </h2>
        <h3>My aim is to create an interactive structure to show my progress that I can also reuse for future challenges</h3>
        <ToggleViewBtn />
        </header>
        {codeProgress.map(item => <ProgressCard key={item.id} {...item} />)}
        <ProgressTable codeProgress={codeProgress} />
    </div>
  );
}

export default App;
