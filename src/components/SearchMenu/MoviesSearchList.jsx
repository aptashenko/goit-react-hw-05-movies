import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
export const MoviesSearchList = ({ movies }) => {

    const location = useLocation();

    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <NavLink to={`${movie.id}`} state={{from: location}}>
                        {movie.title || movie.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}

MoviesSearchList.propTypes = {
    movies: PropTypes.array,
}