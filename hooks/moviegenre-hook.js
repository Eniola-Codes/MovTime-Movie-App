import { useEffect, useState } from "react";

const useMovieGenre = (API_LINK_GENRE, genre_ids) => {
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
        // const responseTv = await fetch(API_GENRE_TV);

        //checking if` the response is Ok
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        //Getting and transforming the valu
        const data = await response.json();
        //Setting list of movie genre
        setMovieGenre(data.genres);
      } catch (error) {
        //Catching errors and Setting loading state
        setIsLoading(false);
      }
      //Setting loading state
      setIsLoading(false);
    };

    //Calling the functons to fec
    fetchMoviesGenres();
  }, [API_LINK_GENRE]);

  movieGenre.map((movie) => {
    for (let x = 0; x < movieGenre.length; x++) {
      if (movie.id === genre_ids[x]) {
        return (genre_ids[x] = { id: movie.id, name: movie.name });
      }
    }
    return "";
  });

  return {
    isLoading,
    error,
  };
};

export default useMovieGenre;
