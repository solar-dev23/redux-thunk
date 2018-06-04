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

export const fetchImage = (keyword) => {
  return (dispatch) => {
    dispatch(searchStart());
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
      .then((users) => {
          console.log(users.data.items)
          let datas = [];
          const ss = users.data.items.map((user)=>{
            //console.log(user)
            axios.get(`https://api.github.com/users/${user.login}/repos`).then((response)=>{
                datas = [...datas,...response.data];//console.log(datas)
            });
            
          }).then(()=>{
              //console.log(datas)
              dispatch(searchSuccess(datas));
            }
          
        
        //const reposes = response.data.items.map((repos) => image.images.original.url);

        //dispatch(searchSuccess(response.data));
      })
      .catch((error) => {
        dispatch(searchError(error));
      });
  };
};
