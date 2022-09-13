import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Navbar.module.css";
import notify from "../../Assets/Icons/notification-bing.svg";
import search from "../../Assets/Icons/search-icon.svg";
import avatar1 from "../../Assets/Avatars/avataaars(1).svg";

const NavBar = () => {
  return (
    <Navbar className={`${classes.navbar}`}>
      <Nav className={`${classes.nav_linkgroup}`}>
        <Nav.Link className={`${classes.nav_link}`}>Movies</Nav.Link>
        <Nav.Link className={`${classes.nav_link}`}>Kids</Nav.Link>
        <Nav.Link className={`${classes.nav_link}`}>Games</Nav.Link>
      </Nav>
      <Nav className={`${classes.nav_linkgroup_2}`}>
        <Nav.Link className={`${classes.nav_link}`}>
          <img src={search} alt="search"></img>
        </Nav.Link>
        <Nav.Link className={`${classes.nav_link} ms-3`}>
          <img src={notify} alt="notification bing"></img>
        </Nav.Link>
        <Nav.Link className={`${classes.nav_link} ms-3`}>
          <img src={avatar1} className={classes.nav_avatar} alt="notification bing"></img>
        </Nav.Link>
        <Nav.Link className={`${classes.nav_link} ${classes.nav_name}`}>Eniola Codes</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
