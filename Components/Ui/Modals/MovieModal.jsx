import Modal from "react-bootstrap/Modal";
import classes from "../../../styles/UiStyle/ModalStyle/MovieModal.module.css";
import SwiperUiModal from "../SwiperUi/SwiperUiModal";
import useMoviesTv from "../../../hooks/moviestv-hook";
import { MdCancel } from "react-icons/md";
import { SwiperSlide } from "swiper/react";
import Loader from "../AppStates/Loader";
import Error from "../AppStates/Error";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieModal = (props) => {
  const API_SIMILAR = `https://api.themoviedb.org/3/movie/${props.id}/similar?api_key=63963159dae94bf1e30a674eee861084`;

  const { movies, isLoading, error } = useMoviesTv(API_SIMILAR);

  let content;

  //Conditional logic to render content
  if (!isLoading & !error) {
    content = (
      <SwiperUiModal>
        {movies.map((movie) => (
          <SwiperSlide className={classes.swiperslide} key={movie.id}>
            <img
              className={classes.similar_movies_img}
              src={API_IMG + movie.poster_path}
              alt="similar movies"
            ></img>
          </SwiperSlide>
        ))}
      </SwiperUiModal>
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

  return (
    <Modal
      size="lg"
      show={props.openModal}
      onHide={props.onCloseModal}
      onClosemodal={props.onCloseModal}
    >
      <div className={classes.modal}>
        <div className={classes.close_btn_div}>
          <MdCancel
            className={classes.close_btn}
            onClick={props.onCloseModal}
          />
        </div>
        <div>
          <img
            src={props.src}
            className={classes.modal_image}
            alt="movie"
          ></img>
        </div>
        <div className={classes.movie_details}>
          <div className={classes.title_release}>
            <p className={classes.movie_title}>{props.title}</p>
            <div>
              <p>Released : {props.release_date}</p>
              {/* <p>Rating : {props.vote.toFixed(1)}</p> */}
            </div>
          </div>
          <p>{props.genre}</p>
          <p>{props.movie_overview}</p>

          <p className={classes.similar_text}>People also watch</p>
          <div className={classes.similar_movies}>{content}</div>
        </div>
      </div>
    </Modal>
  );
};

export default MovieModal;
