import HeroSectionComponent from "./HeroSectionData";
import SwiperUiHero from "../../Ui/SwiperUi/SwiperUiHero";
import classes from "../../../styles/BrowsePageStyle/HeroSectionStyle/HeroSection.module.css";
import { SwiperSlide } from "swiper/react";
import useMoviesTv from "../../../hooks/moviestv-hook";
import Loader from "../../Ui/AppStates/Loader";
import Error from "../../Ui/AppStates/Error";

//The popular movies Api
const API_FEATURED_MOVIES =
  "https://api.themoviedb.org/3/movie/popular?api_key=63963159dae94bf1e30a674eee861084";

const HeroSection = () => {
  //Using a custom hook to extract my logic values
  const { movies, isLoading, error } = useMoviesTv(API_FEATURED_MOVIES);

  //The content variablke
  let content;

  //Conditional logic to render content
  if (!isLoading & !error) {
    content = (
      <SwiperUiHero>
        {/* mapping and displaying the section components which contains the layout */}
        {movies.map((movieDetails) => (
          <SwiperSlide className={classes.swiperslide} key={movieDetails.id}>
            <HeroSectionComponent {...movieDetails} />
          </SwiperSlide>
        ))}
      </SwiperUiHero>
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
  return <section>{content}</section>;
};

export default HeroSection;
