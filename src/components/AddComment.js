import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../store/commentsActions';

const initialState = {
  name: '',
  comment: '',
};

const AddComment = () => {
  const [state, setState] = useState({ ...initialState });

  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(addComment(state));
    setState({ ...initialState });
  };

  return (
    <div className="addcomment">
      <h2 className="addcomment__title">Добавить комментарий</h2>
      <textarea
        className="addcomment__text"
        placeholder="комментарий..."
        value={state.comment}
        onChange={e => setState({ ...state, comment: e.target.value })}
      />
      <input
        className="addcomment__name"
        placeholder="имя"
        value={state.name}
        onChange={e => setState({ ...state, name: e.target.value })}
      />
      <button
        className="addcomment__btn"
        onClick={clickHandler}
      >
        Отправить
      </button>
    </div>
  );
};

export default AddComment;
