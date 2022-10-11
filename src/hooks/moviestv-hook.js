import { useEffect, useState } from "react";

const useMoviesTv = (API_LINK) => {
  //useState to handle the Movie genre, loading and error states
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    //Function to fetch the movies

    const sendRequest = async () => {
      setIsLoading(true);
      setError(null);

      //try so i can catch any errors
      try {
        //fetching the movie genre
        const response = await fetch(API_LINK);

        //checking if the response is Ok
        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        //Getting and transforming the value
        const data = await response.json();

        //Shufffle my array of movies
        function shuffleArray(arr) {
          return arr.sort(() => Math.random() - 0.5);
        }

        const dataResult = shuffleArray(data.results);

        //Setting up your movie data
        setMovies(dataResult);

        //Seting is loading state
        setIsLoading(false);
        //Seting is error state
      } catch (error) {
        setError(error.message);
      }

      //Seting is loading state
      setIsLoading(false);
    };

    sendRequest();
  }, [API_LINK]);

  //returning values to be used in components
  return {
    movies,
    isLoading,
    error,
  };
};

export default useMoviesTv;
