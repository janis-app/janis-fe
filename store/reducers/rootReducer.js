// rootReducer.js

import userReducer from "./userReducers";

const rootReducer = (state = {}, action) => {
  return {
    user: userReducer(state.user, action),
  };
};

export default rootReducer;
