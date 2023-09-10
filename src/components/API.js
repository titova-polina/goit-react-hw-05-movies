import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '470940ab043e9e20134aadfca899a2e3';

export const fetchTrending = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);

  return response.data;
};

export const fetchDetails = async id => {
  const response = await axios.get(`movie/${id}?api_key=${API_KEY}`);

  return response.data;
};

export const fetchSearch = async search => {
  const response = await axios.get(
    `/search/movie?query=${search}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`
  );

  return response.data;
};

export const fetchCredits = async id => {
  const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);

  return response.data;
};

export const fetchReviews = async id => {
  const response = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&include_adult=false&language=en-US&page=1`
  );

  return response.data;
};
