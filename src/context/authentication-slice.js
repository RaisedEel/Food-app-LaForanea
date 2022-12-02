import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showLogin: false,
  isAuthenticated: false,
  currentProfile: {},
  profiles: [{ email: 'testing@gmail.com', password: '1111' }],
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    toggleLogin(state) {
      if (state.isAuthenticated) return;
      state.showLogin = !state.showLogin;
    },
    addProfile(state, action) {
      state.profiles.push(action.payload);
      state.currentProfile(action.payload);
      state.isAuthenticated = true;
      state.showLogin = false;
    },
    login(state, action) {
      const profile = state.profiles.find(
        (profile) =>
          profile.email === action.payload.email &&
          profile.password === action.payload.password
      );

      if (!profile) return;

      state.currentProfile = profile;
      state.isAuthenticated = true;
      state.showLogin = false;
    },
    logout(state) {
      state.currentProfile = {};
      state.isAuthenticated = false;
    },
  },
});

export const authenticationActions = authenticationSlice.actions;
export default authenticationSlice;
