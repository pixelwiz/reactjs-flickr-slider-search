import fetch from '../../utils/fetch';
import { setFetchError } from './setFetchError';

const urlBase = 'https://api.flickr.com/services/rest/';

export const setPhotos = photos => ({
  type: 'SET_PHOTOS',
  photos,
});

const callFlickrPhotosSeachAPI = async (dispatch) => {
  try {
    // perPage should be a configurable option,
    // but since requirements docs showed 4 specifically for this prototype...
    const perPage = 4;
    const searchTags = 'awards'; // This needs to come from the form/input field...
    const method = 'flickr.photos.search';
    const urlSearch = `${urlBase}?method=${method}&api_key=${process.env.REACT_APP_FLICKR_KEY}&per_page=${perPage}&tags=${searchTags}&format=json&nojsoncallback=true`;
    const result = await fetch(urlSearch);
    dispatch(setPhotos(result));
  } catch (err) {
    dispatch(setFetchError(err));
    throw err;
  }
};

export const searchPhotos = store => (dispatch) => {
  callFlickrPhotosSeachAPI(dispatch, store);
};

export default undefined;
