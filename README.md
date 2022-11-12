# MOVTIME movie application

A Movie application where you can go to view infomration and images of the most trending, popular, top rated , similar movies and Tv series all up to date.

**End Result**

Click here : https://movtime-movies-app.vercel.app/

**Figma design File**

Click here: https://www.figma.com/file/4IbpmTU6jtpRKdpbFmt4i8/Web-Design-Movie-Dashboard-(Community)-(Copy)?node-id=1%3A2

# Description

**Details**

MOVTIME movie application is an app where you will get information and images on the most trending, popular, top rated, simiar movies and Tv series all up to date. The application content is powered bt TMDB API.

The application let's you determine the movies you will love to see on your screen, which you can select from the navbar

![navbar](https://github.com/Eniola-Codes/MovTime-Movie-App/blob/main/public/Assets/Images/nav.png?raw=true)

You can easily select between seeing all the movies and series, only movies or only Tv series. 

After selecting what you will love to view, you get to see the full screen width backdrop image, name and genre of most popular movie/tv shows at the time.

![backdrop image](https://github.com/Eniola-Codes/MovTime-Movie-App/blob/main/public/Assets/Images/backdrop.png?raw=true)

Then, you see the the movie/Tv series divided into different sections which are Popular, trending and top rated having the movies in them seperated using a slider. On each movie/Tv series slide, You can view the name, release year and the top genre. On mouse hover of the movie slide, you get to see the add to watchlist, rate move/Tv series and show more buttons respectively, you then see the age rating of the movie, the resolution type, and all the movie genre. 

![slider image](https://github.com/Eniola-Codes/MovTime-Movie-App/blob/main/public/Assets/Images/slider.png?raw=true) 

When you click on a movie slide or the show more button, you get to see a Modal that contains more information about the movie, which are the full width backdrop image, movie name, release year, overview, and similar movies

![Modal image](https://github.com/Eniola-Codes/MovTime-Movie-App/blob/main/public/Assets/Images/modal.png?raw=true)

You can Sign up and log in into the application but with your correct username, email and a 6 digit or above password

![Sign up](https://github.com/Eniola-Codes/MovTime-Movie-App/blob/main/public/Assets/Images/signup.png?raw=true) ![Sign in](https://github.com/Eniola-Codes/MovTime-Movie-App/blob/main/public/Assets/Images/signin.png?raw=true)

**Technologies**

Technologies i used to build this are  Next.js, Css, react-bootstrap, Swiper.js, Firebase, TMDB(The movie database) API

I used Next.js framework to bootstrap this project because of the limitless functionalities and flexibilities it provides me, examples of the these are : 

- server side rendering and static site generation, in such project that fetches lots of content from an APi at once, server side rendering will greatly improve performance
- Redux toolkit hook which i used this to manage the state of some components in my application which includes the functioning navbar display and collapse, using Sign up/login information
- Props to pass some data from component to component with ease.
- Access to 3rd party libraries that make the app much experience better like Swiper.js for the sliders and react-bootstrap for the app layout and modals.
- Css modules which prevent clashing of classnames around components therefore avoiding unwanted results

**Challenges**

The challenge i faced while building was making the application very performant and creating a good functioning loading state before the content displays.

**Features to be added**

I am yet to arrive at a version 1.0 but i hope to add this features in order to arrive at a steady working version

- Having a watchlist page where logged in users can store movies they wish to watch in future
- Creating a friends page (content undecided)
- Creating a parties page (content undecided)
- Create setting page where user can change username, password, and make some other changes.
- Making the code more cleaner and readable.

# Installation and Running

git clone or pull the project using your terminal, open the project folder on your local laptop in a code editor and run "npm start" in your editors terminal.


