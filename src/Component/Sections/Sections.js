import React from "react";
import HeroSection from "./HeroSection";
import classes from "./Sections.module.css";
import NavBar from "../Bars/NavBar";

const Section = () => {
  return (
    <main class={classes.container_main}>
      <NavBar/>
      <HeroSection />
    </main>
  );
};

export default Section;
