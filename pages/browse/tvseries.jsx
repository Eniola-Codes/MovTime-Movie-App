import SideBar from "../../Components/Bars/SideBar";
import NavBar from "../../Components/Bars/NavBar";
import HeroSectionComponent from "../../Components/BrowseComponents/SectionsData/HeroSectionData";
import SwiperUiHero from "../../Components/Ui/SwiperUi/SwiperUiHero";
import classes from "../../styles/BrowsePageStyle/HeroSectionStyle/HeroSection.module.css";
import { SwiperSlide } from "swiper/react";
import Error from "../../Components/Ui/AppStates/Error";
import TopRatedTv from "../../Components/BrowseComponents/Sections/TopRatedTv";
import PopularTv from "../../Components/BrowseComponents/Sections/PopularTv";

//The popular movies Api
const API_FEATURED_SERIES =
  "https://api.themoviedb.org/3/tv/popular?api_key=63963159dae94bf1e30a674eee861084";

const Home = (props) => {
  //The content variable
  let content;

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
          <PopularTv />
          <TopRatedTv />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  //try so i can catch any errors
  try {
    // fetching the movie genre
    const response = await fetch(API_FEATURED_SERIES);

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

    return {
      props: {
        dataResults: dataResults.map((dataResult) => ({
          backdrop_path: dataResult.backdrop_path,
          title: dataResult.original_name,
          genre_ids: dataResult.genre_ids,
          id: dataResult.id,
        })),
      },
      revalidate: 10,
    };
  } catch (error) {
    console.log('Something went wrong')
  }
};

export default Home;
