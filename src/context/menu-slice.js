import { createSlice } from '@reduxjs/toolkit';

const initialMenu = {
  restaurantOwner: '',
  menu: [],
  slice: [],
  categories: [],
  currentCategory: '',
  currentPage: -1,
  numberOfPages: -1,
  amountPerPage: 4,
  showDishForm: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState: initialMenu,
  reducers: {
    setMenu(state, action) {
      state.restaurantOwner = action.payload.owner;
      state.menu = action.payload.menu;
      state.categories = action.payload.categories;
    },
    setCategory(state, action) {
      state.currentCategory = state.categories[action.payload];
      state.slice = state.menu.filter(
        (dish) => dish.category === state.currentCategory
      );
      state.currentPage = 1;
      state.numberOfPages = Math.max(
        Math.ceil(state.slice.length / state.amountPerPage),
        1
      );

      if (state.numberOfPages === 0) {
      }
    },
    increasePage(state) {
      if (state.currentPage >= state.numberOfPages) {
        return;
      }

      state.currentPage++;
    },
    decreasePage(state) {
      if (state.currentPage === 1) {
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
    openDishForm(state) {
      state.showDishForm = true;
    },
    closeDishForm(state) {
      state.showDishForm = false;
    },
  },
});

export default menuSlice;
export const menuActions = menuSlice.actions;
