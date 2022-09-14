import React, { useEffect, useState } from "react";
import HeroSectionComponent from "./SectionComponent/HeroSectionComponent";
import classes from "./HeroSection.module.css";

const API_POPULAR_MOVIES =
  "https://api.themoviedb.org/3/movie/popular?api_key=63963159dae94bf1e30a674eee861084";

const HeroSection = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchmoviesHandler = async () => {
      const response = await fetch(API_POPULAR_MOVIES);

      const data = await response.json();

      console.log(data.results);
      setMovies(data.results);
    };

    fetchmoviesHandler();
  }, []);

  return (
    <div className={classes.header}>
      {movies.map((movieDetails) => (
        <HeroSectionComponent key={movieDetails.id} {...movieDetails} />
      ))}
    </div>
  );
};

export default HeroSection;
