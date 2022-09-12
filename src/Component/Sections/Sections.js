import React from "react";
import HeroSection from "./HeroSection";
import classes from "./Sections.module.css";

const Section = () => {
  return (
    <main class={classes.container_main}>
      <HeroSection />
    </main>
  );
};

export default Section;
