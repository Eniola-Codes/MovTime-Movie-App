import React, {useState} from "react";
import classes from "../../../styles/MovieSectionComponentStyles.module.css";
import useMovieComponent from "../../../hooks/moviecomponent-hook";

//The images Api
const API_IMG = "https://image.tmdb.org/t/p/w500/";

//The Genre Api
const API_GENRE =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=63963159dae94bf1e30a674eee861084";

const PopularMoviesComponent = ({
  poster_path,
  title,
  genre_ids,
  release_date,
}) => {

  const [scaleUp,setScaleUp] =  useState(false);

    //Using a custom hook to extract my logic values
  const {releaseDate} = useMovieComponent(API_GENRE,genre_ids,release_date)


  const onScaleUpHandler = () => 
  {
    setScaleUp(true);
  }

  const onScaleDownHandler = () => 
  {
    setScaleUp(false);
  }

  const scaleUpClass = scaleUp ? classes.scaleup : '' ;

    //layout and structure the section
  return (
    <div className={`${classes.img_container} ${scaleUpClass}`} onMouseOver={onScaleUpHandler} onMouseOut={onScaleDownHandler}>
      <div >
        <img
          src={API_IMG + poster_path}
          className={classes.poster_image}
          alt="Popular movies"
        ></img>
      </div>
         <div className={classes.poster_text}>
          <span className={classes.title}>{title}</span>
          <span className={classes.movie_info}>
            {releaseDate} • {genre_ids[0].name}
          </span>
        </div>
        <div className={classes.poster_info}>
          <p>wdonwdnouewnbqoufwofqwdonwdnouewnbqoufwofqwdonwdnouewnbqoufwofq</p>
        </div>
    </div>
  );
};

export default PopularMoviesComponent;
