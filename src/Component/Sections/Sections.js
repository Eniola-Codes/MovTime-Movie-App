import React from "react";
import HeroSection from "./HeroSection";
import classes from "./Sections.module.css";
import NavBar from "../Bars/NavBar";
import TrendingMovies from "./TrendingMovies";

const Section = () => {
  return (
    <main className={classes.container_main}>
      <NavBar />
      <div className={classes.content_div}>
        <HeroSection />
        <TrendingMovies/>
      </div>
    </main>
  );
};

export default Section;
