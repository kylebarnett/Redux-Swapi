import { FETCH_PHOTO_START, FETCH_PHOTO_SUCCESS, FETCH_PHOTO_FAILURE } from "../actions";
const initialState = {
  characters: [],
  isLoading: false,
  error: ""
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_PHOTO_START:
      return {
        ...state,
        error: '',
        isLoading: true
      }
    case FETCH_PHOTO_SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        characters: action.payload
      };
    case FETCH_PHOTO_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
