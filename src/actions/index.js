
// eslint-disable-next-line import/prefer-default-export
export const setFavorite = (payload) => {
  return (
    {
      type: 'SET_FAVORITE',
      payload,
    }
  );
};

export const deleteFavorite = (payload) => {
  return (
    {
      type: 'DELETE_FAVORITE',
      payload,
    }
  );
};

export const openVideoPLayer = (payload) => {
  return (
    {
      type: 'PLAY_VIDEO',
      payload,
    }
  );
};

export const loginRequest = (payload) => {
  return ({
    type: 'LOGIN_REQUEST',
    payload,
  });
};

export const logoutRequest = (payload) => {
  return ({
    type: 'LOGOUT_REQUEST',
    payload,
  });
};
