// dayPlanReducer.js

const initialState = {
  dayPlan: null,
};

const dayPlanReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_DAY_PLAN":
      return { ...state, dayPlan: action.payload };

    case "SIGN_OUT": 
      return initialState
    // Other cases related to the user
    default:
      return state;
  }
};

export default dayPlanReducer;
