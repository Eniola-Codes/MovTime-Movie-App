import React from "react";
import PopularTvComponent from "./SectionComponent/PopularTvComponent";
import classes from "../../styles/MovieTvSliderStyles.module.css";
import spinner from "../../Assets/Icons/spinner.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import useMoviesTv from "../../hooks/moviestv-hook";

//The popular Tv Api
const API_POPULAR_TV =
  "https://api.themoviedb.org/3/tv/popular?api_key=63963159dae94bf1e30a674eee861084";

const PopularTv = () => {
  //Using a custom hook to extract my logic values
  const { movies, isLoading, error, swiperNavPrevRef, swiperNavNextRef } =
    useMoviesTv(API_POPULAR_TV);

  //The content variablke
  let content;

  //Conditional logic to render content
  if (!isLoading & !error) {
    content = (
      //Using swiper js library
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: swiperNavPrevRef.current,
          nextEl: swiperNavNextRef.current,
        }}
        speed={800}
        slidesPerView={4}
        breakpoints={{
          1900: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
          1600: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          0: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
        }}
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
            <PopularTvComponent key={movieDetails.id} {...movieDetails} />
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
  return (
    <>
      <section className={classes.style_movies}>
        <h4 className={classes.style_movies_header}>Popular Series</h4>
        {content}
      </section>
    </>
  );
};

export default PopularTv;
