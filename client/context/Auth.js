import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  user: null,
  error: null,
  loading: null,
};

// Create context
export const AuthContext = createContext(initialState);

// Provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function signIn(credentials) {
    const config = {
      headers: {
        'Context-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/users/signin', credentials, config);
      dispatch({
        type: 'SIGNIN',
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: 'SIGNIN_ERROR',
        payload: err.data,
      });
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        error: state.error,
        loading: state.loading,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
