import React from "react";
import classes from "./PopularTvComponent.module.css";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const PopularTvComponent = ({
  poster_path,
  original_name,
 vote_average,
  first_air_date,
}) => {

  const releaseDate = first_air_date.slice(0,4);

  return (
    <>
      <div>
        <img
          src={API_IMG + poster_path}
          className={classes.poster_image}
          alt="Trending movies"
        ></img>
      </div>
        <div className={classes.poster_text}>
          <span className={classes.title}>{original_name}</span>
          <span className={classes.movie_info}>
            {releaseDate} • {vote_average} Vote
          </span>
        </div>
    </>
  );
};

export default PopularTvComponent;
