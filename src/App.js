import logo from './logo.svg';
import './App.css';
import React, {useContext} from "react";
import {ThemeContext} from "./context";
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';


function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='App' style={{ backgroundColor: darkMode?"#222":"white", color:darkMode&&"white" }}>
      <NavBar/>
      <Home/>
      <Portfolio/>
    </div>
  );
}

export default App;
