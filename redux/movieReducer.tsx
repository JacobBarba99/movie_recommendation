interface initialInterface {}

const initialState: initialInterface = {};

type MoviesAction = { type: "INITIAL_PAGE"; payload: null };

export default function AdminReducer(
  state = initialState,
  action: MoviesAction
) {
  switch (action.type) {
    case "INITIAL_PAGE":
      return {
        ...state,
      };
    default:
      return state;
  }
}

export const intialPageAction = () => async (dispatch: any) => {
  dispatch({
    type: "INITIAL_PAGE",
    payload: null,
  });
};
