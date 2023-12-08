// AppContextProvider.js

import rootReducer from "@/store/reducers/rootReducer";
import { createContext, useReducer } from "react";

const initialState = {
  user: null,
  // Add initial state for other parts of the state
};

export const AppContext = createContext({
  state: initialState,
  dispatch: () => null,
});

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
