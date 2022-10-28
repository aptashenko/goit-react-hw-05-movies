import { useParams } from "react-router-dom";
import { fetchReviews } from "services/fetchTrendFilms";
import { useState, useEffect } from 'react';

export const ReviewsPage = () => {
    const [currentReviews, setCurrentReviews] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetchReviews(params.movieId).then(setCurrentReviews);
    }, [])
    
    return (
        <div className="Reviews">
            <ul>
                { currentReviews.length > 0 ? currentReviews.map(({ id,author, content }) => (
                    <li key={id}>
                        <p>Author: {author}</p>
                        <p>{ content }</p>
                    </li>
                )) : <p>We don't have any review for this movie</p>}
            </ul>
        </div>
    )
}