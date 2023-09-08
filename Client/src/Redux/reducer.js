import { ADD_FAVORITE, FILTER, ORDER, REMOVE_FAVORITE } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case FILTER:
      return {
        ...state,
        myFavorites: [...state.allCharacters].filter((char) => {
          if (action.payload === "ALL") return state.allCharacters;
          else return char.gender === action.payload;
        }),
      };
    case ORDER:
      return {
        ...state,
        myFavorites: [...state.myFavorites].sort((a, b) => {
          if (action.payload === "A") return a.id - b.id;
          else return b.id - a.id;
        }),
      };
    default:
      return state;
  }
}
