import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showLogin: false,
  isAuthenticated: false,
  currentProfile: {},
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
      state.profiles.push(action.payload);
      state.currentProfile = action.payload;
      state.isAuthenticated = true;
      state.showLogin = false;
    },
    updateProfile(state, action) {
      const profileToUpdate = state.profiles.find(
        (profile) => profile.id === action.payload.id
      );

      if (!profileToUpdate) return;

      Object.assign(profileToUpdate, {
        ...action.payload.values,
        id: action.payload.id,
      });

      state.currentProfile = profileToUpdate;
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
    addFavoriteRestaurant() {},
    removeFavoriteRestaurant() {},
  },
});

export const authenticationActions = authenticationSlice.actions;
export default authenticationSlice;
