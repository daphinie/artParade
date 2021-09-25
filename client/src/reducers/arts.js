import { FETCH_ALL, CREATE } from '../constants/types';

export default (arts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...arts, action.payload];
    default:
      return arts;
  }
};
