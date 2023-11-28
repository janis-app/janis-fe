"use client"

import { createContext, useReducer, ReactNode, Dispatch } from "react";


const initialState = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "USER":
      return { ...state, user: action.payload };
    case "UPDATE_USER":
      return { ...state, user: { ...state.user, profile_image: action.payload.profile_image } };
    case "DECREMENT":
      // Assuming you want to remove 'count' from the state
      return { ...state };
    case "RESET":
      // Assuming you want to remove 'count' from the state
      return { ...state };
    default:
      return state;
  }
};


export const AppContext = createContext({
  state: initialState,
  dispatch: () => null,
});




// const LineBreak = ({children}: Props): React.ReactNode => {

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};