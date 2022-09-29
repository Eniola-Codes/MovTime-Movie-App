import React from "react";
import HeroSection from "../Component/Sections/HeroSection";
import TrendingMovies from "../Component/Sections/TrendingMovies";
import TopRatedMovies from "../Component/Sections/TopRatedMovies";
import PopularMovies from "../Component/Sections/PopularMovies";
import PopularTv from "../Component/Sections/PopularTv";
import TopRatedTv from "../Component/Sections/TopRatedTv";

const Browse = () => {
  //rendering the Bars and the other sections
  return (
      <div className='content_div'>
        <HeroSection />
        <PopularMovies />
        <TrendingMovies />
        <TopRatedMovies />
        <PopularTv />
        <TopRatedTv />
      </div>
  );
};

export default Browse;
