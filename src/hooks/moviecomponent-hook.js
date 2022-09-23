import { useEffect, useState } from "react";

const useMovieComponent = (API_LINK_GENRE, genre_ids, release_date) => {
  //useState to handle the Movie genre, loading and error states
  const [movieGenre, setMovieGenre] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

        //checking if the response is Ok
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

  //Mapping through the movie Genres and putting the id'swith the sp
  movieGenre.map((movie) => {
    for (let x = 0; x < movieGenre.length; x++) {
      if (movie.id === genre_ids[x]) {
        return (genre_ids[x] = { key: movie.id, name: movie.name });
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
  };
};

export default useMovieComponent;
