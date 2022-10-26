import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
  
export const fetchMovies = async () => {
    const response = await axios.get('3/trending/all/day?api_key=64b9d48df1f5249c2e8adb2dbe6fd5f9');
    return response.data.results;
}

export const findMovie = async (movie_id) => {
    const response = await axios.get(`3/movie/${movie_id}?api_key=64b9d48df1f5249c2e8adb2dbe6fd5f9&language=en-US`);
    return response.data;
}

export const searchOnWord = async (value) => {
    const response = await axios.get(`3/search/movie?api_key=64b9d48df1f5249c2e8adb2dbe6fd5f9&language=en-US&query=${value}&include_adult=true`);
    return response.data.results
}

export const fetchCast = async (value) => {
    'http://movie/%7Bmovie_id%7D/credits?api_key=%3C%3Capi_key%3E%3E&language=en-US'
    const response = await axios.get(`3/search/movie?api_key=64b9d48df1f5249c2e8adb2dbe6fd5f9&language=en-US&query=${value}&include_adult=true`);
    return response
}