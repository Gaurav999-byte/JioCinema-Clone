import Header from "../components/header/Header"
import Tags from "../components/Tags/Tags"
import Channels from "../components/channels/Channels"
import Carousel from "../components/carousel/Carousel"
import Featured from "../components/featured/Featured"
import Shows from "../components/shows/Shows"
import { useEffect, useState } from "react"


export default function Home()
{
    let [movies,setMovies] = useState([]);
    let [featuredMovies,setFeaturedMovies] = useState([]);
    let [dramaMovies,setDramaMovies] = useState([]);
    let [hindiMovies,setHindiMovies] = useState([]);
    let [topMovies,setTopMovies] = useState([]);
    let [realityShows,setRealityShows] = useState([]);

    useEffect(async()=>{

        try{

       let movieResponse =await fetch("http://localhost:3000/movies")
       let moviesData = await movieResponse.json()

       setMovies(moviesData)

       //filter for featured movies
       let featMovies = moviesData.filter((movie)=>{return movie.featured==true})
       console.log(featMovies)
       setFeaturedMovies(featMovies.slice(0,4))

       //filter for Drama movies
       let draMovies = moviesData.filter((movie)=>{return movie.genre.includes("Drama")})
       console.log(draMovies)
       setDramaMovies(draMovies.slice(0,6))
      
       //filter for Hindi movies
       let hinMovies = moviesData.filter((movie)=>{return movie.language=="Hindi"})
       console.log(hinMovies)
       setHindiMovies(hinMovies.slice(0,6))

       //filter for Top movies
       let topRatedMovies = moviesData.filter((movie)=>{return movie.imdb>=8.5})
       setTopMovies(topRatedMovies.slice(0,6))

       let realshows = moviesData.filter((movie)=>{return movie.realindia==="reality"})
       setRealityShows(realshows.slice(0,6))

        }
        catch(err)
        {
            console.Console.log(err)
        }

    },[])

    return(
        <>
            <Header movies ={movies}/>
            <Tags/>
            <Carousel/>
            <Channels/>
            <Featured movies={featuredMovies}/>
            <Shows title ="Drama Movies" movies={dramaMovies}/>
            <Shows title ="Hindi Movies" movies={hindiMovies}/>
            <Shows title ="Top Movies" movies={topMovies}/>
            <Shows title ="Reality Shows" movies={realityShows}/>
        </>
    )
}