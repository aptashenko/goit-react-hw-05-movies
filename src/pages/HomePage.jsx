
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";

export const HomePage = ({ trending }) => {

    const location = useLocation();

    return (
        <div className="startPage">
            <h1>Trending Films</h1>
            <ul>
                {trending.map(movie => (
                    <li key={movie.id}>
                        <NavLink to={`/movies/${movie.id}`} state={{from: location}}>
                            {movie.title || movie.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

HomePage.propTypes = {
    trending: PropTypes.array,
}