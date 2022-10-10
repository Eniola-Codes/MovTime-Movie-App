import React from "react";
import classes from "../../../styles/MovieSectionComponentStyles.module.css";
import useMovieComponent from "../../../hooks/moviegenre-hook";
import useMovieInfo from "../../../hooks/movieinfo-hook";
import { AiOutlinePlusCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { CgChevronUpO } from "react-icons/cg";
import { OverlayTrigger } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieModal from "../../MovieModal/MovieModal";

//The images Api
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const API_IMG_ORIGINAL = "https://image.tmdb.org/t/p/original/";

//The Genre Api
const API_GENRE =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=63963159dae94bf1e30a674eee861084";

const PopularMoviesComponent = ({
  poster_path,
  overview,
  backdrop_path,
  title,
  genre_ids,
  release_date,
  adult,
  vote_average,
  id,
}) => {
  //Using a custom hook to extract my logic values
  useMovieComponent(API_GENRE, genre_ids);

  const {
    releaseDate,
    scaleUp,
    rating,
    modalIsOpen,
    onCloseMovieModal,
    onOpenMovieModal,
    onScaleUpHandler,
    onScaleDownHandler,
    onOpenRatingHandler,
    onCloseRatingHandler,
    renderTooltipPlus,
    renderTooltipRate,
    renderTooltipMore,
  } = useMovieInfo(release_date);

  const genre_content = genre_ids.map((movie) => (
    <span className={classes.movie_genre} key={Math.random()}>
      • {movie.name}
    </span>
  ));

  const scaleUpClass = scaleUp ? classes.scaleup : "";

  //layout and structure the section
  return (
    <>
      {modalIsOpen && (
        <MovieModal
          src={API_IMG_ORIGINAL + backdrop_path}
          title={title}
          movie_overview={overview}
          genre={genre_content}
          release_date={releaseDate}
          vote={vote_average}
          id={id}
          onCloseModal={onCloseMovieModal}
        />
      )}
      <div
        className={`${classes.img_container} ${scaleUpClass}`}
        onMouseOver={onScaleUpHandler}
        onMouseOut={onScaleDownHandler}
      >
        <div>
          <img
            src={API_IMG + poster_path}
            className={classes.poster_image}
            alt="Popular movies"
            onClick={onOpenMovieModal}
          ></img>
        </div>
        <div className={classes.poster_text}>
          <span className={classes.title}>{title}</span>
          <span className={classes.movie_info}>
            {releaseDate} • {genre_ids[0].name}
          </span>
        </div>

        <div className={classes.poster_info}>
          <div className={classes.icons_div}>
            <div className={classes.icons_left}>
              <OverlayTrigger
                placement="top"
                delay={{ show: 100, hide: 200 }}
                overlay={renderTooltipPlus}
              >
                <span>
                  <AiOutlinePlusCircle
                    className={`${classes.icon} ${classes.first_last_icon}`}
                  />
                </span>
              </OverlayTrigger>

              <div className={classes.icon_rating}>
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 100, hide: 200 }}
                  overlay={renderTooltipRate}
                >
                  <span>
                    <AiOutlineCheckCircle
                      className={classes.icon}
                      onClick={onOpenRatingHandler}
                    />
                  </span>
                </OverlayTrigger>
                {rating && (
                  <div
                    className={classes.icon_thumb_div}
                    onClick={onCloseRatingHandler}
                  >
                    <FiThumbsUp className={classes.icon_thumb} />
                    <FiThumbsDown className={classes.icon_thumb} />
                  </div>
                )}
              </div>
            </div>

            <div className={classes.icons_right}>
              <OverlayTrigger
                placement="top"
                delay={{ show: 100, hide: 200 }}
                overlay={renderTooltipMore}
              >
                <span onClick={onOpenMovieModal}>
                  <CgChevronUpO
                    className={`${classes.icon} ${classes.first_last_icon}`}
                  />
                </span>
              </OverlayTrigger>
            </div>
          </div>

          <div className={classes.movie_tip}>
            <p className={classes.movie_text}>
              {!adult && <span className={classes.movie_age}>G</span>}
              {adult && <span className={classes.movie_age}>PG</span>}
              <span className={classes.movie_vote}>
                {vote_average.toFixed(1)} Rating
              </span>
              <span className={classes.movie_hd}>HD</span>
            </p>
            <p className={classes.genre_text}>{genre_content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularMoviesComponent;
