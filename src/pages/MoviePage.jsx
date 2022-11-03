import { Link, Outlet, useParams } from "react-router-dom";
import css from '../components/MoviePage/moviePage.module.css';
import { findMovie } from "services/fetchTrendFilms";
import { useState, useEffect } from 'react';
import { CurrentMovie } from "../components/MoviePage/CurrentMovie";
import { AdditionalInfo } from "../components/MoviePage/AdditionalInfo";
import { useLocation } from "react-router-dom";

export const MoviePage = () => {

    const [currentFilm, setCurrentFilm] = useState({});
    const params = useParams();


    useEffect(() => {
        params.movieId && findMovie(params.movieId).then(setCurrentFilm);
    }, [params.movieId])

    const location = useLocation();
    
    const backButton = location.state?.from ?? '/'

    return (
        <div className={css.moviePage}>
            <Link to={backButton}>Go Back</Link>
            <hr />
            {currentFilm && <CurrentMovie currentFilm={currentFilm} /> }
            <hr />
            <AdditionalInfo  />
            <hr />
            <Outlet />
        </div>
    )
}