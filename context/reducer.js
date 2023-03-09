export const reducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN": {
      return { ...state, isLogin: true, user: action.payload };
    }
    case "TOGGLE_THEME": {
      return { ...state, darkTheme: !state.darkTheme };
    }
    default: {
      return state;
    }
  }
};
