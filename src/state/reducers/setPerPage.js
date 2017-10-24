export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_PER_PAGE':
      return {
        ...state,
        perPage: action.perPage,
      };
    default:
      return state;
  }
};
