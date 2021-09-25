import * as api from '../api/index';
import { FETCH_ALL, CREATE } from '../constants/types';

export const getArts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchArts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    //
  }
};

export const createArt = (art) => async (dispatch) => {
  try {
    const { data } = await api.createArt(art);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    //
  }
};
