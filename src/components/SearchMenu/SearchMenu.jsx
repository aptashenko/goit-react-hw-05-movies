import { Outlet, useParams, useSearchParams } from 'react-router-dom'
import { SearchForm } from './SearchForm';
import { MoviesSearchList } from './MoviesSearchList';
import { searchOnWord } from '../../services/fetchTrendFilms'
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

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
                : <SearchForm handleInput={handleInput} />
            }
            {movies.length > 0 && !params.movieId
                ? <MoviesSearchList movies={movies} handleMovie={handleMovie} />
                : ''
            }
        </>
    )
}

SearchMenu.propTypes = {
    selectedMovie: PropTypes.func
}