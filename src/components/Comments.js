import React, { useEffect } from 'react';
import { getComments } from '../store/commentsActions';
import { useSelector, useDispatch } from 'react-redux';
import Loader from './Loader';

const Comments = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector(store => store.comments);

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  return (
    <>
      {
        isLoading
          ? <Loader />
          : null
        }
        {
          data.map(comment => (
          <article className="comment" key={comment.id}>
            <h3 className="comment__name">{comment.name}:</h3>
            <p className="comment__text">{comment.comment}</p>
          </article>
        ))
        }
    </>
  );
};

export default Comments;
