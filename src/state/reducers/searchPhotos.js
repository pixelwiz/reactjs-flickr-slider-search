export default (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_PHOTOS':
      console.log('got here');
      return action.photos;
    default:
      return state;
  }
};
