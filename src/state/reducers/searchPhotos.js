export default (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_PHOTOS':
      console.log('got to reducer');
      return action.photos;
    default:
      return state;
  }
};
