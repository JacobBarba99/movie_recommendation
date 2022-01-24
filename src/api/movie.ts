import axios from "axios";
import {
  FetchAllMovie,
  FetchMovie,
  Movie,
} from "../interface/movieHomeInterface";
import {
  predictListFetchApi,
  recommendationListFetchApi,
} from "./recommendation";

const url_base = "https://api.themoviedb.org/3/";
const { NEXT_PUBLIC_API_TMDB } = process.env;
const movies = [
  "Passengers",
  "Trolls",
  "Moonlight",
  "Underworld: Blood Wars",
  "Star Trek Beyond",
  "Search Party",
  "Bad Moms",
  "The Master",
  "Perfume: The Story of a Murderer",
  "G.I. Joe: Retaliation",
];

const initialFetchApi = async () => {
  const url_popular = `${url_base}movie/popular?api_key=${NEXT_PUBLIC_API_TMDB}&language=en-ES&page=1`;
  const url_nowPlaying = `${url_base}movie/now_playing?api_key=${NEXT_PUBLIC_API_TMDB}&language=en-ES&page=1`;
  const url_top = `${url_base}movie/top_rated?api_key=${NEXT_PUBLIC_API_TMDB}&language=en-ES&page=1`;

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
  const url_search = `${url_base}search/movie?api_key=${NEXT_PUBLIC_API_TMDB}&language=en-EN&query=${name}&page=${page}`;
  const search = await axios.get<FetchMovie>(url_search);
  return search.data;
};
const searchMovieFetchApi = async (id: string) => {
  const url_search = `${url_base}movie/${id}?api_key=${NEXT_PUBLIC_API_TMDB}&language=en-EN`;
  const search = await axios.get<FetchAllMovie>(url_search);

  const url_video = `${url_base}movie/${id}/videos?api_key=${NEXT_PUBLIC_API_TMDB}&language=en-EN`;
  const video = await axios.get(url_video);

  const url_providers = `${url_base}movie/${id}//watch/providers?api_key=${NEXT_PUBLIC_API_TMDB}&language=en-EN`;
  const providers = await axios.get(url_providers);

  search.data["providers"] = providers.data.results.US;
  search.data["video"] = video.data.results[0];

  const recommendation = await predictListFetchApi(id);
  return { data: search.data, recommendation };
};

const recommendationFetchApi = async (array: string[] = movies) => {
  const movieRecommendation: Movie[] = [];
  for (let i = 0; i < array.length; i++) {
    const data = await searchFetchApi(array[i]);
    movieRecommendation.push(data.results[0]);
  }
  return movieRecommendation;
};
const listSelectionFetchApi = async (selectionRate: string[]) => {
  const movie = [];
  for (let i = 0; i < selectionRate.length; i++) {
    const movie_recommend = await recommendationListFetchApi(selectionRate[i]);
    const list_recommend = await recommendationFetchApi(movie_recommend);
    movie.push(list_recommend);
  }

  return movie;
};

export {
  initialFetchApi,
  searchFetchApi,
  searchMovieFetchApi,
  recommendationFetchApi,
  listSelectionFetchApi,
};
