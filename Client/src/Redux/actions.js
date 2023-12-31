import axios from "axios";
import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./action-types";

export const addFavorite = (character) => {
  const endpoint = "https://rickandmortyapispa.onrender.com/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAVORITE,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const removeFavorite = (id) => {
  const endpoint =
    "https://rickandmortyapispa.onrender.com/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAVORITE,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}
export function orderCards(order) {
  return {
    type: ORDER,
    payload: order,
  };
}
