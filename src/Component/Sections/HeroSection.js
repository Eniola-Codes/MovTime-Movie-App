import React, { useEffect, useState, useRef } from "react";
import HeroSectionComponent from "./SectionComponent/HeroSectionComponent";
import classes from "./HeroSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import spinner from "../../Assets/Icons/spinner.svg";

const API_POPULAR_MOVIES =
  "https://api.themoviedb.org/3/movie/popular?api_key=63963159dae94bf1e30a674eee861084";

const HeroSection = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchmoviesHandler = async () => {
        setIsLoading(true);
        setError(null);    
        try {
        const response = await fetch(API_POPULAR_MOVIES);

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const data = await response.json();
        setMovies(data.results);
        setIsLoading(false);
      }    
    catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }
      fetchmoviesHandler();
  }, []);

  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  let content;

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
        {movies.map((movieDetails) => (
          <SwiperSlide className={classes.swiperslide}>
            <HeroSectionComponent key={movieDetails.id} {...movieDetails} />
          </SwiperSlide>
        ))}
        {/* <div className={classes.swipernavprev} ref={swiperNavPrevRef}></div>
<div className={classes.swipernavnext} ref={swiperNavNextRef}></div>
*/}
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

  return <section>
  {content}
  </section>;
};

export default HeroSection;
