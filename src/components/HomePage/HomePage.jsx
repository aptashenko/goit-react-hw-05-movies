import { useState, useEffect } from "react";
import { fetchMovies } from "services/fetchTrendFilms";


export const HomePage = () => {
const [trending, setTranding] = useState([]);

  useEffect(() => {
      fetchMovies().then(setTranding);
  }, [])
    
    return (
        <>
            <h1>Trending Films</h1>
            <ul>
                {trending.map(movie => (
                    <li key={movie.id}>
                        <a href="#">
                            {movie.title || movie.name}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}