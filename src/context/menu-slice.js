import { createSlice } from '@reduxjs/toolkit';

const initialMenu = {
  id: '',
  restaurantOwner: '',
  menu: [],
  slice: [],
  categories: [],
  currentCategory: '',
  currentPage: -1,
  numberOfPages: -1,
  amountPerPage: 4,
  dishFormState: { show: false, id: -1, values: null },
};

const menuSlice = createSlice({
  name: 'menu',
  initialState: initialMenu,
  reducers: {
    setMenu(state, action) {
      state.id = action.payload.id;
      state.restaurantOwner = action.payload.owner;
      state.menu = action.payload.menu;
      state.categories = action.payload.categories;
    },
    setCategory(state, action) {
      if (Number.isInteger(action.payload)) {
        state.currentCategory = state.categories[action.payload];
      } else {
        state.currentCategory = action.payload || state.currentCategory;
      }

      if (!state.currentCategory) state.currentCategory = state.categories[0];

      state.slice = state.menu.filter(
        (dish) => dish.category === state.currentCategory
      );
      state.currentPage = 1;
      state.numberOfPages = Math.max(
        Math.ceil(state.slice.length / state.amountPerPage),
        1
      );
    },
    increasePage(state) {
      if (state.currentPage >= state.numberOfPages) {
        return;
      }

      state.currentPage++;
    },
    decreasePage(state) {
      if (state.currentPage <= 1) {
        state.currentPage = 1;
        return;
      }

      state.currentPage--;
    },
    goToPage(state, action) {
      if (action.payload <= state.numberOfPages) {
        state.currentPage = action.payload;
        return;
      }

      state.currentPage = state.numberOfPages;
    },
    openDishForm(state, action) {
      state.dishFormState.show = true;
      if (action.payload) {
        state.dishFormState.values = state.slice.find(
          (dish) => dish.id === +action.payload
        );
      }
    },
    closeDishForm(state) {
      state.dishFormState.show = false;
      state.dishFormState.id = -1;
      state.dishFormState.values = null;
    },
  },
});

export default menuSlice;
export const menuActions = menuSlice.actions;
