import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Style/Navbar.css";

import Logo from "./assets/renutech_logo.svg";

import { FcMenu } from "react-icons/fc";

const Navbar = () => {
  const NavLinks = ["home", "events", "about"];
  const NavLinkGroup = () => {
    return (
      <div id="nav-links" className="text-black md:text-white">
        {NavLinks.map((link, index) => {
          return (
            <NavLink
              key={index}
              className=""
              to={link == "home" ? "/" : `/${link}`}
            >
              <li className="capitalize md:inline-block md:mr-6 md:hover:border-b-2 border-white list-disc md:list-none hover:text-white">
                {link}
              </li>
            </NavLink>
          );
        })}
      </div>
    );
  };

  const MenuLinks = [
    "contact",
    "rules",
    "co-ordinators",
    "accommondation",
    "sponsor",
    "gallary",
    "F&Q",
  ];
  const MenuLinkGroup = () => {
    return (
      <div id="nav-links" className="text-black">
        {MenuLinks.map((link, index) => {
          return (
            <NavLink
              key={index}
              className=""
              to={link == "home" ? "/" : `/${link}`}
            >
              <li className="capitalize list-disc hover:text-white">{link}</li>
            </NavLink>
          );
        })}
      </div>
    );
  };
  return (
    <div className="nav-cont flex justify-between items-center px-10 md:px-20 bg-transparent h-16 md:h-20">
      <img className="w-16" src={Logo} alt="logo" />
      <div className="hidden md:block">
        <NavLinkGroup />
      </div>

      <div className="">
        <input type="checkbox" id="check" className="hidden" />
        <label
          htmlFor="check"
          className=" float-right p-2 bg-slate-200 rounded-lg"
        >
          <FcMenu />
        </label>
        <ul className="menu-list hidden w-52 pt-6 float-right h-screen bg-blue-950 fixed top-20 -mt-5 md:-mt-2.5 right-0 pl-16 font-bold">
          <li className=" md:hidden text-start list-disc">
            <NavLinkGroup />
          </li>
          <li className=" text-start">
            <MenuLinkGroup />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
