import css from './moviePage.module.css';
import PropTypes from 'prop-types';

export const CurrentMovie = ({currentFilm}) => (
    <div className={css.wrapper}>
        <img className={css.poster} src={currentFilm.poster_path && `https://image.tmdb.org/t/p/w500/${currentFilm.poster_path}`} alt="" />
        <div className={css.movieInfo}>
            <h2>{currentFilm.name || currentFilm.title }</h2>
            <p>User score: {currentFilm.vote_average} %</p>
            <h3>Overview</h3>
            <p>{currentFilm.overview }</p>
            <h3>Genres</h3>
            {currentFilm.genres
                ? <div>
                    {currentFilm.genres.map(genre => (
                        <p key={genre.id}>{genre.name}</p>
                    ))}
                </div>
                : ''
            }
        </div>
    </div>
)

CurrentMovie.propTypes = {
    currentFilm: PropTypes.object
}