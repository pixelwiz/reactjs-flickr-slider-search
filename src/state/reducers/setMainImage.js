export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_MAIN_IMAGE':
      return {
        ...state,
        mainImageIndex: action.mainImageIndex,
      };
    default:
      return state;
  }
};
