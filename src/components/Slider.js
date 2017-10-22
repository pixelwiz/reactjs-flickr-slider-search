import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchPhotos } from '../state/actions/searchPhotos';

const getFlickrPhotoUrl = photo => `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;

export class Slider extends Component {
  constructor(props) {
    super(props);
    this.getPhotos = this.getPhotos.bind(this);
  }

  /* componentDidMount() {
    const { dispatch } = this.props;
    dispatch(searchPhotos(window.store));
  } */

  componentWillReceiveProps(nextProps) {
    console.log('nextProps');
    console.log(nextProps);
  }

  getPhotos() {
    const { photos } = this.props;
    /* if (photos.photo && photos.photo.map) {
      const displayPhotos = photos.photo.map(i => <p>{getFlickrPhotoUrl(i)}</p>);
      return displayPhotos;
    } */
    return <div>Loading data...</div>;
  }

  render() {
    console.log('render');
    console.log(this.props);
    return (
      <div>
        { this.getPhotos() }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'here in the slider');
  return {
    photos: state.searchPhotos,
  };
};

/* const mapDispatchToProps = (dispatch) => {
  return {
    searchPhotos: () => dispatch(searchPhotos)
  }
} */

export default connect(mapStateToProps)(Slider);
