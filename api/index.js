import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';
const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const tmdbClient = axios.create({
  baseURL: baseURL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`,
  },
  params: {
    language: 'ko-KR',
    region: 'KR',
  },
});

const getMovieList = async (category) => {
  const url = `/movie/${category}`;
  const res = await tmdbClient.get(url);
  return res.data.results;
};

const api = {
  getMovieList,
};

export default api;
