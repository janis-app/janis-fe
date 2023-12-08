// userReducer.js

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER":
      return { ...state, user: action.payload };
    case "UPDATE_USER":
      return {
        ...state,
        user: { ...state.user, profile_image: action.payload.profile_image },
      };
    case "UPDATE_USER_INFOMATION_GATHERING":
      return {
        ...state,
        user: { ...state.user, information_gathering: action.payload },
      };
    // Other cases related to the user
    default:
      return state;
  }
};

export default userReducer;