import React, { createContext, useContext, useReducer } from 'react';

// Create the context
export const StateContext = createContext();

// StateProvider component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Custom hook to pull data from the data layer
export const useStateValue = () => useContext(StateContext);
