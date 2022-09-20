import React, { useEffect, useState, useRef } from "react";
import PopularMoviesComponent from "./SectionComponent/PopularMoviesComponent";
import classes from "./PopularMovies.module.css";
import spinner from "../../Assets/Icons/spinner.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const API_LATEST_MOVIES =
  "https://api.themoviedb.org/3/movie/popular?api_key=63963159dae94bf1e30a674eee861084";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchmoviesHandler = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(API_LATEST_MOVIES);

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const data = await response.json();

        function shuffleArray(arr)
        {
         return arr.sort(() => Math.random() - 0.5);
        }

        const dataResult = shuffleArray(data.results);

        setMovies(dataResult);
        
        setIsLoading(false);

      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };
    fetchmoviesHandler();
  }, []);

  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  let content;

  if (!isLoading & !error) {
    content = (
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
          }
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
        {movies.map((movieDetails) => (
          <SwiperSlide className={classes.swiperslide}>
            <PopularMoviesComponent key={movieDetails.id} {...movieDetails} />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  if (!isLoading && error) {
    content = (
      <div className={classes.error_div}>
        <p className={classes.error}>{error}</p>
      </div>
    );
  }

  if (isLoading) {
    content = (
      <div className={classes.loader_div}>
        <img src={spinner} alt="loader" className={classes.loader}></img>
      </div>
    );
  }

  return (
    <>
      <section className={classes.Popular_movies}>
        <h4 className={classes.Popular_movies_header}>Popular Movies</h4>
        {content}
      </section>
    </>
  );
};

export default PopularMovies;
