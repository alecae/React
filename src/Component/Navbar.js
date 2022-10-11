import React from 'react';
import {  Link } from "react-router-dom";
import style from "./Navbar.module.css";



const Navbar= () =>{
  return (
  <div className={style.form}>
    <li>
      <Link to="/">Login</Link>
    </li>
    <li>
      <Link to="/Dashboard">Dashboard</Link>
    </li>
  </div>
  );
}
export default Navbar;