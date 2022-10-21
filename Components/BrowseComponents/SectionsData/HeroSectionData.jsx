import Image from "next/image";
import classes from "../../../styles/BrowsePageStyle/HeroSectionStyle/HeroSectionData.module.css";
import playImage from "../../../public/Assets/Icons/bold_video_circle.svg";
import Loader from "../../Ui/AppStates/Loader";
import Error from "../../Ui/AppStates/Error";
import useMovieComponent from "../../../hooks/moviegenre-hook";

//The images Api
const API_IMG = "https://image.tmdb.org/t/p/original/";

//The Genre Api
const API_GENRE =
  "https://api.themoviedb.org/3/genre/movie/list?api_key=63963159dae94bf1e30a674eee861084";

  const API_GENRE_TV =
  "https://api.themoviedb.org/3/genre/tv/list?api_key=63963159dae94bf1e30a674eee861084";

const HeroSectionComponent = ({
  backdrop_path,
  title,
  genre_ids,
  release_date,
}) => {
  //Using a custom hook to extract my logic values
  const { isLoading, error } = useMovieComponent(
    API_GENRE,
    genre_ids,
    release_date
  );

  //The genre content variablke
  let genre_content;

  //Conditional logic to render content
  if (!isLoading && !error) {

    genre_content = genre_ids.map((movie) => 
      movie.name && <span className={classes.genre_items} key={Math.random()}>
        {movie.name}
      </span>
    );
    
  }

  //Conditional logic to render content
  if (!isLoading && error) {
    genre_content = <Error />;
  }

  //Conditional logic to render content
  if (isLoading) {
    genre_content = <Loader className={classes.loader} />;
  }

  //layout and structure the section
  return (
    <>
      <div>
        <img
          src={API_IMG + backdrop_path}
          className={classes.backdrop_image}
          alt="Popular movies"
        ></img>
      </div>
      <div className={classes.backdrop_text}>
        <p className={classes.title}>{title}</p>
        {genre_content}
        <div className={classes.action}>
          <button type="button">
            <span>Watch</span> <Image src={playImage} alt="play"></Image>
          </button>
        </div>
      </div>
      <div className={classes.overlay}></div>
    </>
  );
};

export default HeroSectionComponent;
