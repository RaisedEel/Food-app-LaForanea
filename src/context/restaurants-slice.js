import { createSlice } from '@reduxjs/toolkit';

const initialState = { elements: [], size: 0 };

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    reset(state) {
      state = initialState;
    },
    setRestaurants(state, action) {
      state.elements = action.payload;
      state.size = action.payload.length;
    },
  },
});

export default restaurantsSlice;
export const restaurantsActions = restaurantsSlice.actions;
