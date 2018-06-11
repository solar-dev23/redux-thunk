import axios from 'axios';
import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
} from './index';

export const searchStart = () => {
  return {
    type: SEARCH_REQUEST,
  };
};

export const searchSuccess = (userdata) => {
  return {
    type: SEARCH_SUCCESS,
    payload: userdata,
  };
};

export const searchError = (errors) => {
  return {
    type: SEARCH_ERROR,
    errors,
  };
};

export const fetchGit = ({keyword}) => {
  return (dispatch) => {
    dispatch(searchStart());
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
      .then((response) => {
        //const reposes = response.data.items.map((repos) => image.images.original.url);
        console.log(response.data.items)
        dispatch(searchSuccess(response.data.items));
      })
      .catch((error) => {
        dispatch(searchError(error));
      });
  };
};
