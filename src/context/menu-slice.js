import { createSlice } from '@reduxjs/toolkit';

const initialMenu = {
  restaurantId: '',
  menu: [],
  slice: [],
  currentCategory: '',
  currentPage: 1,
  amountPerPage: 4,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState: initialMenu,
  reducers: {
    setMenu(state, action) {
      state.menu = action.payload;
    },
    setCategory(state, action) {
      state.currentCategory = action.payload;
      state.slice = state.menu.filter(
        (dish) => dish.category === action.payload
      );
      state.currentPage = 1;
    },
    increasePage(state) {
      if (state.currentPage >= state.slice.length / state.amountPerPage) {
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
      if (action.payload <= state.slice.length / state.amountPerPage) {
        state.currentPage = action.payload;
        return;
      }

      state.currentPage = Math.ceil(state.slice.length / state.amountPerPage);
    },
  },
});

export default menuSlice;
export const menuActions = menuSlice.actions;
