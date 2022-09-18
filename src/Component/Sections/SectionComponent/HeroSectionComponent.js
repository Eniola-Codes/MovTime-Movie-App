import React, { useEffect, useState } from "react";
import classes from "./HeroSectionComponent.module.css";
import playImage from '../../../Assets/Icons/bold_video_circle.svg'

// const API_IMGW500="https://image.tmdb.org/t/p/w500/";
const API_IMG = "https://image.tmdb.org/t/p/original/";
const API_GENRE =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=63963159dae94bf1e30a674eee861084";

const HeroSectionComponent = ({
  backdrop_path,
  title,
  genre_ids,
}) => {
  const [movieGenre, setMovieGenre] = useState([]);

  useEffect(() => {
    const fetchMoviesGenres = async () => {
      const response = await fetch(API_GENRE);
      const data = await response.json();

      setMovieGenre(data.genres);
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
        {genre_ids.map((movie) => (
          <span className={classes.movie_genre}>{movie.name}</span>
        ))}
        <div className={classes.action}>
          <button type="button">Watch <img src={playImage} alt='play'></img></button>
        </div>
      </div>
      <div className={classes.overlay}>
          </div>
      </>
  );
};

export default HeroSectionComponent;
