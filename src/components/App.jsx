import TopMenu from "./TopMenu/TopMenu";
import { HomePage } from "../pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { SearchMenu } from "../pages/SearchMenu";
import { MoviePage } from "../pages/MoviePage";
import { CastPage } from "../pages/CastPage";
import { ReviewsPage } from '../pages/ReviewsPage';
import { fetchMovies, findMovie } from "services/fetchTrendFilms";
import { useState, useEffect } from "react";

export const App = () => {
  const [trending, setTranding] = useState([]);

  useEffect(() => {
      fetchMovies().then(setTranding);
  }, [])




  return (
    <>
      <Routes>
        <Route path="/" element={<TopMenu />}>
          <Route path="/" element={<HomePage trending={trending} />} />
          <Route path="/movies" element={<SearchMenu />}>
            <Route path=":movieId" element={<MoviePage />}>
              <Route path="cast" element={<CastPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  )
}
