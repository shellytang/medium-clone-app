import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header appName={this.props.appName} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appName: state.appName
});

export default connect(mapStateToProps, () => ({}) )(App);
