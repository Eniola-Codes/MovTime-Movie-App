import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/uiStore";
import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../Assets/Logo/Logo.svg";
import classes from "../../styles/BarsStyle/NavBar.module.css";
import avatar1 from "../../Assets/Avatars/avataaars(1).svg";
import { FaBell } from "react-icons/fa";
import { RiSearch2Fill } from "react-icons/ri";

const NavBar = () => {
  const dispatch = useDispatch();

  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  const navbarTogglerHandler = () => {
    if (navbarIsOpen) {
      setNavbarIsOpen(false);
    } else {
      setNavbarIsOpen(true);
    }

    dispatch(uiActions.showSideBar());
  };

  const navOpen = navbarIsOpen ? classes.open : "";
  //Rendering the Navbar
  return (
    <Navbar className={classes.navbar}>
      <Nav className={classes.nav_logo}>
        <div>
          <img src={Logo} alt="logo"></img>
        </div>
      </Nav>
      <Nav className={classes.nav_linkgroup}>
        <Nav.Link className={classes.nav_link}>All</Nav.Link>
        <Nav.Link className={classes.nav_link}>Movies</Nav.Link>
        <NavDropdown
          id="nav-dropdown-light-example"
          title={<span className={classes.nav_link}>Categories</span>}
          menuVariant="dark"
          className="text-light"
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav className={classes.nav_linkgroup_2}>
        <Nav.Link className={classes.nav_link}>
          <RiSearch2Fill />
        </Nav.Link>
        <Nav.Link className={`${classes.nav_link} ms-3`}>
        <FaBell /> 
        </Nav.Link>
        <Nav.Link className={`${classes.nav_link} ms-3`}>
          <img src={avatar1} className={classes.nav_avatar} alt="Avatar"></img>
        </Nav.Link>
        <Nav.Link className={`${classes.nav_link} ${classes.nav_name}`}>
          Eniola Codes
        </Nav.Link>
      </Nav>
      <Nav className={classes.nav_hamburger}>
        <div
          className={classes.navbar_toggler_btn}
          onClick={navbarTogglerHandler}
        >
          <div className={`${classes.navbar_toggler_myicon} ${navOpen}`}></div>
        </div>
      </Nav>
    </Navbar>
  );
};

export default NavBar;