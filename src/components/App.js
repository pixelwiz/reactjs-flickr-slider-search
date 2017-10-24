import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchPhotos } from '../state/actions/searchPhotos';
import Slider from './Slider';
import SearchForm from './SearchForm';
import Error from './Error';
import '../styles/App.css';

export class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(searchPhotos(window.store));
  }

  searchPhotosSubmit = () => {
    const { dispatch } = this.props;
    dispatch(searchPhotos(window.store));
  }

  render() {
    const { fetchError } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Flickr Slider in React.js</h1>
          <SearchForm onSubmit={this.searchPhotosSubmit} />
        </header>
        {!fetchError ? <Slider /> : <Error />}
      </div>
    );
  }
}

export default connect(state => ({
  fetchError: state.fetchError,
  form: state.form,
  slider: state.slider,
}))(App);
