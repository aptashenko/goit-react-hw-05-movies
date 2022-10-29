import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

export const MoviesSearchList = ({movies}) => (
    <ul>
        {movies.map(movie => (
            <li key={movie.id}>
                <NavLink to={`${movie.id}`}>
                    {movie.title || movie.name}
                </NavLink>
            </li>
        ))}
    </ul>
)

MoviesSearchList.propTypes = {
    movies: PropTypes.array,
}