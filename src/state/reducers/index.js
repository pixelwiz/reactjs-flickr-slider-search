import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import searchPhotos from './searchPhotos';


export default combineReducers({
  searchPhotos,
  form: reduxFormReducer, // mounted under "form"
});
