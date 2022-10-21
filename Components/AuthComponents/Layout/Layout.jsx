import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "../../../styles/AuthStyle/Layout.module.css";
import movieImage from "../../../public/Assets/Images/authPage-image.webp";
import { Navbar } from "react-bootstrap";
import LogoText from "../../../public/Assets/Logo/LogoText.svg";
import Logo from "../../../public/Assets/Logo/Logo.svg";

const Layout = (props) => {
  const router = useRouter();

  return (
    <Row>
      <Col lg={4} className={classes.image_col}>
        <Image
          src={movieImage}
          alt="auth page"
          layout="fill"
          objectFit="cover"
        ></Image>
      </Col>
      <Col lg={8}>
        <Navbar className={classes.navbar}>
            <Navbar.Brand className={classes.nav_logo}>
              <Image src={Logo} alt="logo"></Image>
              <Image src={LogoText} alt="logo text"></Image>
            </Navbar.Brand>
        </Navbar>
        <div className={classes.auth_container}>
          <div className={classes.authForm}>{props.children}</div>
        </div>
      </Col>
    </Row>
  );
};

export default Layout;
