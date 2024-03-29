import axios from "axios";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { AiFillPlayCircle, AiOutlineClose } from "react-icons/ai";
import NoImg from "./noimage.jpeg";
import "../styles/videos.css";
import { Container } from "./Navbar";
import TrailerMovies from "../trailers/TrailerMovies";
function Movies() {
  const { inputValue } = useContext(Container);
  const input = inputValue;
  const [moviesData, setMoviesData] = useState([]);
  const [trailer, setTrailer] = useState(true);
  const [movieTitle, setMovieTitle] = useState("");
  const Shown = input ? "search" : "discover";
  const Api = `https://api.themoviedb.org/3/${Shown}/movie`;
  const Images = "https://image.tmdb.org/t/p/w500";
  const MovieCall = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: "58fc722dbaa85d456152a5420975cf12",
        query: input,
      },
    });
    const results = data.data.results;
    setMoviesData(results);
  };
  useEffect(() => {
    setTimeout(() => {
      MovieCall();
    }, 100);
  }, [input]);
  const MoviesTitle = (movie) => {
    setMovieTitle(movie.title);
    setTrailer(!trailer);
  };

  return (
    <Fragment>
      <div className="movies-container">
        {moviesData.map((movie) => {
          return (
            <Fragment>
              <div id={trailer ? "container" : "NoContainer"}>
                <AiFillPlayCircle
                  color="white"
                  fontSize={40}
                  id={trailer ? "playIcon" : "hide "}
                  onClick={() => MoviesTitle(movie)}
                />
                <img
                  src={
                    movie.poster_path ? `${Images}${movie.poster_path}` : NoImg
                  }
                  alt=""
                  onClick={() => MoviesTitle(movie)}
                />
                <h3 id={movie.title.length > 28 ? "smaller-Text" : ""}>
                  {" "}
                  {movie.title} {}
                </h3>
              </div>
            </Fragment>
          );
        })}
        {trailer ? console.log : <TrailerMovies moviesTitle={movieTitle} />}
        <AiOutlineClose
          className="DarkTheme"
          fontSize={55}
          color="#fff"
          cursor={"pointer"}
          onClick={() => setTrailer(false)}
        />
      </div>
    </Fragment>
  );
}

export default Movies;
