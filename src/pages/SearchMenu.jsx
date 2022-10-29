import { Outlet, useParams, useSearchParams } from 'react-router-dom'
import { SearchForm } from '../components/SearchMenu/SearchForm';
import { MoviesSearchList } from '../components/SearchMenu/MoviesSearchList';
import { searchOnWord } from '../services/fetchTrendFilms'
import { useEffect, useState } from 'react';

export const SearchMenu = () => {

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


    const isVisible = movies.length > 0 && !params.movieId;

    return (
        <>
            {params.movieId
                ? <Outlet />
                : <SearchForm handleInput={handleInput} />
            }
            {isVisible && <MoviesSearchList movies={movies} />}
        </>
    )
}