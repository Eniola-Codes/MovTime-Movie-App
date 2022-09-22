import React from "react";
import classes from "../../../styles/HeroSectionComponent.module.css";
import playImage from "../../../Assets/Icons/bold_video_circle.svg";
import spinner from "../../../Assets/Icons/spinner-small.svg";
import useMovieComponent from "../../../hooks/moviecomponent-hook";

//The images Api
const API_IMG = "https://image.tmdb.org/t/p/original/";

//The Genre Api
const API_GENRE =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=63963159dae94bf1e30a674eee861084";

const HeroSectionComponent = ({
  backdrop_path,
  title,
  genre_ids,
  release_date,
}) => {

    //Using a custom hook to extract my logic values
  const { isLoading, error } = useMovieComponent(
    API_GENRE,
    genre_ids,
    release_date
  );

      //The genre content variablke 
  let genre_content;

    //Conditional logic to render content
  if (!isLoading && !error) {
    genre_content = genre_ids.map((movie) => (
      <span className={classes.movie_genre}>{movie.name}</span>
    ));
  }

    //Conditional logic to render content
  if (!isLoading && error) {
    genre_content = (
      <div className={classes.error_div}>
        <p className={classes.error}>{error}</p>
      </div>
    );
  }

    //Conditional logic to render content
  if (isLoading) {
    genre_content = (
      <div className={classes.loader_div}>
        <img src={spinner} alt="loader" className={classes.loader}></img>
      </div>
    );
  }

  //layout and structure the section
  return (
    <>
      <div>
        <img
          src={API_IMG + backdrop_path}
          className={classes.backdrop_image}
          alt="Popular movies"
        ></img>
      </div>
      <div className={classes.backdrop_text}>
        <p className={classes.title}>{title}</p>
        {genre_content}
        <div className={classes.action}>
          <button type="button">
            Watch <img src={playImage} alt="play"></img>
          </button>
        </div>
      </div>
      <div className={classes.overlay}></div>
    </>
  );
};

export default HeroSectionComponent;
