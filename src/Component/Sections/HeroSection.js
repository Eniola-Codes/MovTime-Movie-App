import React from "react";
import HeroSectionComponent from "./SectionComponent/HeroSectionComponent";
import classes from "../../styles/HeroSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import spinner from "../../Assets/Icons/spinner.svg";
import useMoviesTv from "../../hooks/moviestv-hook";

//The popular movies Api
const API_POPULAR_MOVIES =
  "https://api.themoviedb.org/3/movie/popular?api_key=63963159dae94bf1e30a674eee861084";

const HeroSection = () => {
  //Using a custom hook to extract my logic values
  const { movies, isLoading, error, swiperNavPrevRef, swiperNavNextRef } =
    useMoviesTv(API_POPULAR_MOVIES);

  //The content variablke
  let content;

  //Conditional logic to render content
  if (!isLoading & !error) {
    content = (
      <Swiper
        modules={[Navigation, EffectFade, Autoplay]}
        navigation={{
          prevEl: swiperNavPrevRef.current,
          nextEl: swiperNavNextRef.current,
        }}
        effect={"fade"}
        speed={800}
        loop
        autoplay={{ delay: 5000 }}
        className={classes.myswiper}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = swiperNavPrevRef.current;
          swiper.params.navigation.prevEl = swiperNavNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {/* mapping and displaying the section components which contains the layout */}
        {movies.map((movieDetails) => (
          <SwiperSlide className={classes.swiperslide}>
            <HeroSectionComponent key={movieDetails.id} {...movieDetails} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  //Conditional logic to render content
  if (!isLoading && error) {
    content = (
      <div className={classes.error_div}>
        <p className={classes.error}>{error}</p>
      </div>
    );
  }

  //Conditional logic to render content
  if (isLoading) {
    content = (
      <div className={classes.loader_div}>
        <img src={spinner} alt="loader" className={classes.loader}></img>
      </div>
    );
  }

  //rendering the content
  return <section>{content}</section>;
};

export default HeroSection;
