// we'll need axios
import axios from 'axios'
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH_PHOTO_START = "FETCH_PHOTO_START";
export const FETCH_PHOTO_SUCCESS = "FETCH_PHOTO_SUCCESS";
export const FETCH_PHOTO_FAILURE = "FETCH_PHOTO_FAILURE";
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const getPhoto = () => dispatch => {
  dispatch({ type: FETCH_PHOTO_START })
  axios
    .get('https://swapi.co/api/people/')
    .then(res => dispatch({ type: FETCH_PHOTO_SUCCESS, payload: res.data.results}))
    .catch( err => {
      dispatch({ type: FETCH_PHOTO_FAILURE, payload: err.message})
    })
}
