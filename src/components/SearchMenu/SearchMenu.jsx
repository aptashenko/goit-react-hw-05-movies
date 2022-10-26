import { NavLink, Outlet, useParams, useSearchParams } from 'react-router-dom'
import css from './search.module.css'
import { searchOnWord } from '../../services/fetchTrendFilms'
import { useEffect, useState } from 'react';

export const SearchMenu = ({selectedMovie}) => {

    const [query, setQuery] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const searchQuery = query.get('query') ?? '';
    const params = useParams()


    const handleInput = (e) => {
        e.preventDefault();
        const val = e.target.elements.search.value;
        setQuery(val !== '' ? { query: val } : {});
        e.target.reset();
    }

    useEffect(() => {
        searchQuery !== '' && searchOnWord(searchQuery).then(setMovies);
    },[searchQuery])

    const handleMovie = (e) => {
        selectedMovie(e)
    }

    return (
        <>
            {params.movieId
                ? <Outlet />
                : <form className={css.searchWrapper} onSubmit={handleInput}>
                <label className={css.label}>
                    <input className={css.input} type="text" name="search" placeholder="Пошук..." />
                </label>
                <label className={css.label}>
                    <input type="submit" value="Search" />
                </label>
                </form>
            }
            {movies.length > 0 && !params.movieId ?
                <ul>
                    {movies.map(movie => (
                        <li key={movie.id} onClick={()=>handleMovie(movie.id)}>
                            <NavLink to={`${movie.id}`}>
                                {movie.title || movie.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                : ''
            }
        </>
    )
}