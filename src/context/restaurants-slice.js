import { createSlice } from '@reduxjs/toolkit';
import restaurants from '../data/restaurants-data';

const initialState = { allRestaurants: restaurants, history: [] };

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    reset() {
      return initialState;
    },
    addRestaurant(state, action) {
      if (
        state.allRestaurants.some(
          (restaurant) => restaurant.id === action.payload.id
        )
      )
        return;

      state.allRestaurants.push(action.payload);
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
