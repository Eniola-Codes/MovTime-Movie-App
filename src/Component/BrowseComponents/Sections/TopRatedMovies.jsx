import React from "react";
import MoviesData from "../SectionsData/MoviesData";
import classes from "../../../styles/MovieTvSliderStyles.module.css";
import SwiperUi from "../../Ui/SwiperUi/SwiperUi";
import { SwiperSlide } from "swiper/react";
import useMoviesTv from "../../../hooks/moviestv-hook";
import Loader from "../../Ui/Loader";
import Error from "../../Ui/Error";


//The Top Rated Api
const API_TOPRATED_MOVIES =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=63963159dae94bf1e30a674eee861084";

const TopRatedMovies = () => {
  //Using a custom hook to extract my logic values
  const { movies, isLoading, error } =
    useMoviesTv(API_TOPRATED_MOVIES);

  //The content variablke
  let content;

  //Conditional logic to render content
  if (!isLoading & !error) {
    content = (
      //Using swiper js library
      <SwiperUi>
         {movies.map((movieDetails) => (
          <SwiperSlide className={classes.swiperslide} key={movieDetails.id}>
             <MoviesData {...movieDetails} />
          </SwiperSlide>
        ))}
      </SwiperUi>
    );
  }

  //Conditional logic to render content
  if (!isLoading && error) {
    content = (
      <Error error={error} />
    );
  }

  //Conditional logic to render content
  if (isLoading) {
    content = (
<Loader />    );
  }

  //rendering the content
  return (
    <>
      <section className={classes.style_movies}>
        <h4 className={classes.style_movies_header}>Top Rated Movies</h4>
        {content}
      </section>
    </>
  );
};

export default TopRatedMovies;
