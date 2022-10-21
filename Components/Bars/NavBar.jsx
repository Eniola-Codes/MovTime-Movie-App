import { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/uiStore";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../../public/Assets/Logo/Logo.svg";
import classes from "../../styles/BarsStyle/NavBar.module.css";
import avatar1 from "../../public/Assets/Avatars/avataaars(1).svg";
import { FaBell } from "react-icons/fa";
import { RiSearch2Fill } from "react-icons/ri";
import Link from "next/link";

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
          <Image src={Logo} alt="logo"></Image>
        </div>
      </Nav>
      <Nav className={classes.nav_linkgroup}>
      <span className={`${classes.nav_link} mx-2`}><Link href='/browse'>All</Link></span>
        <span className={`${classes.nav_link} mx-2`}><Link href='/browse/movies'>Movies</Link></span>
        <span className={`${classes.nav_link} mx-2`}><Link href='/browse/tvseries'>Tv series</Link></span>
      </Nav>
      <Nav className={classes.nav_linkgroup_2}>
        <Nav.Link className={classes.nav_link}>
          <RiSearch2Fill />
        </Nav.Link>
        <Nav.Link className={`${classes.nav_link} ms-3`}>
          <FaBell />
        </Nav.Link>
        <Nav.Link className={`${classes.nav_link} ms-3`}>
          <Image src={avatar1} alt="Avatar" width={32} height={32}></Image>
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
