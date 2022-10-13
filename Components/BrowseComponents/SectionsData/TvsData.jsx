import classes from "../../../styles/BrowsePageStyle/SectionsStyle/MoviesTvData.module.css";
import useMovieGenre from "../../../hooks/moviegenre-hook";
import useMovieInfo from "../../../hooks/movieinfo-hook";
import MovieModal from "../../Ui/Modals/MovieModal";
import MoviesDataPopUp from "./MoviesDataPopUp";

//The images Api
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const API_IMG_ORIGINAL = "https://image.tmdb.org/t/p/original/";

//The Genre Api
const API_GENRE =
  "https://api.themoviedb.org/3/genre/tv/list?api_key=63963159dae94bf1e30a674eee861084";

const PopularTvComponent = ({
  backdrop_path,
  poster_path,
  id,
  overview,
  original_name,
  genre_ids,
  vote_average,
  first_air_date,
  adult,
}) => {
  //Using a custom hook to extract my logic values
  useMovieGenre(API_GENRE, genre_ids);

  const {
    releaseDate,
    scaleUp,
    modalIsOpen,
    onCloseMovieModal,
    onOpenMovieModal,
    onScaleUpHandler,
    onScaleDownHandler,
  } = useMovieInfo(first_air_date);

  const genre_content = genre_ids.map((movie) => (
    <span className={classes.movie_genre} key={Math.random()}>
      • {movie.name}&nbsp;
    </span>
  ));

  const scaleUpClass = scaleUp ? classes.scaleup : "";

  //layout and structure the section
  return (
    <>
      <MovieModal
        openModal={modalIsOpen}
        src={API_IMG_ORIGINAL + backdrop_path}
        title={original_name}
        movie_overview={overview}
        genre={genre_content}
        release_date={releaseDate}
        vote={vote_average}
        id={id}
        onCloseModal={onCloseMovieModal}
      />

      <div
        className={`${classes.img_container} ${scaleUpClass}`}
        onMouseOver={onScaleUpHandler}
        onMouseOut={onScaleDownHandler}
      >
        <div>
          <img
            src={API_IMG + poster_path}
            className={classes.poster_image}
            alt="Trending movies"
            onClick={onOpenMovieModal}
          ></img>
        </div>
        <div className={classes.poster_text}>
          <span className={classes.title}>{original_name}</span>
          <span className={classes.movie_info}>
            {releaseDate} • {vote_average} Vote
          </span>
        </div>

        <MoviesDataPopUp
          className={classes.poster_info}
          onOpenMovieModal={onOpenMovieModal}
          release_date={releaseDate}
          adult={adult}
          vote_average={vote_average}
          genre_content={genre_content}
        />
      </div>
    </>
  );
};

export default PopularTvComponent;
