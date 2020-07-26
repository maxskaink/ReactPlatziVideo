const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      if (state.myList.filter((element) => element.id === action.payload.id).length !== 0) {
        return state;
      }
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case 'PLAY_VIDEO':
      return {
        ...state,
        videoPlayer: {
          url: action.payload,
          Player: true
        }
      };
    default:
      return state;
  }
};

export default reducer;

