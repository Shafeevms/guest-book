import React from 'react';
import Comments from './components/Comments';
import AddComment from './components/AddComment';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { commentsReducer } from './store/commentsReducer';

import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  comments: commentsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
    ),
  ),
);

const App = () => {
  return (
    <Provider store={store}>
      <Comments />
      <AddComment />
    </Provider>
  );
};

export default App;
