import React, { useEffect, useState } from "react";
import classes from "./TrendingMoviesComponent.module.css";

const API_IMG = "https://image.tmdb.org/t/p/w500/";
const API_GENRE =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=63963159dae94bf1e30a674eee861084";

const TrendingMoviesComponent = ({
  poster_path,
  title,
  genre_ids,
  release_date,
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
    for (let x = 0; x < 1; x++) {
      if (movie.id === genre_ids[x]) {
        return (genre_ids[x] = { key: movie.id, name: movie.name });
      }
    }
    return "";
  });

  const releaseDate = release_date.slice(0,4);

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
          <span className={classes.title}>{title}</span>
          <span className={classes.movie_info}>
            {releaseDate} • {genre_ids[0].name}
          </span>
        </div>
    </>
  );
};

export default TrendingMoviesComponent;
