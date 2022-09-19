import React, { useEffect, useState } from "react";
import classes from "./HeroSectionComponent.module.css";
import playImage from "../../../Assets/Icons/bold_video_circle.svg";
import spinner from '../../../Assets/Icons/spinner-small.svg'

const API_IMG = "https://image.tmdb.org/t/p/original/";
const API_GENRE =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=63963159dae94bf1e30a674eee861084";

const HeroSectionComponent = ({ backdrop_path, title, genre_ids }) => {
  const [movieGenre, setMovieGenre] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoviesGenres = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(API_GENRE);

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();

        setMovieGenre(data.genres);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    fetchMoviesGenres();
  }, []);

  movieGenre.map((movie) => {
    for (let x = 0; x < movieGenre.length; x++) {
      if (movie.id === genre_ids[x]) {
        return (genre_ids[x] = { key: movie.id, name: movie.name });
      }
    }
    return "";
  });

  let genre_content;

  if (!isLoading && !error) {
    genre_content = genre_ids.map((movie) => (
      <span className={classes.movie_genre}>{movie.name}</span>
    ));
  }

  if (!isLoading && error) {
    genre_content = (
      <div className={classes.error_div}>
        <p className={classes.error}>{error}</p>
      </div>
    );
  }

  if (isLoading) {
    genre_content = (
      <div className={classes.loader_div}>
        <img src={spinner} alt="loader" className={classes.loader}></img>
      </div>
    );
  }


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
