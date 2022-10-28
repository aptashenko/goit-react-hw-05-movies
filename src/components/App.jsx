import TopMenu from "./TopMenu/TopMenu";
import { HomePage } from "./HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import { SearchMenu } from "./SearchMenu/SearchMenu";
import { MoviePage } from "./MoviePage/MoviePage";
import { CastPage } from "./MoviePage/CastPage";
import { ReviewsPage } from './MoviePage/ReviewsPage';
import { fetchMovies, findMovie } from "services/fetchTrendFilms";
import { useState, useEffect } from "react";

export const App = () => {
  const [trending, setTranding] = useState([]);
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
      fetchMovies().then(setTranding);
  }, [])


  const selectedMovie = (data) => {
    findMovie(data).then(setMovieData);
  }

  return (
    <>
      <TopMenu />
      <Routes>
        <Route path="/" element={<HomePage trending={trending} selectedMovie={selectedMovie} />}>
        </Route>
        <Route path="/movies" element={<SearchMenu selectedMovie={selectedMovie} />}>
          <Route path=":movieId" element={<MoviePage movieData={movieData} />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}
