
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
  )
}