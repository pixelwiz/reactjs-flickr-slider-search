import React, { Component } from 'react';
import { connect } from 'react-redux';
import Thumbnails from './Thumbnails';

/*
  https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
    or
  https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
    or
  https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{o-secret}_o.(jpg|gif|png)
  s small square 75x75
  q large square 150x150
  t thumbnail, 100 on longest side
  m small, 240 on longest side
  n small, 320 on longest side
  - medium, 500 on longest side
  z medium 640, 640 on longest side
  c medium 800, 800 on longest side†
  b large, 1024 on longest side*
  h large 1600, 1600 on longest side†
  k large 2048, 2048 on longest side†
  o original image, either a jpg, gif or png, depending on source format
*/
const getFlickrPhotoUrl = (photo, size = 'b') => `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;

export class Slider extends Component {
  constructor(props) {
    super(props);
    this.getThumbnailPhotos = this.getThumbnailPhotos.bind(this);
  }

  getThumbnailPhotos() {
    const { photos } = this.props;
    if (photos && photos.photo.map) {
      const photoThumbInfo = photos.photo.map(i => ({
        ...i,
        url: `${getFlickrPhotoUrl(i, 't')}`,
      }));
      return photoThumbInfo;
    }
    return <div>Loading data...</div>;
  }

  render() {
    const thumbPhotos = Array.isArray(this.getThumbnailPhotos())
      ? <Thumbnails thumbnails={this.getThumbnailPhotos()} />
      : null;
    return (
      <div>
        {thumbPhotos}
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
