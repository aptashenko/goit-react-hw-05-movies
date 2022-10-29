import { Outlet, useParams } from "react-router-dom";
import css from '../components/MoviePage/moviePage.module.css';
import { findMovie } from "services/fetchTrendFilms";
import { useState, useEffect } from 'react';
import { CurrentMovie } from "../components/MoviePage/CurrentMovie";
import { AdditionalInfo } from "../components/MoviePage/AdditionalInfo";
import { useNavigate } from 'react-router-dom';


export const MoviePage = () => {

    const [currentFilm, setCurrentFilm] = useState({});
    const params = useParams();


    useEffect(() => {
        params.movieId && findMovie(params.movieId).then(setCurrentFilm);
    }, [params.movieId])
    
    const navigate = useNavigate();

    return (
        <div className={css.moviePage}>
            <button onClick={()=>navigate(-1)}>Go Back</button>
            <hr />
            {currentFilm && <CurrentMovie currentFilm={currentFilm} /> }
            <hr />
            <AdditionalInfo  />
            <hr />
            <Outlet />
        </div>
    )
}