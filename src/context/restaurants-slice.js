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
    updateRestaurant(state, action) {
      const restaurantToUpdate = state.allRestaurants.find(
        (restaurant) => restaurant.restaurantOwner === action.payload.id
      );

      if (!restaurantToUpdate) return;

      Object.assign(restaurantToUpdate, {
        ...action.payload.values,
        restaurantOwner: action.payload.id,
      });
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
    updateRating(state, action) {
      const restaurant = state.allRestaurants.find(
        (restaurant) => restaurant.id === action.payload.id
      );

      if (!restaurant) return;

      if (action.payload.oldRating > 0) {
        restaurant.rating[1]--;

        if (restaurant.rating[1] === 0) {
          restaurant.rating[0] = 0;
        } else {
          restaurant.rating[0] =
            (restaurant.rating[0] * (restaurant.rating[1] + 1) -
              action.payload.oldRating) /
            restaurant.rating[1];
        }
      }

      if (action.payload.newRating <= 0) return;

      restaurant.rating[1]++;
      restaurant.rating[0] =
        restaurant.rating[0] +
        (action.payload.newRating - restaurant.rating[0]) /
          restaurant.rating[1];
    },
  },
});

export default restaurantsSlice;
export const restaurantsActions = restaurantsSlice.actions;
