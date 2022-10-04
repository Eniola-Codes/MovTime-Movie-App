import { useEffect, useState } from "react";
import { Tooltip } from "react-bootstrap";
import classes from "../styles/MovieSectionComponentStyles.module.css";

const useMovieComponent = (API_LINK_GENRE, genre_ids, release_date) => {
  //useState to handle the Movie genre, loading and error states
  const [movieGenre, setMovieGenre] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [scaleUp, setScaleUp] = useState(false);
  const [rating, setRating] = useState(false);

  useEffect(() => {
    //Function to fetch the movies
    const fetchMoviesGenres = async () => {
      //Setting loading and error state
      setIsLoading(true);
      setError(null);
      //try so i can catch any errors
      try {
        //fetching the movie genre
        const response = await fetch(API_LINK_GENRE);

        //checking if` the response is Ok
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        //Getting and transforming the valu
        const data = await response.json();
        //Setting list of movie genre
        setMovieGenre(data.genres);
      } catch (error) {
        //Catching errors and
        //Setting loading state
        setIsLoading(false);
      }
      //Setting loading state
      setIsLoading(false);
    };

    //Calling the functons to fec
    fetchMoviesGenres();
  }, [API_LINK_GENRE]);

  const renderTooltipPlus = (props) => (
    <Tooltip id="button-plus" className={classes.tooltip} {...props}>
      Add to watchlist
    </Tooltip>
  );

  const renderTooltipRate = (props) => (
    <Tooltip id="button-rate" className={classes.tooltip} {...props}>
      Rate movie
    </Tooltip>
  );

  const renderTooltipMore = (props) => (
    <Tooltip id="button-more" className={classes.tooltip} {...props}>
      Show more
    </Tooltip>
  );

  const onScaleUpHandler = () => {
    setScaleUp(true);
  };

  const onScaleDownHandler = () => {
    setScaleUp(false);
  };

  const onOpenRatingHandler = () => {
    setRating(true);
  };

  const onCloseRatingHandler = () => {
    setRating(false);
  };

  //Mapping through the movie Genres and putting the id'swith the sp
  movieGenre.map((movie) => {
    for (let x = 0; x < movieGenre.length; x++) {
      if (movie.id === genre_ids[x]) {
        return (genre_ids[x] = { id: movie.id, name: movie.name });
      }
    }
    return "";
  });

  //Using slice to display year of the date alone
  const releaseDate = release_date.slice(0, 4);

  //returning values to be used in components
  return {
    isLoading,
    error,
    releaseDate,
    scaleUp,
    rating,
    onScaleUpHandler,
    onScaleDownHandler,
    onOpenRatingHandler,
    onCloseRatingHandler,
    renderTooltipPlus,
    renderTooltipRate,
    renderTooltipMore,
  };
};

export default useMovieComponent;
