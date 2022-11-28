import { createSlice } from '@reduxjs/toolkit';

const initialState = { history: [] };

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    reset() {
      return initialState;
    },
    setRestaurants(state, action) {
      if (state.history.some((record) => record.code === action.payload.code))
        return;

      state.history.push({
        code: action.payload.code,
        name: action.payload.name,
        elements: action.payload.elements,
      });
    },
  },
});

export default restaurantsSlice;
export const restaurantsActions = restaurantsSlice.actions;
