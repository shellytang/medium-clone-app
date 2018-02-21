import { applyMiddleware, createStore, combineReducers } from 'redux';
import { promiseMiddleware } from './middleware';
import createHistory from 'history/createBrowserHistory';
import auth from './reducers/auth';
import common from './reducers/common';
import home from './reducers/home';
import settings from './reducers/settings';
import article from './reducers/article';

export const history = createHistory();

const reducer = combineReducers({
  auth,
  common,
  home,
  settings,
  article
});

const middleware = applyMiddleware(promiseMiddleware);
export const store = createStore(reducer, middleware);
