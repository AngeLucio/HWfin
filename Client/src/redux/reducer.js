const InitialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case "ADD_FAV":
      return { ...state, myFavorites: payload, 
        allCharacters: payload };
    // case "ADD_FAV":
    //   // eslint-disable-next-line no-case-declarations
    //   let copy1 = state.allCharacters;
    //   copy1.push(payload);
    //   return {
    //     ...state,
    //     myFavorites: copy1,
    //     allCharacters: copy1,
    //   };
    
    case "REMOVE_FAV":
      return { ...state, 
        myFavorites: payload };
    // case "REMOVE_FAV":
    //   // eslint-disable-next-line no-case-declarations
    //   let copy2 = state.myFavorites.filter(
    //     (char) => char.id !== Number(payload)
    //   );
    //   return {
    //     ...state,
    //     myFavorites: copy2,
    //   };
    case "FILTER":
      // eslint-disable-next-line no-case-declarations
      let copy3 = state.allCharacters.filter((char) => {
        return char.gender === payload;
      });
      return {
        ...state,
        myFavorites: copy3,
      };
    case "ORDER":
      // eslint-disable-next-line no-case-declarations
      let copy4 = state.allCharacters.sort((a, b) => {
        return payload === "A" ? a.id - b.id : b.id - a.id;
      });
      return {
        ...state,
        myFavorites: copy4,
      };

    default:
      return state;
  }
};

export default rootReducer;
