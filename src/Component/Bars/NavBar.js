import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "../../styles/Navbar.module.css";
import notify from "../../Assets/Icons/notification-bing.svg";
import search from "../../Assets/Icons/search-icon.svg";
import avatar1 from "../../Assets/Avatars/avataaars(1).svg";

const NavBar = () => {
  const onKidsHandler = () => {};

  //Rendering the Navbar
  return (
    <Navbar className={classes.navbar}>
      <Nav className={classes.nav_linkgroup}>
        <Nav.Link className={classes.nav_link}>
          All
        </Nav.Link>
        <Nav.Link className={classes.nav_link} onClick={onKidsHandler}>
          Movies
        </Nav.Link>
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
          <img src={search} alt="search"></img>
        </Nav.Link>
        <Nav.Link className={`${classes.nav_link} ms-3`}>
          <img src={notify} alt="notification bing"></img>
        </Nav.Link>
        <Nav.Link className={`${classes.nav_link} ms-3`}>
          <img src={avatar1} className={classes.nav_avatar} alt="Avatar"></img>
        </Nav.Link>
        <Nav.Link className={`${classes.nav_link} ${classes.nav_name}`}>
          Eniola Codes
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
