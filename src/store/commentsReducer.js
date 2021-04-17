import * as TYPE from './actionTypes';

const initialState = {
  data: [],
  isLoading: false,
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.ADD_COMMENT_PENDING:
    case TYPE.GET_COMMENTS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case TYPE.GET_COMMENTS_FULLFILLED:
      return {
        ...state,
        data: action.payload,
      };
    case TYPE.ADD_COMMENT_FULLFILLED:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case TYPE.HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
