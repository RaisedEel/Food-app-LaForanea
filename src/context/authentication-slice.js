import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showLogin: false,
  isAuthenticated: false,
  currentProfile: -1,
  profiles: [
    {
      id: 'abcd101',
      name: 'Martina Goméz Palacios',
      email: 'client@gmail.com',
      password: '1111',
      type: 'client',
      restaurants: [],
    },
    {
      id: 'abcd102',
      name: 'Joaquín Hernandéz',
      email: 'owner@gmail.com',
      password: '1111',
      type: 'owner',
      restaurants: [],
    },
  ],
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
      state.currentProfile = state.profiles.length;
      state.profiles.push(action.payload);
      state.isAuthenticated = true;
      state.showLogin = false;
    },
    updateProfile(state, action) {
      const profileToUpdate = state.profiles[state.currentProfile];

      if (!profileToUpdate) return;

      Object.assign(profileToUpdate, action.payload);
    },
    login(state, action) {
      const profileIndex = state.profiles.findIndex(
        (profile) =>
          profile.email === action.payload.email &&
          profile.password === action.payload.password
      );

      if (profileIndex === -1) return;

      state.currentProfile = profileIndex;
      state.isAuthenticated = true;
      state.showLogin = false;
    },
    logout(state) {
      state.currentProfile = -1;
      state.isAuthenticated = false;
    },
    toggleFavoriteRestaurant(state, action) {
      if (
        state.profiles[state.currentProfile].restaurants.includes(
          action.payload
        )
      ) {
        state.profiles[state.currentProfile].restaurants = state.profiles[
          state.currentProfile
        ].restaurants.filter((restaurant) => restaurant !== action.payload);
        return;
      }

      state.profiles[state.currentProfile].restaurants.push(action.payload);
    },
  },
});

export const authenticationActions = authenticationSlice.actions;
export default authenticationSlice;
