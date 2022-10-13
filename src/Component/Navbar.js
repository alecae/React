
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import React, { useState } from "react";


const Navbar = () => {
  const [setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className={style.header}>
      <div className={style.logonav}>
        <div className={style.logocontainer}>
        </div>
        <ul className={style.navoptions}>
          <li className={style.option} onClick={closeMobileMenu}>
          <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li className={style.option} onClick={closeMobileMenu}>
          <Link to="/">Login</Link>
          </li>
          <li className={style.option} onClick={closeMobileMenu}>
          <Link to="/Weapon">Weapons</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;