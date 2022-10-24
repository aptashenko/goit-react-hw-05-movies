import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
  
export const fetchMovies = async () => {
    const response = await axios.get('3/trending/all/day?api_key=64b9d48df1f5249c2e8adb2dbe6fd5f9');
    return response.data.results;
}