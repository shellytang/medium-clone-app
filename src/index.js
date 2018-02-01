import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Router, IndexRoute, hashHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import App from './App';
import Home from './components/Home';
import Login from '/components/Login';
// import './index.css';

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory} >
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='login' component={Login} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
