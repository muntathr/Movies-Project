import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import logo from "../assets/Images/general/logo.png";
import * as Icon from "react-feather";
import { Collapse, Nav, NavItem, NavbarBrand, NavbarToggler } from "reactstrap";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const windowScroll = () => {
    const navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar?.classList.add("nav-sticky");
    } else {
      navbar?.classList.remove("nav-sticky");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.addEventListener("scroll", windowScroll);
    return () => {
      window.removeEventListener("scroll", windowScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg nav-light fixed-top sticky"
    >
      <div className="container">
        <NavbarBrand tag={RouterLink} to="/">
          <span className="logo-light-mode">
            <img src={logo} className="l-light" alt="" />
            <img src={logo} className="l-dark" alt="" />
          </span>
          <img src={logo} className="logo-dark-mode" alt="" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleMenu}>
          <Icon.Menu />
        </NavbarToggler>

        <Collapse
          className="collapse navbar-collapse justify-content-end"
          isOpen={isOpen}
          id="navbar"
        >
          <Nav className="navbar-nav mx-0 mb-2 mb-lg-0" id="navbar-navlist">
            <NavItem>
              <RouterLink
                className="nav-link"
                to="/"
              >
                Home
              </RouterLink>
            </NavItem>
            <NavItem>
              <RouterLink
                className="nav-link"
                to="/movies"
              >
                Movies
              </RouterLink>
            </NavItem>
            <NavItem>
              <RouterLink
                className="nav-link"
                to="/search"
              >
                Search
              </RouterLink>
            </NavItem>
            <NavItem>
              <a
                className="nav-link"
                href="#"
                data-bs-toggle="modal" data-bs-target="#authModal"
              >
                Login
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </nav>
  );
};

export default Navbar;
