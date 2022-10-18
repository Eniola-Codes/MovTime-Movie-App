import SideBar from "../Components/Bars/SideBar";
import NavBar from "../Components/Bars/NavBar";
import HeroSectionComponent from "../Components/BrowseComponents/HeroSection/HeroSectionData";
import SwiperUiHero from "../Components/Ui/SwiperUi/SwiperUiHero";
import classes from "../styles/BrowsePageStyle/HeroSectionStyle/HeroSection.module.css";
import { SwiperSlide } from "swiper/react";
import useMoviesTv from "../hooks/moviestv-hook";
import Loader from "../Components/Ui/AppStates/Loader";
import Error from "../Components/Ui/AppStates/Error";
import Wrapper from "../Components/Ui/Wrapper/Wrapper";

//The popular movies Api
const API_FEATURED_MOVIES =
  "https://api.themoviedb.org/3/movie/popular?api_key=63963159dae94bf1e30a674eee861084";

const Home = (props) => {
  //Using a custom hook to extract my logic values
  // const { movies, isLoading, error } = useMoviesTv(API_FEATURED_MOVIES);

  //The content variablke
  let content;

  //Conditional logic to render content
  // if (!isLoading & !error) {
    content = (
      <SwiperUiHero>
        {/* mapping and displaying the section components which contains the layout */}
        {props.dataResults.map((movieDetails) => (
          <SwiperSlide className={classes.swiperslide} key={movieDetails.id}>
            <HeroSectionComponent
              backdrop_path={movieDetails.backdrop_path}
              title={movieDetails.title}
              genre_ids={movieDetails.genre_ids}
              id={movieDetails.id}
              release_date={movieDetails.release_date}
            />
          </SwiperSlide>
        ))}
      </SwiperUiHero>
    );
  // }

  //Conditional logic to render content
  // if (!isLoading && error) {
  //   content = <Error error={error} />;
  // }

  //Conditional logic to render content
  // if (isLoading) {
  //   content = <Loader />;
  // }

  // export default HeroSection;

  return (
    <div className="container_content">
      <SideBar />
      <div className="container_main">
        <NavBar />
        {/* <BrowseComponents /> */}
        <Wrapper>
          <section>{content}</section>
        </Wrapper>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  //try so i can catch any errors
  // try {
  // fetching the movie genre
  const response = await fetch(API_FEATURED_MOVIES);

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

  const dataResults = shuffleArray(data.results);
  console.log(dataResults);
  // Seting is error state
  // } catch (error) {
  //   console.log("error");
  // }

  return {
    props: {
      dataResults: dataResults.map((dataResult) => ({
        backdrop_path: dataResult.backdrop_path,
        title: dataResult.title,
        genre_ids: dataResult.genre_ids,
        release_date: dataResult.release_date,
        id: dataResult.id,
      })),
    },
    revalidate: 10,
  };
};

export default Home;
