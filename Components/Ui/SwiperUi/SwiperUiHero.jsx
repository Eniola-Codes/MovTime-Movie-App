import React, {useRef} from 'react'
import classes from '../../../styles/UiStyle/SwiperUiStyle/SwiperUiHero.module.css'
import { Swiper } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade, Autoplay } from "swiper";
// import "swiper/css/autoplay";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";


const SwiperUiHero = (props) =>
{
    const swiperNavPrevRef = useRef(null);
    const swiperNavNextRef = useRef(null);
  
    return(
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
       {props.children}
      </Swiper>

    )
}

export default SwiperUiHero;