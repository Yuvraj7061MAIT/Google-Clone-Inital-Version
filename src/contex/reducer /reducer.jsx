export const initialState = {
    term: null, // Initial state for search term
  };
  
  export const actionType = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM", // Action type to set the search term
  };
  
  // Reducer function to handle state changes
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case actionType.SET_SEARCH_TERM:
        return {
          ...state,
          term: action.term, // Update the term in the state
        };
      default:
        return state; // Return the default state if no action matches
    }
  };
  
  export default reducer;
  