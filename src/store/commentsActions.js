import * as TYPES from './actionTypes';
const URL = 'https://obscure-castle-00401.herokuapp.com/comments';

export const getComments = () => {
  return async(dispatch) => {
    try {
      dispatch({
        type: TYPES.GET_COMMENTS_PENDING,
      });
      const res = await fetch(URL);
      const json = await res.json();

      dispatch({
        type: TYPES.GET_COMMENTS_FULLFILLED,
        payload: json
      });
    } finally {
      dispatch({
        type: TYPES.HIDE_LOADER,
      });
    }
  };
};

export const addComment = (formData) => {
  return async dispatch => {
    try {
      dispatch({
        type: TYPES.ADD_COMMENT_PENDING,
      });
      const res = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await res.json();
      dispatch({
        type: TYPES.ADD_COMMENT_FULLFILLED,
        payload: json,
      });

    } finally {
      dispatch({
        type: TYPES.HIDE_LOADER,
      });
    }
  };
};
