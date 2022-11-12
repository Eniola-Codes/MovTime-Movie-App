import React, {useRef} from 'react';
import classes from '../../../styles/UiStyle/SwiperUiStyle/SwiperUi.module.css';
import { Swiper } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper";
// import "swiper/css/autoplay";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";

const SwiperUi = (props) =>
{
    const swiperNavPrevRef = useRef(null);
    const swiperNavNextRef = useRef(null);
  
    return(
        <Swiper      
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: swiperNavPrevRef.current,
          nextEl: swiperNavNextRef.current,
        }}
        speed={800}
        slidesPerView={4}
        spaceBetween={20}
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
        autoplay={{
          disableOnInteraction: false,
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
        className={classes.myswiper}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = swiperNavPrevRef.current;
          swiper.params.navigation.prevEl = swiperNavNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {props.children}
</Swiper>
    )
}

export default SwiperUi;