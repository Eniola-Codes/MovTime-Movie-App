import MoviesData from "../SectionsData/MoviesData";
import classes from "../../../styles/BrowsePageStyle/SectionsStyle/MovieTv.module.css";
import SwiperUi from "../../Ui/SwiperUi/SwiperUi";
import { SwiperSlide } from "swiper/react";
import useMoviesTv from "../../../hooks/moviestv-hook";
import Loader from "../../Ui/AppStates/Loader";
import Error from "../../Ui/AppStates/Error";

//The Trending movies Api
const API_TRENDING_MOVIES =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=63963159dae94bf1e30a674eee861084";

const TrendingMovies = () => {
  //Using a custom hook to extract my logic values
  const { movies, isLoading, error } = useMoviesTv(API_TRENDING_MOVIES);

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
    content = <Error error={error} />;
  }

  //Conditional logic to render content
  if (isLoading) {
    content = <Loader />;
  }

  //rendering the content
  return (
      <section className={classes.style_movies}>
        <h4 className={classes.style_movies_header}>Upcoming Movies</h4>
        {content}
      </section>
  );
};

export default TrendingMovies;
