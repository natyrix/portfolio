import React, {useContext} from 'react'
import './navbar.css'
import Moon from '../../img/moon.png'
import Sun from '../../img/sun.png'
import {ThemeContext} from "../../context";
import NavBody from './NavBody';


export default function NavBar() {
    const theme = useContext(ThemeContext);
    const handleClick = ()=>{
        theme.dispatch({type:"TOGGLE"});
    }
  return (
    <div className='navbar-top'>
        <NavBody/>
        {/* <div className='navbody'>NavBody</div> */}
        <div className='navbar'>
            <img src={Sun} className="navbar-icon"/>
            <img src={Moon} className="navbar-icon"/>
            <div className="navbar-button" style={{ left:theme.state.darkMode?"0":"25px" }} onClick={handleClick}></div>
        </div>
    </div>
  )
}
