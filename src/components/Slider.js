import React, { Component } from 'react';
import { connect } from 'react-redux';

const getFlickrPhotoUrl = photo => `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;

export class Slider extends Component {
  constructor(props) {
    super(props);
    this.getPhotos = this.getPhotos.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps');
    console.log(nextProps);
  }

  getPhotos() {
    const { photos } = this.props;
    console.log('Slider props', this.props);
    if (photos && photos.photo.map) {
      const displayPhotos = photos.photo.map(i => <p>{getFlickrPhotoUrl(i)}</p>);
      return displayPhotos;
    }
    return <div>Loading data...</div>;
  }

  render() {
    return (
      <div>
        { this.getPhotos() }
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    photos: state.searchPhotos.photos,
  }
);

export default connect(mapStateToProps)(Slider);
