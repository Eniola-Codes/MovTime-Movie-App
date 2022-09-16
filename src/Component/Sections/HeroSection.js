import React, { useEffect, useState, useRef } from "react";
import HeroSectionComponent from "./SectionComponent/HeroSectionComponent";
import classes from "./HeroSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import { Autoplay } from 'swiper'; 
import 'swiper/css/autoplay';
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const API_POPULAR_MOVIES =
  "https://api.themoviedb.org/3/movie/popular?api_key=63963159dae94bf1e30a674eee861084";

const HeroSection = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchmoviesHandler = async () => {
      const response = await fetch(API_POPULAR_MOVIES);

      const data = await response.json();

      // console.log(data.results);
      setMovies(data.results);
    };

    fetchmoviesHandler();
  }, []);

  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  return (
    <div className={classes.header}>
            <Swiper
        modules={[Navigation, EffectFade,Autoplay]}
        navigation={{
          prevEl: swiperNavPrevRef.current,
          nextEl: swiperNavNextRef.current,
        }}
        effect={'fade'}
        speed={800}
        loop
        autoplay={{delay : 500}}
        className={classes.myswiper}

        onInit={(swiper) => {
          swiper.params.navigation.prevEl= swiperNavPrevRef.current;
          swiper.params.navigation.prevEl= swiperNavNextRef.current;
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

    </div>
  );
};

export default HeroSection;
