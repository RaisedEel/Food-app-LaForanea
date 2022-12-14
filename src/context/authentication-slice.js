import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  showLogin: false,
  currentProfile: -1,
  profiles: [
    {
      id: 'abcd101',
      name: 'Martina Goméz Palacios',
      email: 'client@gmail.com',
      password: '1111',
      type: 'client',
      favored: [],
      reviewed: [],
    },
    {
      id: 'abcd102',
      name: 'Joaquín Hernandéz',
      email: 'owner@gmail.com',
      password: '1111',
      type: 'owner',
      favored: [],
      reviewed: [],
    },
  ],
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    toggleLogin(state) {
      if (state.currentProfile !== -1) return;
      state.showLogin = !state.showLogin;
    },
    addProfile(state, action) {
      state.currentProfile = state.profiles.length;
      state.profiles.push(action.payload);
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
      state.showLogin = false;
    },
    logout(state) {
      state.currentProfile = -1;
    },
    toggleFavoriteRestaurant(state, action) {
      const currentProfile = state.profiles[state.currentProfile];

      if (currentProfile.favored.includes(action.payload)) {
        currentProfile.favored = currentProfile.favored.filter(
          (restaurant) => restaurant !== action.payload
        );
        return;
      }

      currentProfile.favored.push(action.payload);
    },
    updateReviews(state, action) {
      const currentProfile = state.profiles[state.currentProfile];
      const review = currentProfile.reviewed.find(
        (review) => review.id === action.payload.id
      );

      if (review && action.payload.rating === 0) {
        currentProfile.reviewed = currentProfile.reviewed.filter(
          (review) => review.id !== action.payload.id
        );
        return;
      }

      if (review) {
        review.rating = action.payload.rating;
        return;
      }

      currentProfile.reviewed.push(action.payload);
    },
  },
});

export const selectCurrentProfile = createSelector(
  (state) => state.authentication.profiles,
  (state) => state.authentication.currentProfile,
  (profiles, currentProfileIndex) => profiles[currentProfileIndex]
);
export const authenticationActions = authenticationSlice.actions;
export default authenticationSlice;
