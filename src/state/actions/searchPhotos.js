import fetch from '../../utils/fetch';
import { setFetchError } from './setFetchError';

const urlBase = 'https://api.flickr.com/services/rest/';

export const setPhotos = photos => ({
  type: 'SET_PHOTOS',
  photos,
});

const callFlickrPhotosSearchAPI = async (dispatch, store) => {
  try {
    const tempStore = store.getState();
    const searchTags = tempStore.form.searchForm.values ? tempStore.form.searchForm.values.search : 'super computers';
    const { perPage, pageNum } = tempStore.slider;
    const method = 'flickr.photos.search';
    const urlSearch = `${urlBase}?method=${method}&api_key=${process.env.REACT_APP_FLICKR_KEY}&per_page=${perPage}&tags=${searchTags}&format=json&nojsoncallback=true&page=${pageNum}`;
    const result = await fetch(urlSearch);
    dispatch(setPhotos(result));

  } catch (err) {
    dispatch(setFetchError(err));
    throw err;
  }
};

export const searchPhotos = store => (dispatch) => {
  callFlickrPhotosSearchAPI(dispatch, store);
};

export default undefined;
