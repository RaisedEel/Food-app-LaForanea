import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: '', elements: [], size: 0 };

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    reset(state) {
      state = initialState;
    },
    setRestaurants(state, action) {
      state.name = action.payload.name;
      state.elements = action.payload.elements;
      state.size = action.payload.elements.length;
    },
  },
});

export default restaurantsSlice;
export const restaurantsActions = restaurantsSlice.actions;
