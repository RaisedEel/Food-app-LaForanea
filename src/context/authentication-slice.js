import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showLogin: true,
  isAuthenticated: false,
  profiles: [],
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    toggleLogin(state) {
      if (state.isAuthenticated) return false;
      state.showLogin = !state.showLogin;
    },
    addProfile(state, action) {
      state.profiles.push(action.payload);
      state.isAuthenticated = true;
      state.showLogin = false;
    },
    login(state, action) {
      state.isAuthenticated = true;
      state.showLogin = false;
    },
  },
});

export const authenticationActions = authenticationSlice.actions;
export default authenticationSlice;
