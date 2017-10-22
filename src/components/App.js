import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchPhotos } from '../state/actions/searchPhotos';
import '../styles/App.css';

export class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(searchPhotos(window.store));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect(state => ({
  fetchError: state.fetchError,
}))(App);
