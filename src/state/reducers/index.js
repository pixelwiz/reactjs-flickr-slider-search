import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import searchPhotos from './searchPhotos';
import setMainImage from './setMainImage';


export default combineReducers({
  searchPhotos,
  slider: setMainImage,
  form: reduxFormReducer, // mounted under "form"
});
