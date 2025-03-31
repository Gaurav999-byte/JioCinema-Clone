import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Tags from "../components/Tags/Tags";
import Channels from "../components/channels/Channels";
import Carousel from "../components/carousel/Carousel";
import Featured from "../components/featured/Featured";
import Shows from "../components/shows/Shows";

export default function Home() {
  let [movies, setMovies] = useState([]);
  let [featuredMovies, setFeaturedMovies] = useState([]);
  let [dramaMovies, setDramaMovies] = useState([]);
  let [hindiMovies, setHindiMovies] = useState([]);
  let [topMovies, setTopMovies] = useState([]);
  let [realityShows, setRealityShows] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let movieResponse = await fetch("https://your-backend.onrender.com/movies");

        let moviesData = await movieResponse.json();
        setMovies(moviesData);

        // Filter for featured movies
        let featMovies = moviesData.filter((movie) => movie.featured === true);
        setFeaturedMovies(featMovies.slice(0, 4));

        // Filter for Drama movies
        let draMovies = moviesData.filter((movie) =>
          movie.genre.includes("Drama")
        );
        setDramaMovies(draMovies.slice(0, 6));

        // Filter for Hindi movies
        let hinMovies = moviesData.filter((movie) => movie.language === "Hindi");
        setHindiMovies(hinMovies.slice(0, 6));

        // Filter for Top movies
        let topRatedMovies = moviesData.filter((movie) => movie.imdb >= 8.5);
        setTopMovies(topRatedMovies.slice(0, 6));

        // Filter for Reality Shows
        let realshows = moviesData.filter((movie) => movie.realindia === "reality");
        setRealityShows(realshows.slice(0, 6));
      } catch (err) {
        console.log("Error fetching movies:", err);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Header movies={movies} />
      <Tags />
      <Carousel />
      <Channels />
      <Featured movies={featuredMovies} />
      <Shows title="Drama Movies" movies={dramaMovies} />
      <Shows title="Hindi Movies" movies={hindiMovies} />
      <Shows title="Top Movies" movies={topMovies} />
      <Shows title="Reality Shows" movies={realityShows} />
    </>
  );
}
