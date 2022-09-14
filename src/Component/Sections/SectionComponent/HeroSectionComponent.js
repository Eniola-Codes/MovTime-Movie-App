import React from "react";
import classes from "./HeroSectionComponent.module.css";

// const API_IMGW500="https://image.tmdb.org/t/p/w500/";
const API_IMG = "https://image.tmdb.org/t/p/original/";

const HeroSectionComponent = ({
  poster_path,
  backdrop_path,
  title,
  overview,
  release_date,
  vote_average,
}) => {
  return (
    <div>
      <img
        src={API_IMG + backdrop_path}
        className={classes.backdrop_image}
        alt="Popular movies"
      ></img>
      {/* <img src={API_IMGW500+poster_path} style={{width : '100%'}}  alt='movie'></img> */}
      {/* <p>{title}</p>
          <p>{overview}</p>
          <p>{release_date}</p>
          <p>{vote_average}</p>

 */}
    </div>
  );
};

export default HeroSectionComponent;
