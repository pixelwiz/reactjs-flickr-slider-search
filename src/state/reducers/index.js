import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import searchPhotos from './searchPhotos';
import setMainImage from './setMainImage';
import nextPage from './nextPage';
import setPerPage from './setPerPage';


export default combineReducers({
  searchPhotos,
  slider: combineReducers({
    mainImageIndex: setMainImage,
    pageNum: nextPage,
    perPage: setPerPage,
  }),
  form: reduxFormReducer, // mounted under "form"
});
