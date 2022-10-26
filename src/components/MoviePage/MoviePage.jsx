import { NavLink, useParams } from "react-router-dom";
import css from './moviePage.module.css';
import { findMovie } from "services/fetchTrendFilms";
import { useState, useEffect } from 'react';


export const MoviePage = () => {

    const [currentFilm, setCurrentFilm] = useState({});
    const params = useParams();

    useEffect(() => {
        params.movieId && findMovie(params.movieId).then(setCurrentFilm);
    },[params.movieId])

    return (
        <div className={css.moviePage}>
            <NavLink to={'/'}>Go Back</NavLink>
            <hr />
            {currentFilm &&
                <div className={css.wrapper}>
                <img className={css.poster} src={currentFilm.poster_path && `https://image.tmdb.org/t/p/w500/${currentFilm.poster_path}`} alt="" />
                <div className={css.movieInfo}>
                    <h2>{currentFilm.name || currentFilm.title }</h2>
                    <p>User score: {currentFilm.vote_average} %</p>
                    <h3>Overview</h3>
                    <p>{currentFilm.overview }</p>
                    <h3>Genres</h3>
                    {currentFilm.genres ? 
                        <div>
                            {currentFilm.genres.map(genre => (
                            <p key={genre.id}>{ genre.name }</p>
                            ))}
                            </div>
                            : ''
                    }
                </div>
            </div>}
            <hr />
        </div>
    )
}