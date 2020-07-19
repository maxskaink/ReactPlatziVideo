
// eslint-disable-next-line import/prefer-default-export
export const setFavorite = (payload) => {
  return ({
    type: 'SET_FAVORITE',
    payload,
  });
};
