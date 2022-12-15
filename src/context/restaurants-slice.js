import { createSelector, createSlice } from '@reduxjs/toolkit';
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
    addCategory(state, action) {
      const restaurant = state.allRestaurants.find(
        (restaurant) => restaurant.id === action.payload.id
      );

      if (
        !restaurant ||
        restaurant.categories.includes(action.payload.category)
      )
        return;

      restaurant.categories.push(action.payload.category);
    },
    updateCategory(state, action) {
      const restaurant = state.allRestaurants.find(
        (restaurant) => restaurant.id === action.payload.id
      );

      if (
        !restaurant ||
        restaurant.categories.includes(action.payload.newCategory)
      )
        return;

      const categoryIndex = restaurant.categories.findIndex(
        (category) => category === action.payload.oldCategory
      );

      if (categoryIndex === -1) return;

      restaurant.categories[categoryIndex] = action.payload.newCategory;
      for (const dish of restaurant.menu) {
        if (dish.category !== action.payload.oldCategory) {
          continue;
        }

        dish.category = action.payload.newCategory;
      }
    },
    removeCategory(state, action) {
      const restaurant = state.allRestaurants.find(
        (restaurant) => restaurant.id === action.payload.id
      );

      if (!restaurant || restaurant.categories.length === 1) return;

      restaurant.categories = restaurant.categories.filter(
        (category) => category !== action.payload.category
      );

      restaurant.menu = restaurant.menu.filter(
        (dish) => dish.category !== action.payload.category
      );
    },
    addDish() {},
    updateDish() {},
    removeDish() {},
  },
});

export const selectRestaurantById = createSelector(
  (state) => state.restaurants.allRestaurants,
  (state, id) => id,
  (allRestaurants, id) =>
    allRestaurants.find((restaurant) => restaurant.id === id)
);

export const selectRestaurantByOwner = createSelector(
  (state) => state.restaurants.allRestaurants,
  (state, ownerId) => ownerId,
  (allRestaurants, ownerId) =>
    allRestaurants.find((restaurant) => restaurant.restaurantOwner === ownerId)
);
export default restaurantsSlice;
export const restaurantsActions = restaurantsSlice.actions;
