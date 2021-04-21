import React from "react";
import logo from "../../Pics/logo.png";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} width="50px" height="50px" />
        </NavLink>

        <Bars />

        <NavMenu>
          <NavLink to="/to-do/todolist" activeStyle>
            To Do List
          </NavLink>

          <NavLink to="/calender" activeStyle>
            Calendar
          </NavLink>

          <NavLink to="/diary" activeStyle>
            Diary
          </NavLink>

          <NavLink to="/medicine-alert" activeStyle>
            Medicine Alert
          </NavLink>

          <NavLink to="/prayer-alert" activeStyle>
            Prayer Alert
          </NavLink>

          <NavLink to="/class-alert" activeStyle>
            Class Alert
          </NavLink>

          <NavLink to="/meeting-alert" activeStyle>
            Meeting Alert
          </NavLink>

          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>

        <NavBtn>
          <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
