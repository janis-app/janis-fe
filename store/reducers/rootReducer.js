// rootReducer.js

import dayPlanReducer from "./dayPlanReducer";
import userReducer from "./userReducers";

const rootReducer = (state = {}, action) => {
  return {
    user: userReducer(state.user, action),
    dayPlan: dayPlanReducer(state.dayPlan, action)
  };
};

export default rootReducer;
