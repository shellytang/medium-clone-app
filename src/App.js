import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Home from './components/Home';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header appName={this.props.appName} />
        <Home />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  appName: state.appName
});

export default connect(mapStateToProps, () => ({}) )(App);
