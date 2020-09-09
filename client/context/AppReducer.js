const AppReducer = (state, action) => {
  switch (action.type) {
    case 'SIGNIN':
      return {
        ...state,
        loading: true,
        isAuthenticated: true,
        user: action.payload,
      };

    case 'SIGNIN_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default AppReducer;
