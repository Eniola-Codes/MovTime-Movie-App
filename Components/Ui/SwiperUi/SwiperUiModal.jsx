import React, {useRef} from 'react'
import classes from '../../../styles/UiStyle/SwiperUiStyle/SwiperUiModal.module.css' 
import { Swiper } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper";
// import "swiper/css/autoplay";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";

const SwiperUiModal = (props) =>
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
        breakpoints={{
          1900: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1600: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 1,
            spaceBetween: 10,
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
        {/* mapping and displaying the section components which contains the layout */}
       {props.children}
      </Swiper>
    )
}

export default SwiperUiModal;