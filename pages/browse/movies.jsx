import SideBar from "../../Components/Bars/SideBar";
import NavBar from "../../Components/Bars/NavBar";
import heroClasses from "../../styles/BrowsePageStyle/HeroSectionStyle/HeroSection.module.css";
import HeroSectionComponent from "../../Components/BrowseComponents/SectionsData/HeroSectionData";
import SwiperUiHero from "../../Components/Ui/SwiperUi/SwiperUiHero";
import { SwiperSlide } from "swiper/react";
import PopularMovies from "../../Components/BrowseComponents/Sections/PopularMovies";
import TrendingMovies from "../../Components/BrowseComponents/Sections/TrendingMovies";
import TopRatedMovies from "../../Components/BrowseComponents/Sections/TopRatedMovies";

//The popular movies Api
const API_FEATURED_MOVIES =
  "https://api.themoviedb.org/3/movie/popular?api_key=63963159dae94bf1e30a674eee861084";

const Home = (props) => {
  //The content variable
  let content;

  content = (
    <SwiperUiHero>
      {/* mapping and displaying the section components which contains the layout */}
      {props.dataResults.map((movieDetails) => (
        <SwiperSlide className={heroClasses.swiperslide} key={movieDetails.id}>
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

  return (
    <div className="container_content">
      <SideBar />
      <div className="container_main">
        <NavBar />
        <div className="content_div">
          <section>{content}</section>
          <PopularMovies />
          <TrendingMovies />
          <TopRatedMovies />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  //try so i can catch any errors
  try {
    // fetching the movie genre
    const response = await fetch(API_FEATURED_MOVIES);

    //checking if the response is Ok
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    //Getting and transforming the value
    const data = await response.json();

    const shuffleArray = (arr) => {
      return arr.sort(() => Math.random() - 0.5);
    };

    //Shufffle my array of movies
    const dataResults = shuffleArray(data.results);

    return {
      props: {
        dataResults: dataResults.map((dataResult) => ({
          backdrop_path: dataResult.backdrop_path,
          title: dataResult.title,
          genre_ids: dataResult.genre_ids,
          id: dataResult.id,
          release_date: dataResult.release_date,
        })),
      },
      revalidate: 10,
    };
  } catch (error) {
    console.log('Something went wrong')
  }
};

export default Home;
