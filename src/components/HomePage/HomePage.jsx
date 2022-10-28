
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

export const HomePage = ({ trending, selectedMovie }) => {
    
    const handleMovie = (e) => {
        selectedMovie(e)
    }
    
    return (
        <div className="startPage">
            <h1>Trending Films</h1>
            <ul>
                {trending.map(movie => (
                    <li key={movie.id} onClick={()=>handleMovie(movie.id)}>
                        <NavLink to={`/movies/${movie.id}`}>
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
    selectedMovie: PropTypes.func
}