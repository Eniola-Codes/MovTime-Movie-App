import React from "react";
import classes from "../../../styles/MovieSectionComponentStyles.module.css";
import useMovieComponent from "../../../hooks/moviecomponent-hook";

//The images Api
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const PopularTvComponent = ({
  poster_path,
  original_name,
 vote_average,
  first_air_date,
}) => {

    //Using a custom hook to extract my logic values
  const {releaseDate, scaleUp, onScaleDownHandler, onScaleUpHandler} = useMovieComponent(null,null,first_air_date);

  const scaleUpClass = scaleUp ? classes.scaleup : '' ;

    //layout and structure the section
  return (
<div className={`${classes.img_container} ${scaleUpClass}`} onMouseOver={onScaleUpHandler} onMouseOut={onScaleDownHandler}>     
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
        <div className={classes.poster_info}>
          <p>wdonwdnouewnbqoufwofqwdonwdnouewnbqoufwofqwdonwdnouewnbqoufwofq</p>
        </div>
    </div>
  );
};

export default PopularTvComponent;
