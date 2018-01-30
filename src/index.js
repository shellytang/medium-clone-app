import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import { promiseMiddleware } from './middleware';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
// import './index.css';

const defaultState = { 
  appName: 'conduit',
  articles: null
};

const reducer = function(state = defaultState, action) {
  switch(action.type) {
    case 'HOME_PAGE_LOADED':
      return { ...state, articles: action.payload.articles};
  }
  return state;
};

const store = createStore(reducer, applyMiddleware(promiseMiddleware));

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
