import React from "react";
import classes from "../../../styles/MovieSectionComponentStyles.module.css";
import useMovieComponent from "../../../hooks/moviecomponent-hook";

//The images Api
const API_IMG = "https://image.tmdb.org/t/p/w500/";

//The Genre Api
const API_GENRE =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=63963159dae94bf1e30a674eee861084";


const TrendingMoviesComponent = ({
  poster_path,
  title,
  genre_ids,
  release_date,
}) => {

    //Using a custom hook to extract my logic values
  const {releaseDate} = useMovieComponent(API_GENRE,genre_ids,release_date)

      //layout and structure the section
  return (
    <>
      <div>
        <img
          src={API_IMG + poster_path}
          className={classes.poster_image}
          alt="Trending movies"
          loading="lazy"
        ></img>
      </div>
        <div className={classes.poster_text}>
          <span className={classes.title}>{title}</span>
          <span className={classes.movie_info}>
            {releaseDate} • {genre_ids[0].name}
          </span>
        </div>
    </>
  );
};

export default TrendingMoviesComponent;
