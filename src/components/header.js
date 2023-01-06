import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assessts/Logo1.svg";
import "../index.css";
const header = () => {
  return (
    <div>
      <nav className="h-16 navbar px-[63px]">
        {/* left side */}
        <div className="left">
          <NavLink to="/">
            <img src={logo} className=" py-4 " alt="logo is here" />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default header;
