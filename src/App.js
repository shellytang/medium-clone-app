import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import agent from './agent';
import { store } from './store';
import { push } from 'react-router-redux';
// import './App.css';

class App extends Component {

  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if(token) {
      agent.setToken(token);
    }
    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.redirectTo) {
      // this.context.router.replace(nextProps.redirectTo);
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }

  render() {
    return (
      <div>
        <Header 
          appName={this.props.appName} 
          currentUser={this.props.currentUser}
        />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appName: state.common.appName,
  redirectTo: state.common.redirectTo,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onRedirect: () => dispatch({ type: 'REDIRECT '}),
  onLoad: (payload, token) => dispatch({ type: 'APP_LOAD', payload, token})
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
