import React, { Component } from 'react';
import { connect } from 'react-redux';
import Thumbnails from './Thumbnails';
import { setMainImageIndex, setNextPage, setPriorPage, setDirection } from '../state/actions/slider';
import { searchPhotos } from '../state/actions/searchPhotos';

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
const arrowStyle = {
  fontSize: '3em',
};

export class Slider extends Component {
  constructor(props) {
    super(props);
    this.getThumbnailPhotos = this.getThumbnailPhotos.bind(this);
    this.getMainPhoto = this.getMainPhoto.bind(this);
  }

  onThumbnailClick = index => this.props.dispatch(setMainImageIndex(index));

  getThumbnailPhotos() {
    const { photos } = this.props;
    if (photos && photos.photo.map) {
      const photoThumbInfo = photos.photo.map(i => ({
        ...i,
        url: `${getFlickrPhotoUrl(i, 't')}`,
      }));
      return photoThumbInfo;
    }
    return null;
  }

  getMainPhoto() {
    const { photos, slider } = this.props;
    if (photos && photos.photo) {
      // ToDo: which one needs to come from state
      // which thumbnail is selected, for now hardcoding to 0
      const mainPhoto = {
        ...photos.photo[slider.mainImageIndex],
        url: `${getFlickrPhotoUrl(photos.photo[slider.mainImageIndex], 'z')}`,
      };
      return <img key={mainPhoto.id} id="mainPhoto" src={mainPhoto.url} alt={mainPhoto.title} />;
    }
    return null;
  }

  showNextPhoto() {
    const { slider, dispatch } = this.props;
    const nextPhotoIndex = slider.mainImageIndex + 1;
    dispatch(setDirection('forward'));
    if (nextPhotoIndex < slider.perPage) {
      dispatch(setMainImageIndex(nextPhotoIndex));
    } else {
      dispatch(setNextPage());
      dispatch(searchPhotos(window.store));
    }
  }

  showPriorPhoto() {
    const { slider, dispatch } = this.props;
    const priorPhotoIndex = slider.mainImageIndex - 1;
    dispatch(setDirection('back'));
    if (priorPhotoIndex >= 0) {
      dispatch(setMainImageIndex(priorPhotoIndex));
    } else {
      dispatch(setPriorPage());
      dispatch(searchPhotos(window.store));
    }
  }

  showLeftArrow() {
    const { slider, photos } = this.props;
    const page = photos ? photos.page : 1;
    return (slider.mainImageIndex > 0 || page > 1)
      ? <span id="leftArrow" onClick={() => this.showPriorPhoto()} style={arrowStyle}>&larr;</span>
      : null;
  }

  showRightArrow() {
    const { photos = {} } = this.props;
    const havePhotos = Array.isArray(photos.photo);
    return havePhotos
      ? <span id="rightArrow" onClick={() => this.showNextPhoto()} style={arrowStyle}>&rarr;</span>
      : <p id="instructions">Please use the search field above</p>;
  }

  render() {
    const arrPhotos = this.getThumbnailPhotos();
    const photosInState = Array.isArray(arrPhotos);
    const thumbPhotos = photosInState
      ? (
        <div id="thumbnailWrapper">
          <Thumbnails
            thumbnails={this.getThumbnailPhotos()}
            onThumbnailClick={this.onThumbnailClick}
            selected={this.props.slider.mainImageIndex}
          />
        </div>
      )
      : null;
    const mainPhoto = photosInState
      ? this.getMainPhoto()
      : null;
    return (
      <div id="slider">
        <div id="mainPhotoContainer">
          {this.showLeftArrow()}
          {mainPhoto}
          {this.showRightArrow()}
        </div>
        {thumbPhotos}
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    photos: state.searchPhotos.photos,
    slider: state.slider,
  }
);

export default connect(mapStateToProps)(Slider);
