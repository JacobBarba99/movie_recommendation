import { initialFetchApi, listSelectionFetchApi } from "../api/movie";
import { Movie, movieHomeInterface } from "../interface/movieHomeInterface";
const key = "movie_recommendation"

interface initialInterface {
  nowPlaying: Movie[] | undefined;
  popular: Movie[] | undefined;
  top: Movie[] | undefined;
  recommendation: any;
  selectionRecommendation: string[] | null
};
const initialState: initialInterface = {
  popular: [],
  top: [],
  nowPlaying: [],
  recommendation: [],
  selectionRecommendation: []
};


type MoviesAction =
  | { type: "INITIAL_PAGE", payload: movieHomeInterface, selectionRecommendation: string[] | null }
  | { type: "RECOMMENDATION_LIST", payload: { recommendation: any, selectionRecommendation: string[] | null } }
export default function AdminReducer(state = initialState, action: MoviesAction) {
  switch (action.type) {
    case "INITIAL_PAGE":
      return {
        ...state,
        popular: action.payload.popular,
        top: action.payload.top,
        nowPlaying: action.payload.nowPlaying,
        selectionRecommendation: action.selectionRecommendation
      };
    case "RECOMMENDATION_LIST":
      return {
        ...state,
        recommendation: action.payload.recommendation,
        selectionRecommendation: action.payload.selectionRecommendation,
      };
    default:
      return state;
  }
}

export const intialPageAction = () => async (dispatch: any) => {
  const initialData = await initialFetchApi()
  const selectionRecommendationString: string | null = localStorage.getItem(key)
  let selectionRecommendation = null
  if (selectionRecommendationString) {
    selectionRecommendation = JSON.parse(selectionRecommendationString)
  }

  dispatch({
    type: "INITIAL_PAGE",
    payload: initialData,
    selectionRecommendation
  });
};


export const recommendationAction = (data: any) => async (dispatch: any) => {
  const arrayMovies = await listSelectionFetchApi(data)
  localStorage.setItem(key, JSON.stringify(data))
  dispatch({
    type: "RECOMMENDATION_LIST",
    payload: {
      selectionRecommendation: data,
      recommendation: arrayMovies
    }
  })
};


