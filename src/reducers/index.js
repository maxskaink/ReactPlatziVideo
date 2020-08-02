/* eslint-disable no-case-declarations */
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
          Player: true,
        },
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'SEARCH_REQUEST':
      if (action.payload.length === 0) {
        return { ...state };
      }
      const allVideos = [...state.trends, ...state.originals];
      const search = action.payload.toLowerCase();
      const videosSearch = allVideos.filter((video) => video.description.toLowerCase().indexOf(search, 0) !== -1 || video.title.toLowerCase().indexOf(search, 0) !== -1 || video.type.toLowerCase().indexOf(search, 0) !== -1 && videosSearch.length < 7 );
      console.log(videosSearch);
      return {
        ...state,
        search: videosSearch,
      };
    default:
      return state;
  }
};

export default reducer;

