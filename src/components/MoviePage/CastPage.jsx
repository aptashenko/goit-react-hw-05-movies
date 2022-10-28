import { useParams } from "react-router-dom";
import { fetchCast } from "services/fetchTrendFilms";
import { useState, useEffect } from 'react';

export const CastPage = () => {
    const [currentCast, setCurrentCast] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetchCast(params.movieId).then(setCurrentCast);
    }, [])
    
    return (
        <div className="Cast">
            <ul>
                {currentCast && currentCast.map(({ id, profile_path, name, character }) => (
                    <li key={id}>
                        <img width="100px" src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt="" />
                        <p>{name}</p>
                        <p>{character}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}