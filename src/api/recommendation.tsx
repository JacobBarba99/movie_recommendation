import axios from "axios";

const API_URL = "http://127.0.0.1:8000/";

const recommendationListFetchApi = async (movie: string) => {
  const movie_list = await axios
    .get(API_URL + "list_movie_recommendation/" + movie)
  return movie_list.data
}

const predictListFetchApi = async (id: string) => {
  const movie_list = await axios
    .get(API_URL + "movie_recommendation_id/" + id)
  return movie_list.data
}

export { recommendationListFetchApi, predictListFetchApi }