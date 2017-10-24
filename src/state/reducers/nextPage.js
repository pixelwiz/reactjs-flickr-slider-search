export default (state = {}, action) => {
  switch (action.type) {
    case 'NEXT_PAGE':
      return {
        ...state,
        pageNum: action.pageNum + 1,
      };
    default:
      return state;
  }
};
