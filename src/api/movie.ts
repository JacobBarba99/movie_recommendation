import axios from "axios";
import { FetchMovie } from "../interface/movieHomeInterface";

const url_base = "https://api.themoviedb.org/3/";
const { REACT_APP_API_TMDB } = process.env;

const initialFetchApi = async () => {
  const url_popular = `${url_base}movie/popular?api_key=${REACT_APP_API_TMDB}&language=en-ES&page=1`;
  const url_nowPlaying = `${url_base}movie/now_playing?api_key=${REACT_APP_API_TMDB}&language=en-ES&page=1`;
  const url_top = `${url_base}movie/top_rated?api_key=${REACT_APP_API_TMDB}&language=en-ES&page=1`;

  const top = await axios.get<FetchMovie>(url_top);
  const nowPlaying = await axios.get<FetchMovie>(url_nowPlaying);
  const popular = await axios.get<FetchMovie>(url_popular);

  return {
    top: top.data.results,
    nowPlaying: nowPlaying.data.results,
    popular: popular.data.results,
  };
};

const searchFetchApi = async (name: string, page: number = 1) => {
  const url_search = `${url_base}search/movie?api_key=${REACT_APP_API_TMDB}&language=en-EN&query=${name}&page=${page}`;
  const search = await axios.get<FetchMovie>(url_search);
  return search.data;
};

export { initialFetchApi, searchFetchApi };
