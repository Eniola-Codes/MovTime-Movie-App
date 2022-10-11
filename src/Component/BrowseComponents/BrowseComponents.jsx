import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import classes from "../../styles/BrowsePageStyle/BrowseComponents.module.css";
import TrendingMovies from "./Sections/TrendingMovies";
import TopRatedMovies from "./Sections/TopRatedMovies";
import PopularMovies from "./Sections/PopularMovies";
import PopularTv from "./Sections/PopularTv";
import TopRatedTv from "./Sections/TopRatedTv";

const BrowseComponents = () => {
  return (
    <div className={classes.content_div}>
      <HeroSection />
      <PopularMovies />
      <TrendingMovies />
      <TopRatedMovies />
      <PopularTv />
      <TopRatedTv />
    </div>
  );
};

export default BrowseComponents;
