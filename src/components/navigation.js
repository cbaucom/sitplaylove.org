import React from "react";
import SideBar from "./sidebar";

const Navigation = () => (
  <nav id="nav-wrap">
    <SideBar pageWrapId={"App"} outerContainerId={"nav-wrap"} />
    <ul id="nav" className="nav">
      <li className="">
        <a className="smoothscroll" href="#home">
          Home
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#about">
          About
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#testimonials">
          Testimonials
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
