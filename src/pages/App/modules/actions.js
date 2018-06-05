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

export const fetchGit = ({keyword,searchtype}) => {
  return (dispatch) => {
    dispatch(searchStart());
    const url = (searchtype==='user') ? `https://api.github.com/users/${keyword}/repos`
    : `https://api.github.com/search/repositories?q=${keyword}`;
    console.log(url)
    axios.get(url)
      .then((response) => {
        //const reposes = response.data.items.map((repos) => image.images.original.url);
        const retdata = (searchtype==='user')? response.data : response.data.items;
        dispatch(searchSuccess(retdata));
      })
      .catch((error) => {
        dispatch(searchError(error));
      });
  };
};
