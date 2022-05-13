import "./styles.css";
import Movie from "./components/Movie";
import { useEffect, useState } from "react";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

export default function App() {
  const [movies, setMovies] = useState([]);

  const fetchTheData = async () => {
    const movieResp = await fetch(FEATURED_API);
    const moviesR = await movieResp.json();
    setMovies(moviesR.results);
  };

  useEffect(() => {
    fetchTheData();
    console.log(movies);
  }, []);
  return (
    <>
      <header>
        <input className="search" type="search" placeholder="search..." />{" "}
      </header>
      <div className="App">
        <div className="movie-container">
          {movies.length > 0 &&
            movies.map((movie) => (
              <Movie data={movie} key={movie.id} {...movie} />
            ))}
        </div>
      </div>
    </>
  );
}
