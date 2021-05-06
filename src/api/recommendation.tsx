import axios from "axios";
const { REACT_APP_WEB } = process.env;

const recommendationListFetchApi = async (movie: string) => {
  const movie_list = await axios
    .get(REACT_APP_WEB + "list_movie_recommendation/" + movie)
  return movie_list.data
}

const predictListFetchApi = async (id: string) => {
  const movie_list = await axios
    .get(REACT_APP_WEB + "movie_recommendation_id/" + id)
  return movie_list.data
}

export { recommendationListFetchApi, predictListFetchApi }